import styles from "./index.module.css";

function Curve({ top }) {
  return (
    <div
      className={styles.curveCont}
      style={top ? { left: "487.2px" } : { left: "705.6px" }}
    >
      <svg
        width={top ? "260" : "270"}
        height={top ? "160" : "500"}
        xmlns="http://www.w3.org/2000/svg"
      >
        {top && <path d="M 15 75 Q 130 10 245 75" className={styles.curve} />}
        {!top && <path d="M 10 70 Q 135 200 260 70" className={styles.curve} />}
      </svg>
    </div>
  );
}

export default Curve;
