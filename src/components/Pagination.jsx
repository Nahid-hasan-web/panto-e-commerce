import React, { useEffect, useState } from "react";

const Pagination = ({ data = [], itemsPerPage = 5, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  useEffect(() => {
    onPageChange(getCurrentItems());
  }, [currentPage, data]);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="text-center mt-4">
      <div className="flex justify-center gap-2 flex-wrap">
        <button onClick={() => changePage(1)} disabled={currentPage === 1}>
          ⏮ First
        </button>
        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
          ◀ Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => changePage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next ▶
        </button>
        <button onClick={() => changePage(totalPages)} disabled={currentPage === totalPages}>
          Last ⏭
        </button>
      </div>
    </div>
  );
};

export default Pagination;
