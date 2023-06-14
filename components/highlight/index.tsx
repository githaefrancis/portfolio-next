import styles from "./highlight.module.scss";
import Image from "next/image";
export default function Highlight() {
  return (
    <div className={styles.highlight}>
      <h2 className={styles.heading2}>Product Center</h2>
      <section className={styles.slider}>
        <Image
          priority
          src="/images/left-arrow.png"
          height={24}
          width={24}
          alt="left"
        />
        <section className={styles.horizontalScroll}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </section>
        <Image
          priority
          src="/images/right-arrow.png"
          height={24}
          width={24}
          alt="right"
        />
      </section>
    </div>
  );
}
