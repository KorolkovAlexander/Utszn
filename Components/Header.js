import styles from "../styles/header.module.css";
import Link from "next/link";
import { useState } from "react";
import { RiFileListLine } from "react-icons/ri";
import MobMenu from "./MobMenu";
import Context from "./Context";
import Mobile from "./Mobile";

const Header = ({ updateData, isMobile, main }) => {
  const [state, setState] = useState(true);
  const [mobile, setMobile] = useState(false);
  const handler = () => {
    setState(!state);
  };

  const handl = () => {
    setMobile(!mobile);
  };

  if (!mobile) {
    if (main) {
      updateData(state);
      return (
        <header className={styles.header}>
          <div className={state ? styles.list : styles.list2} onClick={handler}>
            <div className={styles.mainmenu}>
              <div className={state ? styles.icondefault : styles.icon}>
                <RiFileListLine />
              </div>
            </div>
            <div className={state ? styles.contactsdefault : styles.contacts}>
              Меню сайта
            </div>{" "}
          </div>
          <nav className={styles.nav}>
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
            <Context.Provider value={handl}>
              <MobMenu />
            </Context.Provider>
          </nav>
        </header>
      );
    } else {
      return (
        <header className={styles.header}>
          <nav className={styles.nav}>
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
            <Context.Provider value={handl}>
              <MobMenu />
            </Context.Provider>
          </nav>
        </header>
      );
    }
  }

  if (mobile) {
    return (
      <Context.Provider value={handl}>
        <Mobile />;
      </Context.Provider>
    );
  }
};

export default Header;
