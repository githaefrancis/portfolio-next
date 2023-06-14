import Image from "next/image";
import styles from "./page.module.css";
import Highlight from "../components/highlight";
export default function Home() {
  return (
    <main className={styles.main}>
      <Highlight />
    </main>
  );
}
