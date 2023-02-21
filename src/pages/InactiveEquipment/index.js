import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import EquipmentService from '../../services/EquipmentService';

function InactiveEquipmentPage() {
  const [equipments, setInactiveEquipments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function fetchInactiveEquipments() {
      setIsLoading(true);
      try {
        const response = await EquipmentService.getInactive(currentPage);
        setInactiveEquipments(response.data);
        setTotalPages(response.meta.totalPages);
        setCurrentPage(response.meta.currentPage);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchInactiveEquipments();
  }, [currentPage, limit]);

  const columns = [
    { key: 'imei', name: 'IMEI' },
    { key: 'status', name: 'Status' },
  ];

  return (
    <div>
      {error ? (
        <div>Failed to load inactive equipments: {error}</div>
      ) : isLoading ? (
        <div>Loading inactive equipments...</div>
      ) : (
        <div>
          <Table title="Inactive Equipments" columns={columns} data={equipments} />
          <Pagination total={totalPages} current={currentPage} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
}

export default InactiveEquipmentPage;
