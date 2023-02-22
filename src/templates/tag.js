import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/siteLayout"
import useSiteMetadata from "../hooks/SiteMetadata"

const Tag = ({ data, pageContext }) => {
  const { tag } = pageContext
  const posts = data.allMarkdownRemark.edges

  const { showNav } = useSiteMetadata()
  
  if (posts.length === 0) {
    return <p>No posts found.</p>
  }

  return (
    <Layout>
      {showNav ? (
  <div className="spacer" style={{height:'70px', border:'0px solid yellow'}}></div>
      ) : (
        ""
      )}
      
    
      <h1 style={{textAlign:'center'}}>Posts tagged "{tag}"</h1>
<div className="horizontal-scroll panels sitegrad movingBG" style={{marginTop:'1vh', paddingTop:''}}>
    <div className="" style={{height:'50%', paddingTop:'50%'}}></div>

      
        {posts.map(({ node }) => (
          <div key={node.id}>
            <Link key={node.id} to={node.frontmatter.slug}>
                      <GatsbyImage
              image={node.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData}
              alt={node.frontmatter.title}
            />
            <h2>{node.frontmatter.title}</h2>
            </Link>
          </div>
        ))}
      
    </div>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            category
            featuredImage {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`

export default Tag
