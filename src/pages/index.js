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
     src="https://www.caughtbytheriver.net/wp-content/uploads/2019/11/19649_uferasgerard_gillesdeleuze_bmp-1024x707.jpg"
     alt="black and white image of a man standing by a mirror that is facing another mirror so they reflect into infinity"
     />
   </Layout>
   </Container>
  )
}

export default IndexPage
