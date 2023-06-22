"use client";
import { useRef } from "react";
import styles from "./highlight.module.scss";
import Image from "next/image";
import Link from "next/link";
export default function Highlight() {
  const scrollContainerRef = useRef<HTMLImageElement>(null);
  const scrollAmount = 100;

  const handleScroll = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLButtonElement;
    if (target?.id === "scroll-left") {
      if (scrollContainerRef.current !== null) {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      }
    } else if (target?.id === "scroll-right") {
      if (scrollContainerRef.current !== null) {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

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
          id="scroll-left"
          onClick={handleScroll}
        />
        <section ref={scrollContainerRef} className={styles.horizontalScroll}>
          <Link
            href="https://prism-gallery.ofasnplugs.com"
            className={styles.link}
            target="_blank"
          >
            <div>
              <Image
                priority
                src="/images/prism_g.png"
                height={250}
                width={220}
                alt="right"
                id="scroll-right"
                onClick={handleScroll}
              />
              <section className={styles.description}>
                <h3> Prism Gallery</h3>
                <p>A django project </p>
              </section>
            </div>
          </Link>
        </section>
        <Image
          priority
          src="/images/right-arrow.png"
          height={24}
          width={24}
          alt="right"
          id="scroll-right"
          onClick={handleScroll}
        />
      </section>
    </div>
  );
}
