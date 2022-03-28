import Link from "next/link";
import groq from "groq";
import client from "../client";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import AboutMe from "../components/AboutMe";
import Projects from "../components/projects";
import Posts from "../components/posts";

const Index = ({ posts }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="max-w-8xl mx-auto antialiased">
        <AboutMe />
        <Projects />
        <div className="max-w-4xl mx-auto h-48 bg-white dark:bg-gray-800w">
          <h1 className="text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
            Posts
          </h1>
          {posts.length > 0 &&
            posts.map(
              ({ _id, title = "", slug = "", publishedAt = "" }) =>
                slug && (
                  <li key={_id}>
                    <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>
                      <a>{title}</a>
                    </Link>{" "}
                  </li>
                )
            )}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
