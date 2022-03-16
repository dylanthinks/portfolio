import Link from "next/link";
import groq from "groq";
import client from "../client";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import About from "../components/about";
import Hero from "../components/hero";

const Index = ({ posts }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Hero />
        <About />
      </main>
      <div>
        <h1>Blog</h1>
        {posts.length > 0 &&
          posts.map(
            ({ _id, title = "", slug = "", publishedAt = "" }) =>
              slug && (
                <li key={_id}>
                  <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>
                    <a>{title}</a>
                  </Link>{" "}
                  ({new Date(publishedAt).toDateString()})
                </li>
              )
          )}
      </div>
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

/*
export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm back, baby! Took a long break from regular web development due to advocacy work, but now I intend to codeeeee again</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ slug, date, title }) => (
            <li className={utilStyles.listItem} key={slug}>
             <Link href={`/posts/${slug}`}>
               <a>{title}</a>
             </Link>
             <br />
             <small className={utilStyles.lightText}>
               <Date dateString={date} />
             </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
*/
