import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from '../components/layout'

const Paragraph = styled.p`
font-size: 1.6rem;
`

const Container = styled.div`
margin: 0;
`

const IndexPage = () => {
  return (
    <Container>
   <Layout pageTitle="Home Page">
     <Paragraph>ball rolling again. Dusting off my fingers ok yes it did</Paragraph>
     <StaticImage 
     src="../images/02.jpeg"
     alt="dylan smiling at the camera"
     placeholder="blurred"
     width={250}
     height={400}
     />
   </Layout>
   </Container>
  )
}

export default IndexPage
