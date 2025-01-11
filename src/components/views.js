import styles from "./views.module.css";
import Card from "./card/cards";
import NumInput from "./input/input";
import Line from "./connectors/line";
import Curve from "./connectors/curve";
import SideCurve from "./connectors/sideCurve";
import SCurve from "./connectors/sCurve";
import { useState } from "react";

function Views() {
  const [initialVal, setInitialVal] = useState(0);
  const [finalVal, setFinalVal] = useState(0);

  const getInitialVal = (val) => {
    if (val == "") val = "0";
    let temp = Number(val).toString();
    setInitialVal(temp);
  };

  return (
    <div className={styles.mainCont}>
      <div className={styles.divCont1}>
        <NumInput left={true} onChange={getInitialVal} val={initialVal} />
      </div>
      <Line />
      <div className={styles.divCont2}>
        <div className={styles.cont}>
          <Card />
          <Curve top={true} />
          <Card />
          <Card />
        </div>
        <SideCurve />
        <SCurve />
        <div className={styles.cont2}>
          <Card />
          <Curve />
          <Card />
        </div>
      </div>
      <Line left={true} />
      <div className={styles.divCont3}>
        <NumInput val={finalVal} />
      </div>
    </div>
  );
}

export default Views;
