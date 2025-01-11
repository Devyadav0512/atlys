import styles from "./views.module.css";
import Card from "./card/cards";
import NumInput from "./input/input";
import Line from "./connectors/line";
import Curve from "./connectors/curve";
import SideCurve from "./connectors/sideCurve";
import SCurve from "./connectors/sCurve";

function Views() {
  return (
    <div className={styles.mainCont}>
      <div className={styles.divCont1}>
        <NumInput left={true} />
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
        <NumInput />
      </div>
    </div>
  );
}

export default Views;
