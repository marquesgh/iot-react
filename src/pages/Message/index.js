import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import MessageService from '../../services/MessageService';

function MessagePage() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function fetchMessages() {
      setIsLoading(true);
      try {
        const response = await MessageService.getAll(currentPage);
        setMessages(response.data);
        setTotalPages(response.meta.totalPages);
        setCurrentPage(response.meta.currentPage);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMessages();
  }, [currentPage]);

  const columns = [
    { key: 'tag', name: 'Tag' },
    { key: 'imei', name: 'IMEI' },
    { key: 'value', name: 'Value' },
    { key: 'timestamp', name: 'Timestamp' },
  ];

  return (
    <div>
      {error ? (
        <div>Failed to load Messages: {error}</div>
      ) : isLoading ? (
        <div>Loading Messages...</div>
      ) : (
        <div>
          <Table title="Messages" columns={columns} data={messages} />
          <Pagination total={totalPages} current={currentPage} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
}

export default MessagePage;
