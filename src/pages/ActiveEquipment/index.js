import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import EquipmentService from '../../services/EquipmentService';

function ActiveEquipmentPage() {
  const [equipments, setActiveEquipments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function fetchActiveEquipments() {
      setIsLoading(true);
      try {
        const response = await EquipmentService.getActive(currentPage);
        setActiveEquipments(response.data);
        setTotalPages(response.meta.totalPages);
        setCurrentPage(response.meta.currentPage);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchActiveEquipments();
  }, [currentPage]);

  const columns = [
    { key: 'imei', name: 'IMEI' },
    { key: 'description', name: 'Description' },
  ];

  return (
    <div>
      {error ? (
        <div>Failed to load active equipments: {error}</div>
      ) : isLoading ? (
        <div>Loading active equipments...</div>
      ) : (
        <div>
          <Table title="Active Equipments" columns={columns} data={equipments} />
          <Pagination total={totalPages} current={currentPage} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
}

export default ActiveEquipmentPage;
