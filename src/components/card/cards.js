import styles from "./cards.module.css";

function Card({ data, eq, changeEq }) {
  return (
    <div className={styles.cardMainCont}>
      <div className={styles.heading}>{data.header}</div>
      <div className={styles.cont}>
        <div className={styles.inputDiv}>
          <div className={styles.label}>Equation</div>
          <input
            className={styles.inputBox}
            type="text"
            value={eq}
            onChange={(e) => {
              changeEq(e.target.value, data.equation_index);
            }}
            pattern="^[\+\/\^0-9x]*$"
            required
          />
        </div>
        <div className={styles.inputDiv}>
          <div className={styles.label}>Next Function</div>
          <select disabled className={styles.dropdown}>
            <option className={styles.dropdownOption} value="volvo">
              {data.next_function}
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
