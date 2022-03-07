import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Posts = styled.ul`

`

const Post = styled.li`

`

const BlogPage = () => {
    const data = useStaticQuery(
        graphql`
        query MyQuery {
            allContentfulBlogPost(sort: {order: DESC, fields: publishedDate}) {
              edges {
                node {
                  title
                  url
                  publishedDate(formatString: "DD MMMM, YYYY")
                  excerpt {
                    childMarkdownRemark {
                      excerpt(pruneLength: 150)
                    }
                  }
                }
              }
            }
          }
        `
    )
    return (
        <Layout pageTitle="Writing">
            <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.url}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              {edge.node.image && (
                <StaticImage
                  className="featured"
                  fluid={edge.node.image}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.url}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
        </Layout>
    )
    }

export default BlogPage