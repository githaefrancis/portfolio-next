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
    // <Link
    //   href={project.link}
    //   className={styles.link}
    //   target="_blank"
    //   key={index}
    // >
    <div className={styles.project_wrapper}>
      <div className={styles.project_headline}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <Link href={project.link} target="_blank">
          <button className={styles.action_btn}>Check</button>
        </Link>
      </div>
      <div className={styles.project_image}>
        <Image
          priority
          src={project.banner}
          layout="fill"
          objectFit="cover"
          // className={styles.project_image}
          alt="right"
        />
        <Link href={project.link} target="_blank">
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
        </Link>
      </div>
    </div>
    // </Link>
  );
}

export default function Highlight() {
  return (
    <div className="content">
      <div className={styles.highlight}>
        {projects.map((project, index) => (
          <Project project={project} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
