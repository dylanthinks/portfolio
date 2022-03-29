import Link from "next/link";
import groq from "groq";
import client from "../client";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import AboutMe from "../components/AboutMe";

const Index = ({ posts }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="max-w-8xl mx-auto antialiased">
        <AboutMe />
      </main>
    </Layout>
  );
};

export default Index;
