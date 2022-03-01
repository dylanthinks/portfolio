import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const Container = styled.div`
`

const Button = styled.button`
background: ${props => props.primary ? "pink" : "white"};
color: ${props => props.primary ? "white" : "pink"};
`

const Paragraph = styled.p`
font-size: 1.6rem;
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
