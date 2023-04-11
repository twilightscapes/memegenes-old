import React from 'react';
import { graphql, Link, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/siteLayout"
import useSiteMetadata from "../hooks/SiteMetadata"
import { ImPlay } from "react-icons/im"
import { FaImage } from "react-icons/fa"
import { AiOutlinePicLeft } from "react-icons/ai"
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from "react-helmet"


const Category = ({ data, pageContext }) => {
  const { category } = pageContext
  const posts = data.posts.edges
  const categories = data.allMarkdownRemark.group.map((group) => group.fieldValue)

  const { showNav } = useSiteMetadata()

  return (
    <Layout>
      <Helmet>
        <body id="body" className="category" />
      </Helmet>

      {showNav ? (
        <div className="spacer" style={{ height: "70px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}

      <div>
<div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginTop:''}}>
        {/* <h1 style={{ textAlign: "center" }}>{category}</h1> */}
        <select className="cattags"
  style={{}}
  onChange={(e) => {
    const selectedCategory = e.target.value;
    navigate(`/category/${selectedCategory}`);
  }}
  value={category}
>
  {categories.map((category) => (
    <option key={category} value={category} selected={category === pageContext.category}>
      {category}
    </option>
  ))}
</select>
 </div>       
        

        <div className="contentpanel grid-container" style={{ marginTop: "5vh" }}>
          <div className="sliderSpacer" style={{ height: "", paddingTop: "", display: "" }}></div>

          {posts.map(({ node }) => {
            const featuredImg = node.frontmatter.featuredImage;

            return (
              <div className="post-card1" style={{ justifyContent: "center", alignItems: "center" }} key={node.id}>
                
    
                  <Link className="postlink" key={node.id} to={node.frontmatter.slug}>


{featuredImg ? (

<GatsbyImage
image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
alt={node.frontmatter.title + " - Featured image"}
className="featured-image12 layer12 iiz__img"
placeholder="blurred"
// loading="eager"
/>
) : (
<StaticImage
            className="featured-image1"
            src="../../static/assets/default-og-image.webp"
            alt="Default Image"
            style={{ position: 'relative', zIndex: '' }}
          />
)}

<div className="post-content" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', height:'', position:'relative', background:'', padding:'0', margin:'0 auto 0 auto', textAlign:'center', overFlow:'hidden'}}>
        

<div className="panel" style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px auto', maxWidth:'80vw', gap:'.4vw', height:'', textAlign:'center', padding:'1vh 2vw', fontSize:'clamp(1rem, 1vw, 1rem)',  background:'rgba(0, 0, 0, 0.7)', borderRadius:'', color:'#aaa' }}>
            <h2 className="title" style={{ }}>
              {node.frontmatter.title}
            </h2>
          {/* <p style={{position:'', textAlign:'center', border:'0px solid red', fontSize:'70%', minWidth:'100px'}}>
            <TimeAgo date={data.frontmatter.date}/>
          </p> */}
        </div>

            {node.frontmatter.youtube.youtuber ? (
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

            </div>


                  </Link>

              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};


export const query = graphql`
query ($category: String!) {
  allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
    edges {
      node {
        frontmatter {
          category
        }
      }
    }
    group(field: frontmatter___category) {
      fieldValue
    }
  }
  posts: allMarkdownRemark(filter: {frontmatter: {category: {eq: $category}}}, sort: { fields: frontmatter___date, order: DESC }) {
    edges {
      node {
        id
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          category
          youtube {
            youtuber
          }
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

export default Category
