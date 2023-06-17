"use client";
import { useRef } from "react";
import styles from "./highlight.module.scss";
import Image from "next/image";
export default function Highlight() {
  const scrollContainerRef = useRef<HTMLImageElement>(null);
  const scrollAmount = 100;

  const handleScroll = (event: Event) => {
    const target = event.target as HTMLButtonElement;
    if (target?.id === "scroll-left") {
      if(scrollContainerRef.current !==null) {scrollContainerRef.current.scrollLeft -= scrollAmount}
    } else if (target?.id === "scroll-right") {
      if(scrollContainerRef.current !==null ) {scrollContainerRef.current.scrollLeft += scrollAmount}
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
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
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
