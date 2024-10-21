"use client";
import { useRef } from "react";
import styles from "./highlight.module.scss";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "rms",
    name: "Rental Management",
    banner: "/images/rms.png",
    description: "Rental Management System",
    languages: "next js",
    link: "https://rms.ofasnplugs.com",
  },
  {
    id: "puregem",
    name: "Medical Equipment Website",
    banner: "/images/puregem.png",
    description: "Landing page for Medical Equipment",
    languages: "next js",
    link: "https://puregem.ofasnplugs.com",
  },
];

interface ProjectInterface {
  id: string;
  name: string;
  banner: string;
  description: string;
  languages: string;
  link: string;
}
function Project({
  project,
  index,
}: {
  project: ProjectInterface;
  index: number;
}) {
  return (
    <Link
      href={project.link}
      className={styles.link}
      target="_blank"
      key={index}
    >
      <div className={styles.project_wrapper}>
        <Image
          priority
          src={project.banner}
          layout="fill"
          objectFit="cover"
          // className={styles.project_image}
          alt="right"
        />
        <div className={styles.description}>
          <h3>
            <span>{project.name}</span>
          </h3>
          <p>
            {project.languages.split(",").map((language, index) => (
              <span key={index}>{language}</span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function Highlight() {
  const scrollContainerRef = useRef<HTMLImageElement>(null);
  const scrollAmount = 400;

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
      <h1>Product Center</h1>
      <section className={styles.slider}>
        {/* <Image
          priority
          src="/images/left-arrow.png"
          height={24}
          width={24}
          alt="left"
          id="scroll-left"
          onClick={handleScroll}
        /> */}
        <section className={styles.horizontalScroll} ref={scrollContainerRef}>
          {projects.map((project, index) => (
            <Project project={project} key={index} index={index} />
          ))}
        </section>
        {/* <Image
          priority
          src="/images/right-arrow.png"
          height={24}
          width={24}
          alt="right"
          id="scroll-right"
          onClick={handleScroll}
        /> */}
      </section>
    </div>
  );
}
