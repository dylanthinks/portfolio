import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const Container = styled.div`
background-color: grey;
`

const Button = styled.button`
background: ${props => props.primary ? "pink" : "white"};
color: ${props => props.primary ? "white" : "pink"};
`

const SpecificButton = styled(Button)`
color: purple;
`

const IndexPage = () => {
  return (
    <Container>
   <Layout pageTitle="Home Page">
     <p>ball rolling again. Dusting off my fingers ok yes it did</p>
     <Button>Click</Button>
     <Button primary>Click</Button>
     <SpecificButton>vee</SpecificButton>
     <StaticImage 
     src="../images/02.jpeg"
     alt="dylan smiling at the camera"
     />
   </Layout>
   </Container>
  )
}

export default IndexPage
