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

        <li className={styles.posts}>
          {posts.length > 0 &&
            posts.map(
              ({ _id, title = "", slug = "", publishedAt = "" }) =>
                slug && (
                  <article key={_id} className={styles.post}>
                    {new Date(publishedAt).toDateString().replace(/^\S+\s/, "")}
                    <Link href='/posts/[slug]' as={`/posts/${slug.current}`}>
                      {title}
                    </Link>{" "}
                  </article>
                )
            )}
        </li>
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
