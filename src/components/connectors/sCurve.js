import styles from "./index.module.css";

function SCurve() {
  return (
    <div className={styles.sCurveCont} style={{ left: "462px" }}>
      <svg width="525" height="565" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 30 495 Q 100 340,265 285 T 495 70"
          className={styles.sCurve}
        />
      </svg>
    </div>
  );
}

export default SCurve;
