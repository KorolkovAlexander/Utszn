import {useState} from "react"
import styles from "../styles/subsidy.module.css";


export default function Calc() {
    const [state, setState] = useState('')
    const handleChange = (event) =>{
        setState(event.target.value); 
    }
    const a = () =>{
       return 7500-state/5*0.32 == 7500 || 7500-state/5*0.32<0 ? '0' : 7500-state/5*0.32
    }
    return (
<div>

<div className={styles.calc}>
<h2>
    Здесь вы можете узнать сумму своей компенсационной выплаты введя сумму дохода вашей семьи за последние полгода
</h2>



        <form className={styles.form}>
<input type="number" max="999999" maxlength="6" value={state} onChange={handleChange}  className={styles.input}/>
        </form>

<h3>Размер компенсационной выплаты составляет: {a()}</h3>


        </div>


        </div>


    )
}
