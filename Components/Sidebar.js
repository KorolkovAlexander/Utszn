import styles from "../styles/sidebar.module.scss";
import Link from "next/link";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { ImCross } from "react-icons/im";
export default function Sidebar({ updateData }) {
  const [state, setState] = useState(true);

  const handler = () => {
    setState(!state);
  };
  updateData(state);

  let button;
  if (state) {
    button = (
      <nav className={styles.linkswrapper}>
        <FaListUl className={styles.menu} onClick={handler} />
      </nav>
    );
  } else {
    button = (
      <nav className={styles.linkswrapperActive}>
        <ImCross className={styles.menuActive} onClick={handler} />
      </nav>
    );
  }

  return (
    <div className={!state ? styles.sidewrapper : styles.sidewrapperactive}>
      {button}
      <div className={!state ? styles.panel : styles.panelactive}>
        <Link href={"/"}>
          <a className={styles.linkclass}>
          На главную
          </a>
        </Link>
        <Link href={"/allowance"}>
          <a className={styles.linkclass}>
            Пособия
          </a>
        </Link>
        <Link href={"/concessions"}>
          <a className={styles.linkclass}>
            Льготы
          </a>
        </Link>
        <Link href={"/subsidy"}>
          <a className={styles.linkclass}>
            Компенсация
          </a>
        </Link>
        <Link href={"/invalids"}>
          <a className={styles.linkclass}>
            Инвалидам
          </a>
        </Link>
        <Link href={"/price-request"}>
          <a className={styles.linkclass}>
            Ценовые запросы
          </a>
        </Link>
      </div>
    </div>
  );
}
