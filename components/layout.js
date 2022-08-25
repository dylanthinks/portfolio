import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./layout.module.css";

import Nav from "./nav";
import Footer from "./footer";

export const siteTitle = "Dylan T. Hinks";

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Dylan T. Hinks | Web Developer, Writer",
    description: `I'm back to web development after years in advocacy work. I have been developing for 7 years on and off now. Get in touch if interested in expanding your web presence!`,
    image: "../public/images/profile.jpg",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://dylanthinks.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://dylanthinks.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Dylan T. Hinks' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
      </Head>
      <Nav />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
}
