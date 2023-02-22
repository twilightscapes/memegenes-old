import React from "react"
import { graphql } from "gatsby"

const TagList = ({ data }) => {
  const tags = data.allMarkdownRemark.group

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.fieldValue}>
            <a href={`/tag/${tag.fieldValue}`}>{tag.fieldValue}</a> ({tag.totalCount})
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;


export default TagList
