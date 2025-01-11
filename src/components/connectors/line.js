import styles from "./index.module.css";

function Line({ left }) {
  return (
    <div
      className={styles.lineCont}
      style={left ? { left: "120.96px" } : { right: "120.96px" }}
    >
      <svg height="50" width="165" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="10" x2="250" y2="10" className={styles.line} />
      </svg>
    </div>
  );
}

export default Line;
