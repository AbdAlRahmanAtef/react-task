import React, { useState } from "react";

const Pagination = ({ currentPage, setCurrentPage, count }) => {
  let data = [];

  for (let i = 1; i <= count; i++) {
    data.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 0}
      >
        &lt;
      </button>
      {data.map((item, index) => (
        <div
          className={`pagination-button ${currentPage === index && "active"}`}
          key={index}
          onClick={() => setCurrentPage(index)}
        >
          {item}
        </div>
      ))}
      <button
        className="pagination-button"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === 2}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
