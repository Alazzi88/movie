import { useState, useEffect } from "react";
import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/movieAction";

const PaginationComb = () => {

  const [pageCount, setpageCount] = useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setpageCount(pages);

  }, []);


  // get current page
  const getPageMovie = async (page) => {

  };


  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));

    getPageMovie(data.selected + 1);


  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel=" السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComb;
