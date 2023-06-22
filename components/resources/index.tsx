// import styled from "styled-components";

// const Card = styled.div`
// height: 6rem;
// background-color: blue;
// box-shadow: 1px 1px 2px blue;
//
"use client";
import Link from "next/link";
import styles from "./resources.module.scss";
import { LinkPreview } from "react-link-previewer";
import "react-link-previewer/src/style.css";

export default function Resources() {
  return (
    <section className={styles.resources}>
      <h1>Resources Archive</h1>
      <section className={styles.container}>
        <div className={styles.card}>
          <section className="title">
            <Link
              href="https://dev.to/florianrappl/css-in-micro-frontends-4jai"
              target="_blank"
            >
              <h3>CSS in Micro Frontends</h3>
              <h4>Source: DEV Community</h4>
            </Link>
          </section>
        </div>
        <div className={styles.card}>
          <section className="title">
            <Link href="https://youtu.be/BpPEoZW5IiY" target="_blank">
              <h3>Learn Rust</h3>
              <h4>Source: Youtube</h4>
            </Link>
          </section>
        </div>
        <div className={styles.card}>
          <section className="title">
            <Link
              href="https://www.freecodecamp.org/news/design-pattern-for-modern-backend-development-and-use-cases/"
              target="_blank"
            >
              <h3>Design Patterns</h3>
              <h4>Source: FreecodeCamp</h4>
            </Link>
          </section>
        </div>
        <div className={styles.card}>
          <section className="title">
            <Link href="https://youtu.be/IA3WxTTPXqQ" target="_blank">
              <h3>Deep Learning - Tensor Flow</h3>
              <h4>Source: Youtube</h4>
            </Link>
          </section>
        </div>
      </section>
    </section>
  );
}
