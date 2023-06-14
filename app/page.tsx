import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.highlight}>
        <h2 className={styles.heading2}>Product Center</h2>
      </div>
    </main>
  );
}
