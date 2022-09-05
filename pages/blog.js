import Link from "next/link";
import groq from "groq";
import client from "../client";
import Layout from "../components/layout";

import styles from "../styles/components/posts.module.css";

const Blog = ({ posts }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Posts</h1>
        {posts.length > 0 &&
          posts.map(
            ({ _id, title = "", slug = "", publishedAt = "" }) =>
              slug && (
                <li key={_id}>
                  <Link href='/posts/[slug]' as={`/posts/${slug.current}`}>
                    <a>{title}</a>
                  </Link>{" "}
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

export default Blog;
