import { RiFileListLine } from "react-icons/ri";
import styles from "../styles/header.module.css";
import { useState } from "react";
import Context from "./Context";

export default function MobMenu() {
  return (
    <Context.Consumer>
      {(value) => (
        <div className={styles.mob} onClick={value}>
          <RiFileListLine />
        </div>
      )}
    </Context.Consumer>
  );
}
