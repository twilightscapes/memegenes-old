import React from "react"
import { graphql } from "gatsby"

const Tag = ({ data, pageContext }) => {
  const { tag } = pageContext
  const posts = data.allMarkdownRemark.edges

  if (posts.length === 0) {
    return <p>No posts found.</p>
  }

  return (
    <div>
      <h1>Posts tagged "{tag}"</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <a href={node.frontmatter.slug}>{node.frontmatter.title}</a>
          </li>
        ))}
      </ul>
    </div>
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
          }
        }
      }
    }
  }
`

export default Tag
