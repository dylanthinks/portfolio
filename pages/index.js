import Link from "next/link";
import groq from "groq";
import client from "../client";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import HomeHero from "../components/home-hero";

const Index = ({ posts }) => {
  return (
    <Layout home>
      <HomeHero />
    </Layout>
  );
};

export default Index;
