/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TimeAgo from 'react-timeago'
import { ImPlay } from "react-icons/im"
import { FaImage } from "react-icons/fa"
import { AiOutlinePicLeft } from "react-icons/ai"

// import SiteLogo from "../../static/assets/logo.svg"
// import Countdown from 'react-countdown'

// const Completionist = () => ""

// const Completionist = () => <span>Meme Genes</span>
// const renderer = ({ hours, minutes, seconds, completed }) => {
//   if (completed) {

//     return <a href="https://memegenes.com/"><Completionist /></a>;
//   } else {

//     return (
//        <span>
//         Meme Genes
//       </span> 
//     )
//   }
// }

// const ViewIt = () => <span>Meme Genes - VIEW NOW!</span>
// const renderer1 = ({ hours, minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a complete state
//     return <ViewIt />;
//   } else {
//     // Render a countdown
//     return (
//        <span>
//         Meme in {seconds} Seconds
//       </span> 
//     )
//   }
// }


const PostCard = ({ data }) => (

  



  <article
    className="post-card1"
    style={{display:'', alignItems:'center', justifyContent:'center', width:'100%', height:'', position:'relative', background:'', padding:'20px' }}
  >






    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image1"
          style={{position:'relative', zIndex:'1', maxHeight:'80vh'}}
        />
        {/* <div
              style={{
                alignItems: "center",
                backgroundColor: "",
                display: "flex",
                flexDirection:'column',
                justifyContent: "center",
                justifySelf:'center',
                position: "absolute",
                top:'50%',
                left:'50%',
                
          
              }}
           >

           <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>
        </div> */}
      </Link>
      
    ) : (
      // <Link  to={data.frontmatter.slug}><StaticImage className="featured-image" src="assets/default-og-image.jpg" alt="VidSock Default Image" style={{position:'relative', zIndex:''}} /></Link>
      ''
    )}


<div className="post-content" style={{display:'flex'}}>



{ data.frontmatter.nftdrop ? (
            
<div className="" style={{display:'flex', alignSelf:'center',  position:'absolute', bottom:'66px', width:'100vw', margin:'0 auto'}}>

<div className="countdown" style={{display:'flex', justifyContent:'center', maxWidth:'600px',  margin:'0 auto', color:'#fff', textAlign:'center', padding:'1rem', fontSize:'200%', borderRadius:'12px', border:'0px solid #111', textShadow:'1px 2px 0px #000'}}>
{/* <Countdown date={data.frontmatter.nftdrop}> */}
{/* <Countdown
date={Date.now() + 60000} className="countdown">

<Completionist />
</Countdown> */}

{/* <Countdown date={Date.now() + 60000} renderer={renderer} /> */}
</div>

</div>

       
          ) : (

            ""
       
          )}


<div className="" style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px auto', height:'100%', textAlign:'left', padding:'.5rem 3vw', fontSize:'clamp(1rem, 1vw, 1rem)',  background:'rgba(0, 0, 0, 0.7)', borderRadius:'8px', color:'#fff' }}>

<h2 className="title" style={{fontSize:'clamp(1rem, 3.5vw, 3.8rem)', }}>
  <Link 
    to={data.frontmatter.slug}
  >
    {data.frontmatter.title}
     {/* - <Countdown date={Date.now() + 60000} renderer={renderer} precision={0} intervalDelay={0} zeroPadTime={0} />  */}
    {/* <Countdown
date={Date.now() + 60000} className="countdown">
  date={Date.now() + 10000}
    intervalDelay={0}
    precision={3}
    zeroPadTime={0}
    renderer={props => ({ hours, minutes, seconds })}
<Completionist />
</Countdown> */}

  </Link>
</h2>

<p style={{minWidth:'150px', position:'', textAlign:'center', border:'0px solid red',}}>
  <TimeAgo date={data.frontmatter.date}/>
</p>


</div>

{data.frontmatter.youtuber ? (
<Link to={data.frontmatter.slug} style={{}}>
  <div className="spotlight">

  <div style={{display:'grid', placeContent:'center'}}>
    


<div className="posticons" style={{fontWeight:'bold', padding:'1rem 2vw', fontSize:'clamp(1rem, 4vw, 2rem)', width:'40vw', height:'', background:'rgba(0, 0, 0, 0.7)', borderRadius:'12px',}}>

  


{/* <SiteLogo className="posticon" style={{margin:'0 auto', height:'20vh', width:'100%',}}/> */}

<div style={{display:'flex', justifyContent:'space-around'}}>

<FaImage className="posticon" style={{margin:'0 auto', width:'100%', height:'10vh', fontSize:''}} />


    <ImPlay className="posticon" style={{margin:'0 auto', width:'100%', height:'10vh', fontSize:'60px'}} />

    
    <AiOutlinePicLeft className="posticon" style={{margin:'0 auto', width:'100%', height:'10vh', fontSize:''}} />


{/* {data ? (
    ""
) : (
  ""
)} */}


</div>


Play Multimedia
</div>


</div>
</div>
</Link>
) : (
  ""
)}
</div>

  </article>

)

export default PostCard