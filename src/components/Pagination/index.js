import PropTypes from 'prop-types';
import React from 'react';
import './Pagination.css';

const Pagination = ({ total, current, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${current === number ? 'active' : ''}`}>
          <button onClick={() => onPageChange(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
