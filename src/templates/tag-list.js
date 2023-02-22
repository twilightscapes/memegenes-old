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
            <a href={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</a> ({tag.totalCount})
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagList
