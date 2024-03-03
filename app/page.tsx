import Image from "next/image";
import styles from "./page.module.css";
import Highlight from "../components/highlight";
import Resources from "../components/resources";
import Header from "../components/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      
      <Highlight />
      <Resources />
    </main>
  );
}
