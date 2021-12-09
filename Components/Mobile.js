import styles from "../styles/mobile.module.css";
import Link from "next/link";
import Context from "./Context";
import { ImCross } from "react-icons/im";

export default function Mobile() {
  return (
    <div className={styles.wrap}>
      <div>
        <Context.Consumer>
          {(value) => (
            <div className={styles.button} onClick={value}>
              <ImCross />
            </div>
          )}
        </Context.Consumer>
        <nav className={styles.navmenu}>
          <ul className={styles.ul}>
            <Link href={`/`}>
              <a className={styles.link}>
                <li className={styles.li}>Главная</li>
              </a>
            </Link>
            <Link href={`allowance/`}>
              <a className={styles.link}>
                <li className={styles.li}>Пособия</li>
              </a>
            </Link>
            <Link href={`concessions/`}>
              <a className={styles.link}>
                <li className={styles.li}>Льготы</li>
              </a>
            </Link>
            <Link href={`subsidy/`}>
              <a className={styles.link}>
                <li className={styles.li}>Субсидия</li>
              </a>
            </Link>
            <Link href={`invalids/`}>
              <a className={styles.link}>
                <li className={styles.li}>Инвалидам</li>
              </a>
            </Link>
            <Link href={`price-request/`}>
              <a className={styles.link}>
                <li className={styles.li}>Ценовые запросы</li>
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
