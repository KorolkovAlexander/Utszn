import styles from "../styles/footer.module.css";
import Link from "next/link";
import { FaVk, FaOdnoklassniki } from 'react-icons/fa';

export default function Footer(){

    return(
        <footer className={styles.common}>
     <div className={styles.wrapper}>

<div className={styles.about}>
  <h3>О нас</h3>
  <h4>
  Управление труда и социальной защиты населения<br/>
94701, г. Ровеньки, ул. Кооперативная, 1<br/>
Телефон (код 06433): 5-02-93. Факс: 5-02-93<br/>
Электронный адрес: utszn_rovenki@mail.ru
  </h4>
</div>





<div className={styles.about}>
  <h3>Полезные ссылки</h3>
  <ul className={styles.ul}>{/* <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" className={styles.image}/> */}
{/* <Link href={`/`}> <a>{<li className={styles.li}>Главная</li>}</a> </Link> */}
<li className={styles.li}>
<img src="icon-lnr.png" className={styles.image}/><a href={`https://glava-lnr.info/`} className={styles.link}>-Сайт Главы ЛНР</a></li>
<li className={styles.li}>
<img src="icon-lnr.png" className={styles.image}/><a href={`https://mintrudlnr.su/`} className={styles.link}>-Сайт Мин. труда и соц. политики</a></li>
<li className={styles.li}>
<img src="icon-lnr.png" className={styles.image}/><a href={`https://nslnr.su/`} className={styles.link}>-Сайт Народного Совета ЛНР</a></li>
<li className={styles.li}>
<img src="icon-adm-rovenki.png" className={styles.image}/><a href={`https://rov-adm.su/`} className={styles.link}>-Сайт Администрации города Ровеньки</a></li>
  </ul>
</div>

<div className={styles.about}>
  <h3>Мы в социальных сетях</h3>
  <div className={styles.soc}> <div><a href={`https://www.ok.ru/profile/564479305591`} className={styles.link}><FaOdnoklassniki /></a></div> <div><a href={`https://vk.com/id306989633`} className={styles.link}><FaVk /></a> </div> </div> 
</div>
</div>

        </footer>
    )
    }