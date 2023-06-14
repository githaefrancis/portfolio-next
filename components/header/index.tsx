import React from "react";
import styles from "./header.module.scss";
export default function Header() {
  return (
    <section className={styles.header}>
      <section className={styles.intro}>
        <div>
          <h1 className={styles.heading1}>Francis Githae</h1>
          <h2 className={styles.heading2}>Software Developer</h2>
        </div>
      </section>
      <section>Slide</section>
    </section>
  );
}
