const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="project-page-btn-con">
      {pages.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            key={index}
            className={`project-page-btn  ${
              page === currentPage ? "project-page-btn-active" : ""
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
