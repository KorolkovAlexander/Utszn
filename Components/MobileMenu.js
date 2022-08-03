import styles from "../styles/mobileMenu.module.css";
import Link from "next/link";
import { useState } from "react";
import {RiFileListLine} from "react-icons/ri"

export default function MobileMenu({updateMenu}) {

    const [state, setState] = useState(false)


    const handler = () =>{
      setState(!state)
    }
    
updateMenu(state)



    return (
        <div className={ state ? styles.wrapper : styles.wrapperoff}>
            <div className={styles.main}>

<div className={styles.icon}>
<RiFileListLine onClick={handler} />
</div>

<div className={styles.menu}>
<nav className={styles.nav} >
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
          <li className={styles.li}>Субсидия</li>
          </a></Link>
          <Link href={`invalids/`}><a className={styles.link}>
          <li className={styles.li}>Инвалидам</li>
          </a></Link>
          <Link href={`price-request/`}><a className={styles.link}>
          <li className={styles.li}>Компенсация на уголь</li>
          </a></Link>
        </ul>

        
      
      </nav>
</div>

            </div>
        </div>
    )
}
