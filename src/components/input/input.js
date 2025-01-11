import styles from "./input.module.css";

function NumInput({ left }) {
  return (
    <div className={styles.inputMainCont}>
      <div
        className={`${styles.inputCont} ${
          left ? styles.initial : styles.final
        }`}
      >
        {left && (
          <div className={styles.initialRadio}>
            <input className={styles.linkRadio} type="radio" checked />
          </div>
        )}
        <input className={styles.input} type="number" />
        {!left && (
          <div className={styles.finalRadio}>
            <input className={styles.linkRadio} type="radio" checked />
          </div>
        )}
      </div>
    </div>
  );
}

export default NumInput;
