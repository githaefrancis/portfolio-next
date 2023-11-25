import Banner from "../components/banner";
import Header from "../components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import UtilScript from "./utils/UtilScript";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Francis Githae Portfolio",
  description:
    "Francis Githae is a fullstack Software developer skilled in React js, NEXT js, Python , Django stacks. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Portfolio for Francis Githae React NEXT JAVASCRIPT AND PYTHON developer. Interested in Open source , freelance and team projects"
          key="desc"
        />
        <meta
          property="og:title"
          content="Portfolio | Francis Githae | Fullstack Developer"
        />
        <meta property="og:description" content="React | Next js | Python " />
        <meta
          property="og:image"
          content="https://portfolio.ofasnplugs.com/favicon.ico"
        />
      </Head>
      <UtilScript />
      <body>
        <Banner />
        <Header />
        {children}
      </body>
    </html>
  );
}
