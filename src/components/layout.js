import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'

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

const Layout = ({ pageTitle, children }) => {
    return (
        <React.Fragment>
        <main>
        <GlobalStyle theme="purple" />
            <title>{pageTitle}</title> 
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1> 
        {children}
        </main>
         </React.Fragment>
    )
} 

export default Layout