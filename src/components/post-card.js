/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TimeAgo from 'react-timeago'
import { ImPlay } from "react-icons/im"
import { FaImage } from "react-icons/fa"
import { AiOutlinePicLeft } from "react-icons/ai"

import SiteLogo from "../../static/assets/logo.svg"



const PostCard = ({ data }) => (

  



  <article
    className="post-card1"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      position: "relative",
      padding: "20px",
    }}
  >






    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image1"
          style={{position:'relative', zIndex:'1', maxHeight:'80vh'}}
        />
      </Link>
      
    ) : (
      ''
    )}


<div className="post-content" style={{display:'flex'}}>






<div className="" style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 auto', height:'100%', color:'', textAlign:'left', padding:'.5rem 0', borderRadius:'12px',}}>

<h2 className="title" style={{fontSize:'clamp(1rem, 3.5vw, 3.8rem)', }}>
  <Link 
    to={data.frontmatter.slug}
  >
    {data.frontmatter.title}
  </Link>
</h2>

<p style={{minWidth:'150px', position:'', textAlign:'center', border:'0px solid red'}}>
  <TimeAgo date={data.frontmatter.date}/>
</p>


</div>
{data.frontmatter.youtuber ? (
<div className="spotlight">
  <div style={{display:'grid', placeContent:'center'}}>
<Link to={data.frontmatter.slug} style={{}}>
<div className="posticon" style={{fontWeight:'bold', padding:'1rem 2vw', fontSize:'2rem', width:'40vw', height:'', background:'rgba(0, 0, 0, 0.7)', borderRadius:'12px',}}>

  


{/* <SiteLogo className="posticon" style={{margin:'0 auto', height:'20vh', width:'100%',}}/> */}

<div style={{display:'flex', justifyContent:'space-around'}}>

<FaImage className="posticon" style={{margin:'0 auto', width:'100%', height:'10vh', fontSize:''}} />


    <ImPlay className="posticon" style={{margin:'0 auto', width:'100%', height:'10vh', fontSize:'60px'}} />

    
    


{data ? (
    <AiOutlinePicLeft className="posticon" style={{margin:'0 auto', width:'100%', height:'10vh', fontSize:''}} />
) : (
  ""
)}


</div>


Play Multimedia
</div>

</Link>
</div>
</div>
) : (
  ""
)}

</div>

  </article>

)

export default PostCard
