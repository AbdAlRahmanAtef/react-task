import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setCurrentPage, count }) => {
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <ReactPaginate
      previousLabel=" &lt;"
      nextLabel="&gt;"
      breakLabel="..."
      pageCount={count}
      onPageChange={handlePageClick}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

export default Pagination;
