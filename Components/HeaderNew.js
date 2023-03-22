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
        <Link href={`/`}><a className={styles.link}>
          <li className={styles.li}>Главная</li>
          </a></Link>
          <Link href={`allowance/`}><a className={styles.link}>
          <li className={styles.li}>Пособия</li>
          </a></Link>
          <Link href={`concessions/`}><a className={styles.link}>
          <li className={styles.li}>Льготы</li>
          </a></Link>
          <Link href={`subsidy/`}><a className={styles.link}>
          <li className={styles.li}>Компенсация</li>
          </a></Link>
          <Link href={`invalids/`}><a className={styles.link}>
          <li className={styles.li}>Инвалидам</li>
          </a></Link>
          <Link href={`price-request/`}><a className={styles.link}>
          <li className={styles.li}>Компенсация на уголь</li>
          </a></Link>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNew;