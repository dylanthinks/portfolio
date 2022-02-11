import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Container = styled.div`
background-color: grey;
`

const IndexPage = () => {
  return (
    <Container>
   <Layout pageTitle="Home Page">
     <p>ball rolling again. Dusting off my fingers</p>
   </Layout>
   </Container>
  )
}

export default IndexPage
