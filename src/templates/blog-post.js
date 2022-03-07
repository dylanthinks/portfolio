import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($url: String!) {
    contentfulBlogPost(url: { eq: $url }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      }
    }
`

const BlogPost = props => {
  return (
    <Layout>
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>

        {props.data.contentfulBlogPost.image && (
          <StaticImage
            className="featured"
            alt={props.data.contentfulBlogPost.title}
          />
        )}

       
      </div>
    </Layout>
  )
}

export default BlogPost