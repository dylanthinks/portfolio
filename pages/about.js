import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const AboutPage = () => {
  return (
    <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <div>
      About me
      More about me 
      My hobbies
    </div>
    </Layout>
  )
}

export default AboutPage