import styles from "./input.module.css";

function NumInput({ left, onChange, val }) {
  return (
    <div className={styles.inputMainCont}>
      <div
        className={`${styles.inputHeader} ${
          left ? styles.initialBg : styles.finalBg
        }`}
      >
        {left ? "Initial value of x" : "Final Output y"}
      </div>
      <div
        className={`${styles.inputCont} ${
          left ? styles.initial : styles.final
        }`}
      >
        {!left && (
          <div className={styles.initialRadio}>
            <input className={styles.linkRadio} type="radio" checked />
          </div>
        )}
        <input
          onChange={(e) => {
            left && onChange(e.target.value);
          }}
          style={left ? { padding: "0 0 0 10px" } : { textAlign: "right" }}
          disabled={!left}
          value={val}
          className={styles.input}
          type="number"
        />
        {left && (
          <div className={styles.finalRadio}>
            <input className={styles.linkRadio} type="radio" checked />
          </div>
        )}
      </div>
    </div>
  );
}

export default NumInput;
