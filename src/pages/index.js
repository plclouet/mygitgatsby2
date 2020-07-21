import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Bonjour</h1>
    <p>Bienvenu sur mon premier site avec Gatsby</p>
    <p>PL CLOUET</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      {data.allStrapiOrdonnance.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.lastName}</Link>
          </h2>
          <Img fixed={document.node.imageOrdo.childImageSharp.fixed}/>
          <p>{document.node.firstName}</p>
          <p>{document.node.lastName}</p>
        </li>
      ))}
    </ul>
    <Link to="/app">Go to App</Link><br />
    <Link to="/page-2/">Go to page 2</Link> <br />
   
    
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiOrdonnance {
      edges {
        node {
          id
          firstName
          lastName
          imageOrdo {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`