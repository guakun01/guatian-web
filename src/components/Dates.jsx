import { useEffect, useState } from "@astrojs/react";
import styles from "./dates.module.css";

const Dates = () => {
  return (
    <div className={styles.dates}>
      <div className={styles.years}>2024</div>
      <div className={styles.monthAndDates}>
        <span className={styles.month}>
          5月4号
        </span>
        <span className={styles.days}>
          周六
        </span>
      </div>
    </div>
  )
}

export default Dates;

