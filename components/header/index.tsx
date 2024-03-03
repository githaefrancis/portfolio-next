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
      <section className={styles.intro}>
        <div className={styles.info}>
          <h1 className={`${styles.heading1} ${styles.title}`}>
            Francis Githae
          </h1>
          <h3 className={styles.heading2}>Software Developer</h3>
          <p>
            <MdEmail size={24} /> mureithigithae@gmail.com
          </p>
          <div className={styles.socials}>
            <Link href="https://github.com/githaefrancis" target="_blank">
              <FaGithub size={28} />
            </Link>
            <Link href="https://twitter.com/frankgithae_dev" target="_blank">
              <FaXTwitter size={28} />
            </Link>
          </div>
        </div>
      </section>
      {/* <Carousel /> */}
    </section>
  );
}
