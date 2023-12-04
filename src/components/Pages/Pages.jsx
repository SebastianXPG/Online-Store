import { useState } from "react";
import "../Pages/Pages.css";

const Pages = ({
  productsPage,
  currentPage,
  setCurrentPage,
  totalProducts,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPage); i++) {
    pageNumbers.push(i);
  }

  const [, setButtonDisabled] = useState(false);
  const disabled = () => {
    if (currentPage === 0 || currentPage >= pageNumbers.length) {
      setButtonDisabled(true);
    }
  };

  const previusPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const specificPage = (x) => {
    setCurrentPage(x);
  };

  return (
    <nav
      className="pagination is-centered mb-7"
      role="navigation"
      aria-label="pagination"
    >
      <button onClick={currentPage === 1 ? disabled : previusPage}>
        Anterior
      </button>
      <button onClick={currentPage >= pageNumbers.length ? disabled : nextPage}>
        Siguiente
      </button>
      <ul className="pagination-list">
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <button
              className={`pagination-link ${
                noPage === currentPage ? "is-current" : ""
              }`}
              onClick={() => specificPage(noPage)}
            >
              {noPage}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pages;
