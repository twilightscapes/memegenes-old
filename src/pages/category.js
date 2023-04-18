import React from "react"
import { graphql, Link, navigate } from "gatsby"
import useSiteMetadata from "../hooks/SiteMetadata"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { StaticImage } from "gatsby-plugin-image"
import { AiFillDownSquare } from "react-icons/ai"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"

const CategoryIndex = ({ data, pageContext }) => {
  const { category } = pageContext
  const categories = data.allMarkdownRemark.group.map((group) => group.fieldValue)

  const { showNav } = useSiteMetadata()
  const { showDates } = useSiteMetadata()

  return (

    
    <Layout>
      <Helmet>
        <body className="category utilitypage" />
      </Helmet>
      {showNav ? (
        <div className="spacer" style={{ height: "70px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}


<div className="selectArrow" style={{position:'fixed', top:'', left:'1%', right:'1%',  margin:'-60px auto 0 auto', zIndex:'3', display:'grid', placeSelf:'center',  padding:'',}}>
        {/* <h1 style={{ textAlign: "center" }}>{category}</h1> */}
        <select className="cattags"
  style={{}}
  onChange={(e) => {
    const selectedCategory = e.target.value;
    navigate(`/category/${selectedCategory}`);
  }}
  value={category}
>
<option value="">Categories:</option>
  {categories.map((category) => (
    
    <option key={category} value={category} selected={category === pageContext.category}>
      {category}
    </option>
  ))}
</select>
<div style={{position:'absolute', right:'10px', top:'8px', height:'100%', color:'#fff', zIndex:'-1', fontSize:'30px'}}><AiFillDownSquare /></div>
 </div>    



 <div className="contentpanel grid-container" style={{ marginTop: "" }}>
          <div className="sliderSpacer" style={{ height: "", paddingTop: "", display: "" }}></div>

   
        {categories.map(category => (
          <div key={category} style={{border:'1px solid red', display:'block', width:'100%', height:'50vh'}}>
            <Link to={`/category/${category}`}>{category}</Link>
          </div>
        ))}
      </div>
  
  
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
      }
    }
  }
`;

export default CategoryIndex;
