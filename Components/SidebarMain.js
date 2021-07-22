import styles from "../styles/sidebarmain.module.css";
import Link from "next/link";
import { useState } from "react";
import { CgCalculator } from "react-icons/cg";
import { ImCross } from "react-icons/im";
export default function SidebarMain({ state }) {
  return (
    <div className={state ? styles.sidewrapper : styles.sidewrapperactive}>
      <div className={state ? styles.menuwrapper : styles.menuwrapperactive}>
        <div className={styles.top}>
          <Link href={"/calculator"}>
            <a className={styles.link}>
              <div className={styles.calc}>
                <CgCalculator />
              </div>
              Калькулятор компенсаций
            </a>
          </Link>
        </div>
        <div className={styles.contact}>
          <div className={styles.contacthead}>Контакты</div>

          <div className={styles.contactwrapper}>
            <div className={styles.address}>
              94701, г.Ровеньки, ул.Кооперативная, 1
            </div>
            <div>
              <div className={styles.address}>utszn_rovenki@mail.ru</div>
              <div className={styles.address}>(06433)5-02-93</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
