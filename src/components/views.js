import styles from "./views.module.css";
import Card from "./card/cards";
import NumInput from "./input/input";
import Line from "./connectors/line";
import Curve from "./connectors/curve";
import SideCurve from "./connectors/sideCurve";
import SCurve from "./connectors/sCurve";
import { useState, useEffect } from "react";
import CalculateOutput from "../util/util";

let initialEquations = ["x^2", "2x+4", "x-2", "x/2", "x^2+20"];

function Views() {
  const [initialVal, setInitialVal] = useState(0);
  const [finalVal, setFinalVal] = useState(0);
  const [equations, setEquations] = useState(initialEquations);

  const getInitialVal = (val) => {
    if (val == "") val = "0";
    let temp = Number(val).toString();
    setInitialVal(temp);
  };

  const updateEq = (val, idx) => {
    let temp = [...equations];
    let tempVal = val;
    const allowedChars = /^[\+\-/^0-9x]*$/;
    if (!allowedChars.test(tempVal)) {
      tempVal = tempVal.replace(/[^+\-/^0-9x]/g, "");
    }

    temp[idx] = tempVal;
    setEquations(temp);
  };

  let cardsData1 = [
    {
      header: "::: Function: 1",
      next_function: "Function: 2",
      equation_index: 0,
    },
    {
      header: "::: Function: 2",
      next_function: "Function: 4",
      equation_index: 1,
    },
    {
      header: "::: Function: 3",
      next_function: "-",
      equation_index: 4,
    },
  ];

  let cardsData2 = [
    {
      header: "::: Function: 4",
      next_function: "Function: 5",
      equation_index: 2,
    },
    {
      header: "::: Function: 5",
      next_function: "Function: 3",
      equation_index: 3,
    },
  ];

  useEffect(() => {
    let output = CalculateOutput(initialVal, equations);
    setFinalVal(output);
  }, [initialVal, equations]);

  return (
    <div className={styles.mainCont}>
      <div className={styles.divCont1}>
        <NumInput left={true} onChange={getInitialVal} val={initialVal} />
      </div>
      <Line />
      <div className={styles.divCont2}>
        <div className={styles.cont}>
          {cardsData1.map((e, i) => {
            return (
              <>
                <Card
                  data={e}
                  eq={equations[e.equation_index]}
                  changeEq={updateEq}
                />
                {i == 0 && <Curve top={true} />}
              </>
            );
          })}
        </div>
        <SideCurve />
        <SCurve />
        <div className={styles.cont2}>
          {cardsData2.map((e, i) => {
            return (
              <>
                <Card
                  data={e}
                  eq={equations[e.equation_index]}
                  changeEq={updateEq}
                />
                {i == 0 && <Curve />}
              </>
            );
          })}
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
