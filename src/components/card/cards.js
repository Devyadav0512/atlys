import styles from "./cards.module.css";

function Card() {
  return (
    <div className={styles.cardMainCont}>
      <div className={styles.heading}>::: Function: 1</div>
      <div className={styles.cont}>
        <div className={styles.inputDiv}>
          <div className={styles.label}>Equation</div>
          <input className={styles.inputBox} type="text" />
        </div>
        <div className={styles.inputDiv}>
          <div className={styles.label}>Next Function</div>
          <select disabled className={styles.dropdown}>
            <option className={styles.dropdownOption} value="volvo">
              Function: 2
            </option>
          </select>
        </div>
      </div>
      <div className={styles.linkDiv}>
        <div className={styles.linkText}>
          <input className={styles.linkRadio} type="radio" checked />
          input
        </div>
        <div className={styles.linkText}>
          output
          <input className={styles.linkRadio} type="radio" checked />
        </div>
      </div>
    </div>
  );
}

export default Card;
