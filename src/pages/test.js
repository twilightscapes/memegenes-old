import * as React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"
// import SearchSlider from "../components/searchslider2"
import Seo from "../components/seo"
import Layout from "../components/siteLayout"
import SearchPage from "../pages/search/index"

import { graphql, useStaticQuery } from "gatsby"

const Test = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <Layout className="thanks-page">
      <Seo title="Thank you" />
      <div className="spacer" style={{marginTop:'160px', border:'0px solid yellow'}}>

      {/* <SearchPage /> */}
      
      </div>
      <div className="spacer33"></div> 
      <div className="spacer33"></div> 
    </Layout>
  )
}

export default Test