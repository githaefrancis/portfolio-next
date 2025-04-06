import React from "react";
import styles from "./header.module.scss";
import Carousel from "./carousel/carousel";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

export default function Header() {
  return (
    <section className={styles.header}>
      <h1 className={styles.title}>Francis Githae</h1>
      <h2 className={styles.heading2}>Software Developer</h2>
      <p className={styles.summary}>
        <strong>I am passionate</strong> about tech and creating solutions.
        <strong> I work </strong> with Next, React js, Node js , Python &
        Django.
        <strong> Coding</strong> C++ , GO & RUST. I love
        <strong> communities </strong>& <strong>Open source</strong>
      </p>
      <div className={styles.socials}>
        <Link href="https://github.com/githaefrancis" target="_blank">
          <FaGithub size={28} />
        </Link>
        <Link href="https://twitter.com/frankgithae_dev" target="_blank">
          <FaXTwitter size={28} />
        </Link>
      </div>

      {/* <Carousel /> */}
    </section>
  );
}
