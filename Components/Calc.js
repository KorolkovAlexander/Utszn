import { useState } from "react";
import styles from "../styles/calc.module.css";

export default function Calc() {
  const [state, setState] = useState("");
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const a = () => {
    return  9000 - (state * 12) * 0.32 / 100 * 15 == 9000 || 9000 - (state * 12) * 0.32 / 100 * 15 < 0
      ? "0"
      : Math.trunc(9000 - (state * 12) * 0.32 / 100 * 15) * 10 / 10  
  };
  return (
    
      <div className={styles.calc}>
        <h2>
          Здесь вы можете узнать сумму своей компенсационной выплаты на приобретение твердого бытового топлива введя сумму
          месячного дохода вашей семьи
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
