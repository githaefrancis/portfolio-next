// import styled from "styled-components";

// const Card = styled.div`
// height: 6rem;
// background-color: blue;
// box-shadow: 1px 1px 2px blue;
// `
import styles from "./resources.module.scss";

export default function Resources() {
  return (
    <section className={styles.resources}>
      <h1>Resources Archive</h1>
      <section className={styles.container}>
        <div className={styles.card}>
          <section>image</section>
          <section>Project</section>
        </div>
        <div className={styles.card}>
          <section>image</section>
          <section>Project</section>
        </div>
        <div className={styles.card}>
          <section>image</section>
          <section>Project</section>
        </div>
        <div className={styles.card}>
          <section>image</section>
          <section>Project</section>
        </div>
        <div className={styles.card}>
          <section>image</section>
          <section>Project</section>
        </div>
        <div className={styles.card}>
          <section>image</section>
          <section>Project</section>
        </div>
        <div className={styles.card}>
          <section>image</section>
          <section>Project</section>
        </div>
        <div className={styles.card}>
          <section>image</section>
          <section>Project</section>
        </div>
      </section>
    </section>
  );
}
