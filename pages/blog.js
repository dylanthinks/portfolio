import Link from "next/link";
import groq from "groq";
import client from "../client";
import Layout from "../components/Layout";

const Blog = ({ posts }) => {
  return (
    <Layout>
      <div className='bg-pink-300'>
        <h1 className='h1'>Posts</h1>
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
