import { useState } from "react";

const Pages = ({
  productsPage, // Número de productos por página
  currentPage, // Página actual
  setCurrentPage, // Función para actualizar la página actual
  totalProducts, // Total de productos
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPage); i++) {
    pageNumbers.push(i);
  }

  const [setButtonDisabled] = useState(false);
  const disabled = () => {
    if (currentPage === 0 || currentPage >= pageNumbers.length) {
      setButtonDisabled(true); // Deshabilitar botón si la página actual es 0 o es mayor o igual al número total de páginas
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
      <button onClick={currentPage === 1 ? disabled : previusPage}>⋘</button>
      <button onClick={currentPage >= pageNumbers.length ? disabled : nextPage}>
        ⋙
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
