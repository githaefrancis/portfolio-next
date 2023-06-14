import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.highlight}>
        <h2 style={{ textAlign: "center" }}>Top</h2>
      </div>
    </main>
  );
}
