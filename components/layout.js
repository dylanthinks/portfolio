import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./layout.module.css";
import Hero from "./hero";
import Nav from "./Navigation";
import Footer from "./Footer";

export const siteTitle = "Dylan T. Hinks";

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Dylan T. Hinks | Web Developer, Writer",
    description: `I've been developing website for 6 years. Get in touch if interested.`,
    image: "../public/images/profile.jpg",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://dylanthinks.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://dylanthinks.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Dylan T. Hinks" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:site" content="@signscloser" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <Nav />
      <main className="dark:bg-gray-800 w-full">{children}</main>
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
