import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const GlobalStyle = createGlobalStyle`
html {
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

const NavLinks = styled.ul`
margin: 0;
`

const NavLinkItem = styled.li`
margin: 0;
`

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
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header>{data.site.siteMetadata.title}</header>
        <main>
        <GlobalStyle theme="purple" />
            <title>{pageTitle}</title> 
            <nav>
                <NavLinks>
                    <NavLinkItem><Link to="/">Home</Link></NavLinkItem>
                    <NavLinkItem><Link to="/about">About</Link></NavLinkItem>
                    <NavLinkItem><Link to="/blog/">Blog</Link></NavLinkItem>
                </NavLinks>
            </nav>
            <h1>{pageTitle}</h1> 
        {children}
        </main>
         </React.Fragment>
    )
} 

export default Layout