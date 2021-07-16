import styles from "../styles/pagesBundle.module.css";



const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
<div className={styles.wrapper}>

    <nav className={styles.container}>
      <ul className={styles.common}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.page} onClick={() => paginate(number)}>
            <a  className={styles.pagelink}  /* href={'!#'} */>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default Pagination;
