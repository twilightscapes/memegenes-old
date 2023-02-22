import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/siteLayout"

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext

  return (
    <Layout>
      <div>
        <h1>Blog</h1>

        <div className="horizontal-scroll panels sitegrad movingBG" style={{marginTop:'1vh'}}>
    <div className="" style={{height:'50%', paddingTop:'50%'}}></div>


        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tags = node.frontmatter.tags || []
          const excerpt = node.frontmatter.excerpt || node.excerpt
          const featuredImg = node.frontmatter.featuredImage

          return (
            <div key={node.fields.slug}>
              {/* Render featured image thumbnail if it exists */}
              {featuredImg && (
                <Link to={node.fields.slug}><Img fluid={featuredImg.childImageSharp.fluid} alt="" /></Link>
              )}

              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: excerpt }} />
              <ul>
                {tags.map((tag) => (
                  <li key={tag}>
                    <Link to={`/tag/${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}

        
      </div>
      </div>

      {/* Render pagination links */}
      <div style={{position:'fixed', bottom:'20px'}}>
          {Array.from({ length: numPages }, (_, i) => {
            const page = i + 1
            const path = page === 1 ? "/archive" : `/archive/${page}`
            return (
              <Link
                key={`pagination-link-${page}`}
                to={path}
                activeClassName="active"
              >
                {page}
              </Link>
            )
          })}
        </div>

    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags

            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogList
