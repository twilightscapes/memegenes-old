import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/siteLayout";
import { Helmet } from "react-helmet";

const CustomBox = styled.div``;

function RSSFeed({ }) {
  // const { allFeedUrbanFetish } = data;

  return (
    <CustomBox>
      <Layout>
        <Helmet>
          <body id="body" className="test" />
        </Helmet>

        <div className="scroll-container">
          {/* {allFeedUrbanFetish &&
            allFeedUrbanFetish.edges.map(({ node }) => (
              <div key={node.id}>
                <h2>
                  <a href={node.link} target="_blank" rel="noopener noreferrer">
                    {node.title}
                  </a>
                </h2>
                {node.contentSnippet && <p>{node.contentSnippet}</p>}
                {node.enclosure && (
                  <img src={node.enclosure.url} alt={node.title} />
                )}
              </div>
            ))} */}
        </div>
      </Layout>
    </CustomBox>
  );
}


// export const query = graphql`
//   query {
//     allFeedUrbanFetish {
//       edges {
//         node {
//           title
//           link
//           pubDate
//           isoDate
//           contentSnippet
//           guid
//         }
//       }
//     }
//   }
// `;






export default RSSFeed;
