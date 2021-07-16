import styles from "../styles/header.module.css";
import Link from "next/link";
import {FaListUl} from "react-icons/fa";
import { useState } from "react";
import {RiFileListLine} from "react-icons/ri"

const Header = ({updateData}) => {


const [state, setState] = useState(true)


const handler = () =>{
  setState(!state)
}
updateData(state);

  return (
    <header className={styles.header}>
      <div  className={state ? styles.list : styles.list2} onClick={handler}><div className={styles.mainmenu}><div className={state ? styles.icondefault : styles.icon}><RiFileListLine /></div></div><div className={state ? styles.contactsdefault : styles.contacts}>Меню сайта</div> </div>
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

export default Header;
