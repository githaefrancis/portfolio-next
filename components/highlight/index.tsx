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
  {
    id: "gitmine",
    name: "Git Mine",
    banner: "/images/gitmine.png",
    description: "Search for users and repos on github",
    languages: "html,css,angular,typescript,bootstrap",
    link: "https://githaefrancis.github.io/gitmine/",
  },
  {
    id: "photographyWebsite",
    name: "Photography Website",
    banner: "/images/photography.png",
    description:
      "Photography website used to display photographs in a gallery grid.",
    languages: "html, css",
    link: "https://githaefrancis.github.io/week1-ip",
  },
  {
    id: "streetWiseFood",
    name: "Street Wise Food",
    banner: "/images/streetfood.png",
    description: "Restaurant website landing page.",
    languages: "html, css",
    link: "https://githaefrancis.github.io/street-food-website",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    banner: "/images/portfolio.png",
    description:
      "Portfolio landing page that lists my professional accomplishments.",
    languages: "html, css",
    link: "https://githaefrancis.github.io/portfolio/",
  },
  {
    id: "reachoutconsel",
    name: "ReachOut Consel",
    banner: "/images/reachoutconsel.png",
    description: "Team project for a conselling service website.",
    languages: "html,css,javascript,bootstrap,jquery",
    link: "https://githaefrancis.github.io/ReachOut-Consel/",
  },
  {
    id: "petwolf",
    name: "Pet Wolf",
    banner: "/images/petwolf.png",
    description: "Blog for fictional pet wolf.",
    languages: "html,css,javascript,jquery",
    link: "https://githaefrancis.github.io/petwolf/",
  },
  {
    id: "delanistudio",
    name: "Delani Studio",
    banner: "/images/delanistudio.png",
    description: "Landing page for a design company.",
    languages: "html,css,javascript,jquery",
    link: "https://githaefrancis.github.io/delani-studio/",
  },
  {
    id: "pizzarana",
    name: "Pizzarana",
    banner: "/images/pizzarana.png",
    description: "Pizza ordering application.",
    languages: "html,css,javascript,jquery",
    link: "https://githaefrancis.github.io/pizzarana/",
  },
  {
    id: "expensetracker",
    name: "Expense Tracker",
    banner: "/images/expensetracker.png",
    description: "Application to keep track of expenditure.",
    languages: "html,css,javascript,jquery",
    link: "https://githaefrancis.github.io/expense-tracker/",
  },
  {
    id: "akannamegenerator",
    name: "Akan Name Generator",
    banner: "/images/akanamegenerator.png",
    description:
      "Application to look up your Akan name by providing your birthday.",
    languages: "html,css,javascript,jquery",
    link: "https://githaefrancis.github.io/akan-name-generator/",
  },
  {
    id: "chomazone",
    name: "Choma Zone",
    banner: "/images/chomazone.png",
    description: "Web application that list the best Nyama choma joints.",
    languages: "html,css,javascript,jquery",
    link: "https://githaefrancis.github.io/chomazone/",
  },
  {
    id: "quotes",
    name: "Quotes App",
    banner: "/images/quotes.png",
    description:
      "Lists Quotes and allows the user to add more.You can Upvote and downvote a quote",
    languages: "html,css,angular,typescript,bootstrap,jquery",
    link: "https://githaefrancis.github.io/quotes/",
  },
  {
    id: "prism-gallery",
    name: "Prism Gallery",
    banner: "/images/prism-gallery.png",
    description: "Post and view photos",
    languages: "html,css,django",
    link: "https://prism-gallery.herokuapp.com/",
  },
  {
    id: "invento-app",
    name: "Invento App",
    banner: "/images/invento-app.png",
    description: "Manage equipment inventory",
    languages: "html,css,django",
    link: "https://githaefrancis.github.io/invento-frontend/",
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
      <div className="project_card">
        <Image
          priority
          src={project.banner}
          height={300}
          width={400}
          alt="right"
        />
        <section className={styles.description}>
          <h3>{project.name}</h3>
          {/* <p>{project.description} </p> */}
        </section>
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
        <Image
          priority
          src="/images/left-arrow.png"
          height={24}
          width={24}
          alt="left"
          id="scroll-left"
          onClick={handleScroll}
        />
        <section className={styles.horizontalScroll} ref={scrollContainerRef}>
          {projects.map((project, index) => (
            <Project project={project} key={index} index={index} />
          ))}
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
