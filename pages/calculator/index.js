import Calc from "../../Components/Calc";
import Header from "../../Components/HeaderNew";
import styles from "../../styles/calc.module.css";
import Head from "next/head";

export default function Calculator() {
  return (
    <div>
      <Head>
        <title>УТСЗН АГР ЛНР</title>
        <link rel="icon" href="/icon-lnr.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fuggles&display=swap" rel="stylesheet"></link>
</Head>
      <Header />
      <Calc />
    </div>
  );
}
