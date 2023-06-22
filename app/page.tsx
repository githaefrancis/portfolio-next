import Image from "next/image";
import styles from "./page.module.css";
import Highlight from "../components/highlight";
import Resources from "../components/resources";

export default function Home() {
  return (
    <main className={styles.main}>
      <Highlight />
      <Resources />
    </main>
  );
}
