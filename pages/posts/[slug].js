import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
/* import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
*/
import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Post = ({post}) => {
  const { 
    title = 'Missing title', 
    name = 'Missing name', 
    categories,
    authorImage 
  } = post
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <div>
          <img 
          src={urlFor(authorImage)
          .width(250)
          .url()}
          />
        </div>
      )}
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image
}`
/*
export default function Post({ postData }) {
  return (
  <Layout>
  <Head>
    <title>{postData.title}</title>
  </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
      <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
  )
}
*/

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

/*
export async function getStaticPaths() {
  const paths = getAllPostIds() 
  return {
    paths,
    fallback: false
  }
}
*/

export async function getStaticProps(context) {
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}

/*
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
*/

export default Post
