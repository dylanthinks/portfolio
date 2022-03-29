import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "./Navigation";
import Footer from "./Footer";

export const siteTitle = "Dylan T. Hinks";

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Dylan T. Hinks | Web Developer, Writer",
    description: `I'm back to JS development after years in advocacy work. I have been developing for 6 years on and off now. Get in touch if interested.`,
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
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}
