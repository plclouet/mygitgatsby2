import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const OrdonnanceTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiOrdonnance.lastName}</h1>
    {/* <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p> */}
    <Img fluid={data.strapiOrdonnance.imageOrdo.childImageSharp.fluid}/>
    <p>{data.strapiOrdonnance.firsName}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default OrdonnanceTemplate

export const query = graphql`
  query OrdonnanceTemplate($id: String!) {
    strapiOrdonnance(id: {eq: $id}) {
      firstName
      lastName
      imageOrdo {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
     
    }
  }
`