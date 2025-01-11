import styles from "./index.module.css";

function SideCurve() {
  return (
    <div className={styles.sideCurveCont} style={{ left: "1159.2px" }}>
      <svg width="260" height="600" xmlns="http://www.w3.org/2000/svg">
        <path d="M 15 70 Q 180 285 27 495" className={styles.sideCurve} />
      </svg>
    </div>
  );
}

export default SideCurve;
