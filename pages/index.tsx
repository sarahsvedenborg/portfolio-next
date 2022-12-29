import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarah Svedenborg</title>
        <meta name="description" content="Sarah Svedenborg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Sarah Svedenborg portfolio</h1>
        <a href="/">To Github</a>
        <a href="/">To Linkedin</a>
        <Link href="projects">Prosjekter</Link>
        <Link href="about">Om meg</Link>
        <Link href="contact">Ta kontakt</Link>
        NO lang, ENG lang
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const query = groq`*[]`;
  const data = await client.fetch(query);
  console.log("data", data);
  if (!data) {
    return null;
  }

  return {
    // Passed to the page component as props
    props: { data },
  };
}
