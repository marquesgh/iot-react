import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import FaqService from '../../services/FaqService';

function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function fetchFaqs() {
      setIsLoading(true);
      try {
        const response = await FaqService.getAll(currentPage);
        setFaqs(response.data);
        setTotalPages(response.meta.totalPages);
        setCurrentPage(response.meta.currentPage);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFaqs();
  }, [currentPage]);

  const columns = [
    { key: 'description', name: 'Description' },
    { key: 'solution', name: 'Solution' },
  ];

  return (
    <div>
      {error ? (
        <div>Failed to load FAQs: {error}</div>
      ) : isLoading ? (
        <div>Loading FAQs...</div>
      ) : (
        <div>
          <Table title="FAQ" columns={columns} data={faqs} />
          <Pagination total={totalPages} current={currentPage} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
}

export default FaqPage;
