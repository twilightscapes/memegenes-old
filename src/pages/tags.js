import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/siteLayout"
import { ImPlay } from "react-icons/im"
import { FaImage } from "react-icons/fa"
import { AiOutlinePicLeft } from "react-icons/ai"
import { Helmet } from "react-helmet"

const TagIndex = ({ data }) => {

  const [selectedTag, setSelectedTag] = useState(''); // State to keep track of selected tag

  const handleTagChange = (event) => { // Handler for select change
    setSelectedTag(event.target.value);
  }

  const tags = data.allMarkdownRemark.group.filter(
    group => group.fieldValue !== null && group.fieldValue !== ""
  ).map(group => group.fieldValue);

  if (!tags || tags.length === 0) {
    return <div>No tags found.</div>;
  }

  return (
    <Layout>
        <Helmet>
        <body className="tagpage utilitypage" />
      </Helmet>
      <div className="spacer" style={{ height: '70px', border: '0px solid yellow' }}></div>
      <div style={{textAlign:'center', paddingTop:'1rem'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <select className="cattags" id="tag-select" value={selectedTag} onChange={handleTagChange}>
            <option value="">All tags</option>
            {tags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        <div className="contentpanel grid-container" style={{ marginTop: "5vh" }}>
          <div className="sliderSpacer" style={{ height: "", paddingTop: "", display: "" }}></div>
   
          {data.allMarkdownRemark.edges &&
            data.allMarkdownRemark.edges
              .filter(({ node }) => !selectedTag || (node.frontmatter.tags && node.frontmatter.tags.includes(selectedTag)))
              .map(({ node }) => {
                const { featuredImage } = node.frontmatter;

                return (
                  <div key={node.fields.slug} className="post-card1" style={{ justifyContent: "center", alignItems: "center" }}>
                    <Link to={node.fields.slug}>
                      {featuredImage ? (
                        <GatsbyImage
                          image={featuredImage.childImageSharp.gatsbyImageData}
                          alt={node.frontmatter.title + " - Featured image"}
                          className="featured-image1 layer12 iiz__img"
                          placeholder="blurred"
                        />
                      ) : (
                        <StaticImage
                          className="featured-image1"
                          src="../../static/assets/default-og-image.webp"
                          alt="Default Image"
                          style={{ position: 'relative', zIndex: '' }}
                        />
                      )}
                      <div className="post-content" >
  
  {node.frontmatter.youtuber ? (

<div className="spotlight" style={{border:'0px solid green', }}>
<div className="posticons" style={{flexDirection:'column', justifyContent:'center', margin:'0 auto'}}>
<div style={{display:'flex', justifyContent:'space-around', gap:'2vw', color:'fff', }}>
<FaImage className="posticon" style={{margin:'0 auto', width:'60%', height:'30px', fontSize:''}} />
<ImPlay className="posticon" style={{margin:'0 auto', width:'60%', height:'30px', fontSize:''}} />
<AiOutlinePicLeft className="posticon" style={{margin:'0 auto', width:'60%', height:'30px', fontSize:''}} />
</div>
Play Multimedia
</div>
</div>

) : (
""
)}

<div className="panel" style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px auto', width:'auto', maxWidth:'80vw', gap:'.4vw', height:'', textAlign:'center', padding:'1vh 2vw', fontSize:'clamp(1rem, 1vw, 1rem)',  background:'rgba(0, 0, 0, 0.7)', borderRadius:'', border:'0px solid red', color:'#aaa' }}>
      <h2 className="title" style={{ }}>
        {node.frontmatter.title}
      </h2>
    {/* <p style={{position:'', textAlign:'center', border:'0px solid red', fontSize:'70%', minWidth:'100px'}}>
      <TimeAgo date={data.frontmatter.date}/>
    </p> */}
  </div>







</div>
                    </Link>
                  </div>
                )
              })
          }
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            youtube{
              youtuber
            }
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  quality: 80
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`;

export default TagIndex;