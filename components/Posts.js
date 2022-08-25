import Link from "next/link";
import groq from "groq";
import client from "../client";
import { stringify } from "querystring";

const Post = ({ posts }) => {


  return (
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
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
  );
};

export default Post;
