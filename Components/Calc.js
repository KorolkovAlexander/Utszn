import { useState } from "react";
import styles from "../styles/calc.module.css";

export default function Calc() {
  const [state, setState] = useState("");
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const a = () => {
    return 7500 - (state / 5) * 0.32 == 7500 || 7500 - (state / 5) * 0.32 < 0
      ? "0"
      : Math.trunc((7500 - (state / 5) * 0.32) * 100) / 100;
  };
  return (
    
      <div className={styles.calc}>
        <h2>
          Здесь вы можете узнать сумму своей компенсационной выплаты введя сумму
          дохода вашей семьи за последний год в форму ниже
        </h2>

        <form className={styles.form}>
          <input 
            type="number"
            max="999999"
            maxlength="6"
            value={state}
            onChange={handleChange}
            className={styles.input}
          />
        </form>

<div className={styles.container}>
        <div className={styles.output}>
          <div className={styles.result}>{a()} р.</div>
        </div></div>
        <h3>Размер компенсационной выплаты составляет: {a()} рублей</h3>
      </div>
    
  );
}
