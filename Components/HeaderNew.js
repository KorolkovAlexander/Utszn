import styles from "../styles/header.module.css";
import Link from "next/link";
import {FaListUl} from "react-icons/fa";
import { useState } from "react";
import {RiFileListLine} from "react-icons/ri"

const HeaderNew = () => {


  return (
    <header className={styles.header}>
     
      <nav>
        <ul className={styles.ul}>
        <Link href={`/`}><a>
          <li className={styles.li}>Главная</li>
          </a></Link>
          <Link href={`allowance/`}><a>
          <li className={styles.li}>Пособия</li>
          </a></Link>
          <Link href={`concessions/`}><a>
          <li className={styles.li}>Льготы</li>
          </a></Link>
          <Link href={`subsidy/`}><a>
          <li className={styles.li}>Субсидия</li>
          </a></Link>
          <Link href={`invalids/`}><a>
          <li className={styles.li}>Инвалидам</li>
          </a></Link>
          <Link href={`price-request/`}><a>
          <li className={styles.li}>Ценовые запросы</li>
          </a></Link>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNew;