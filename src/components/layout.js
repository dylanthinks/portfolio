import * as React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import FontStyles from '../fonts/fonts'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
html {
  font-size: 10px;
  font-family: 'Source Serif Pro', serif;
  background-color: white;
  color: ${props => (props.theme === "purple" ? "purple" : "white")};
  line-height: 1.15;
  -webkit-text-size-adjust: 100%; 
}

body, ul {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
    margin: 0;
    width: 100%;
    height: 100%;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
`

const Container = styled.div`
margin: auto;
max-width: 80vw;
`

const Heading = styled.h1`
color: green;
`

const NavLinks = styled.ul`
display: flex;
list-style: none;
padding-left: 0;
`

const NavLinkItem = styled.li`
padding-right: 2rem;
`

const StyledLink = styled(Link)`
color: blue;
text-decoration: none;
`;

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }`
    )

    return (
        <React.Fragment>
        <ThemeProvider>
        <Container>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header>{data.site.siteMetadata.title}</header>
        <main>
        <GlobalStyle theme="purple" />
            <title>{pageTitle}</title> 
            <nav>
                <NavLinks>
                    <NavLinkItem><StyledLink to="/">Home</StyledLink></NavLinkItem>
                    <NavLinkItem><StyledLink to="/about">About</StyledLink></NavLinkItem>
                    <NavLinkItem><StyledLink to="/blog/">Writing</StyledLink></NavLinkItem>
                    <NavLinkItem><StyledLink to="/design/">Design System</StyledLink></NavLinkItem>
                </NavLinks>
            </nav>
            <Heading>{pageTitle}</Heading> 
        {children}
        </main>
        </Container>
        </ThemeProvider>
         </React.Fragment>
    )
} 

export default Layout