/** @jsx jsx */
// import * as React from "react"

import { useState, useRef } from "react";

import Controls from "../components/Controls";

import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
// import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import CommentBox from "../components/commentbox"
// import { StaticImage } from "gatsby-plugin-image"
import useSiteMetadata from "../hooks/SiteMetadata"
// import Countdown from 'react-countdown'


import { ImCheckmark, ImCross } from "react-icons/im"
import { RxDoubleArrowUp } from "react-icons/rx"
// import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { AiOutlineAudioMuted } from "react-icons/ai"
import Footer from "../components/footer"
// import { SRLWrapper } from "simple-react-lightbox"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ReactPlayer from 'react-player/lazy'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import YouTubed from "../components/youtube"
import Seo from "../components/seo"
import Layout from "../components/siteLayout"
import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import { ImPlay } from "react-icons/im"
// import TimeAgo from 'react-timeago'
import styled from "styled-components"
const CustomBox = styled.div`

.controlsWrapper: {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
},



// .pagination{ position:relative; top:-205px;}


@media (max-width: 48em) {

  .pagination{maxWidth:'100vw'}
}




  // .sidebarIconToggle{bottom:40% !important;}



  #vert {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    height:100vh;
  }
  #vert section {
    height:100vh;
    scroll-snap-align: center;
    overflow:hidden;
    background:tranparent !important;
  }


}


`



const Pagination = props => (
  <div className="pagination -post1" style={{position:'', bottom:'',}}>
    <ul className="" style={{}}>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        // <li style={{border:'1px solid', borderRadius:'12px', filter:'drop-shadow(0 0px 6px rgba(0, 0, 0, 1))'}}>
        <li style={{}}>
          <Link style={{}}  to= {props.previous.frontmatter.slug + "/"} rel="prev">
          <button className="" style={{display:'flex', justifyContent:'flex-end',
          // textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 5px rgba(155,155,155,1))', color:'#fff'
        }}>
&#10094; &nbsp; {" "} <span className="page-title mobilehide">
              {/* {props.previous.frontmatter.title} */}
              Previous
            </span></button>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li style={{}}>
          <Link to={props.next.frontmatter.slug + "/"} rel="next">
<button className="" style={{display:'flex', justifyContent:'flex-start',
          // textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 5px rgba(155,155,155,1))', color:'#fff'
          }}>
            <span className="page-title mobilehide">
              {/* {props.next.frontmatter.title} */}
Next
              </span>
             {" "} &nbsp; &#10095;
          </button>
          </Link>
        </li>
      )}
    </ul>
  </div>
)






const Post = ({ data, pageContext }) => {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark


  const FrontImage = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""


  //   const NftLink = frontmatter.nftlink
    const NftRedeem = frontmatter.nftredeem
  //   const NftDrop = frontmatter.nftdrop



  const [isMobile, setIsMobile] = useState(false);

const resizeMobile = () => {
  setIsMobile(true);
  const elements = document.querySelectorAll('.menusnapp');
  elements.forEach(el => el.style.display = 'none', el => el.style.overflow = 'hidden', el => el.style.transition = 'transform 1550ms ease-in-out');
}

const resizeDesk = () => {
  setIsMobile(false);
  const elements = document.querySelectorAll('.menusnapp');
  elements.forEach(el => el.style.display = 'flex', el => el.style.transition = 'transform 1550ms ease-in-out');
}

  const Svg = frontmatter.svgImage
  // const svgZindex = frontmatter.svgzindex

// function AddSvg(){
  
//   return (
//     <object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'', top:'', left:'0', right:'0', bottom:'0', overflow:'', border:'0px solid red', zIndex:'', width:'100vw', height:'', background:'transparent', objectFit:'contain'   }} alt="animated content" title="animated content" ></object>
//   )
// }


// const IsNft = frontmatter.isnftforsale
const ShowOriginal = frontmatter.youtubeshoworiginal
const ShareThis = frontmatter.shareable
const Comments = frontmatter.comments

const YouTubeStart = frontmatter.youtubestart
const YouTubeEnd = frontmatter.youtubeend
const YouTubeMute = frontmatter.youtubemute
const YouTubeControls = frontmatter.youtubecontrols
const YouTubeAutostart = frontmatter.youtubeautostart

const Suggestion1 = frontmatter.youtubersuggestion1
const Suggestion2 = frontmatter.youtubersuggestion2
const Suggestion3 = frontmatter.youtubersuggestion3

const YoutubeLoop = frontmatter.youtubeloop

const ContentinVideo = frontmatter.contentinvideo
const LiarLiar = frontmatter.liarliar

if (Suggestion1) {
  <ShowSuggestion />
}
else{

  
}

function ShowSuggestion() {

  return (
<div style={{}}>
  

  
<div style={{width:'100%', maxWidth:'400px', margin:'0 auto 0 auto', fontSize:'90%', padding:'5px 0 ', border:'4px dotted', borderRadius:'12px', textAlign:'center', position:'relative', zIndex:'1', display:'grid', justifyContent:'center'}}>
<IoArrowRedoSharp style={{position:'absolute', top:'0', left:'0', fontSize:'60px', transform: 'rotate(-45deg)', }} />
<IoArrowUndoSharp style={{position:'absolute', top:'0', right:'0', fontSize:'60px', transform: 'rotate(45deg)', }} />
  
  
  <span style={{fontSize:'120%', fontWeight:'bold', textTransform:'uppercase'}}>This is interactive!</span> 
<br />

We recommend these alternatives:
<br /><br />
Click to Copy:<br />
<CopyToClipboard text={Suggestion1}>
  <button>{Suggestion1} </button>
</CopyToClipboard><br />


  <CopyToClipboard text={Suggestion2}>
  <button>{Suggestion2} </button>
</CopyToClipboard><br />

<CopyToClipboard text={Suggestion3}>
  <button>{Suggestion3} </button>
</CopyToClipboard><br />

<br />
Add your own in the comments below!

</div>

<span style={{fontSize:'150%'}}></span>
<div className="mobilespace" style={{ border:'0px solid red'}}></div>
</div>
  )
}

const YoutuberSuggestion1 = frontmatter.youtubersuggestion1
const YoutuberSuggestion2 = frontmatter.youtubersuggestion2
const YoutuberSuggestion3 = frontmatter.youtubersuggestion3
const iframeUrl = "https://www.youtube-nocookie.com/embed/" + frontmatter.youtuber + ""
  // const YouTube = frontmatter.youtuber

const OriginalUrl = frontmatter.youtuber 

  if (!YoutuberSuggestion1) {
    <IframeSuggestions />
  }
  else{
  
    
  }




 



  function IframeSuggestions() {
    
    return (
      <div>

<ReactPlayer
            allow="autoplay"
            ref={playerRef}
            style={{position:'absolute', top:'0', zIndex:''}}
            width="100%"
            height="1000px"
            className='react repo'
          //       url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          // url={[
          //   iframeUrl,
          //   YoutuberSuggestion1,
          //   YoutuberSuggestion2,
          //   YoutuberSuggestion3
          // ]}
            // url={[YoutubePlaylist, IfSuggestion1, IfSuggestion2, IfSuggestion3]}
            // url="https://youtu.be/lZzai6at_xA"
            // url={iframeUrl}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            muted={muted}
            playsinline
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute, loop:YoutubeLoop }
              },
            }}
          
          />


              

              
</div>

    )

  }



  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtuber2
    return (


<ReactPlayer
          className='audioframe'
          url={iframeUrl3}
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          width="300px"
          height="150px"
          style={{marginTop:'0', position:'relative', zIndex:'0'}}
          config={{
            
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
            
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'absolute', top:'-150px', left:'10px', zIndex:'', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
      
          {/* <div className="" style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem',}}>Click For Audio</div> */}

          <div className="popped" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.3rem', color:'#ccc', fontSize:'2rem', background:'rgba(51, 51, 51, 0.3)', borderRadius:'8px', border:'1px solid #666', filter:'drop-shadow(2px 2px 2px #000)', cursor:'pointer'}}>
            
 

            <AiOutlineAudioMuted style={{margin:'0 1vw', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000)'}} />
            
            {LiarLiar ? (
  <ImCross style={{margin:'0 1vw', fontSize:'20px', color:'#ff0000', filter:'drop-shadow(2px 2px 2px #000)'}} />
          ) : (
            ""
          )}
            
            <div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)', color:'#ccc', }}>{frontmatter.audiotitle}</div>
          </div>
          
      </div>
          </button>}
   
            light="../assets/transparent.png"
          />
     




    )
  }



  function AddSvg(){
    const svgUrl = frontmatter.svgImage.publicURL
    return (
      <object className="animator" id="" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'0', left:'0', right:'0', bottom:'0', overflow:'', border:'0px solid red', zIndex:'', aspectRatio:'', width:'100vw', background:'transparent', objectFit:'cover'   }} alt="animated content" title="animated content" ></object>
    )
  }


      //  const svgUrl = frontmatter.svgImage.publicURL
// const svgUrl = "../assets/" + frontmatter.svgImage.publicURL + ""
// const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""

const YouTube = frontmatter.youtuber
  const YouTube2 = frontmatter.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend

  

  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }



  const { siteUrl } = useSiteMetadata()
  const { iconimage } = useSiteMetadata()





  // const [showControls, setShowControls] = useState(false);
  // const [count, setCount] = useState(0);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = useState({
    playing: YouTubeAutostart,
    controls: YouTubeControls,
    light: false,
    muted: YouTubeMute,
    loop: YoutubeLoop,
  });

  const playerRef = useRef(null);
  const controlsRef = useRef(null);

  const {
    playing,
    controls,
    light,
    muted,
    loop,
    played,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  

  return (
    
    <Layout className="page">
<CustomBox style={{}}>
<Helmet>
  <body id="body" className="blogpost" style={{background:''}} />
</Helmet>

      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        
        image={ siteUrl + getSrc(frontmatter.featuredImage) }

        article={true}
      />



{/* <Seo
          title={`Welcome to the GRID`}
          description={`I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.`}
          image={'https://allin60.com/tronin60.jpg'}
        /> */}


{/* <div className='player-wrapper intro' style={{position:'relative', bottom:'0', zIndex:'', height:'100vh', maxHeight:'', overflow:'', filter: 'drop-shadow(0 0 20px #000)',  }}> */}
<div id="top"></div>


<div className="pagemenu" style={{position:'fixed', bottom:'0px', zIndex:'2',  left:'0px', right:'', display:'flex', justifyContent:'center', width:'auto', margin:'0 auto', gap:'20px',
textShadow:'2px 2px 0 #222', color:'#fff',	background:'rgba(0, 0, 0, .8)', padding:'12px 20px 10px 10px', borderTop:'1px solid #666', borderRight:'1px solid #666', borderRadius:'0 12px 0 0',

 }}>
<div>
  {/* <AnchorLink to="#top" style={{}} onClick={resizeMobile}>
  <button onClick={resizeMobile}><RxDoubleArrowUp /></button>
        </AnchorLink> */}


    {isMobile ? 
      <AnchorLink to="#top" style={{cursor:'pointer', padding:'5px'}}><button onClick={resizeDesk}><RxDoubleArrowUp /></button></AnchorLink> :
      <AnchorLink to="#top" style={{cursor:'pointer', padding:'5px'}}><button onClick={resizeMobile} style={{cursor:'pointer', padding:'0 5px 5px 5px'}}>x</button></AnchorLink>
    }

</div>

        <label id="menuicon1" htmlFor="openSidebarMenu" className="sidebarIconToggle1" style={{cursor:'pointer', color:'#fff',filter:'drop-shadow(0px 0px 5px rgba(155,155,155,3))'}}>Menu</label>

<div className="menusnapp" style={{ display:'flex', justifyContent:'center', width:'auto', margin:'0 auto', gap:'20px',}}>
  
   


  

{Comments ? (
          <AnchorLink to="#comments"  style={{cursor:'pointer', padding:'5px'}}>
  Comments
        </AnchorLink>
       
          ) : (
            <AnchorLink to="#comments"  style={{cursor:'pointer', padding:'5px'}}>
            Comments
                  </AnchorLink>
          )}




{ShareThis ? (
<AnchorLink to="#sharethis"  style={{cursor:'pointer', padding:'5px'}}>
  Share
        </AnchorLink>
 ) : (
  ""
)}


{ShowOriginal ? (
          <AnchorLink to="#original"  style={{cursor:'pointer', padding:'5px'}}>
  Legal
        </AnchorLink>
       
          ) : (
            <AnchorLink to="#original"  style={{cursor:'pointer', padding:'5px'}}>
            Legal
                  </AnchorLink>
          )}



<div  style={{cursor:'pointer', padding:'0 5px'}}>{(previous || next) && <Pagination {...props} />}</div>


{/* <AnchorLink to="#footer" style={{border:'0px solid', }}>
  Footer
        </AnchorLink> */}

</div>
</div>



{YouTubeControls ? (
""
       
          ) : (
            <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />
          )}

        





<div className="wrap-element" style={{
  overflow:'hidden',
  // height:'clamp(30vh, 80vh, 100vh)',
  aspectRatio:'16/9',
  }}>




{FrontImage ? (
            <GatsbyImage
              image={FrontImage}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100vw', height:'90%',  top:'0', zIndex:'-2', border:'0px solid red !important', paddingBottom:'',}}
            />

          ) : (
          ""
          )}
    


    {YouTube ? (
<div
          // onMouseMove={handleMouseMove}
          // onMouseLeave={hanldeMouseLeave}
          // ref={playerContainerRef}
          // className={classes.playerWrapper}
        >
          <ReactPlayer
            allow="autoplay"
            ref={playerRef}
            style={{position:'', zIndex:''}}
            width="100%"
            height="100%"
          //       url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          // url={[
          //   iframeUrl,
          //   YoutuberSuggestion1,
          //   YoutuberSuggestion2,
          //   YoutuberSuggestion3
          // ]}
            // url={[YoutubePlaylist, IfSuggestion1, IfSuggestion2, IfSuggestion3]}
            // url="https://youtu.be/lZzai6at_xA"
            url={iframeUrl}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            muted={muted}
            playsinline
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute, loop:YoutubeLoop }
              },
            }}
          
          />
</div>

) : (
  ""
  )}





{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty1"
              style={{height:'auto', width:'100%', maxHeight:'100%', overflow:'hidden', position:'absolute', bottom:'0', zIndex:'',
             objectFit:'contain', border:'0px solid red !important', background:'transparent'}}
            />
            
          ) : (
            ""
          )}

          




 {Suggestion1 ? (
            <div style={{position:'absolute', top:'0', left:'', bottom:'', zIndex:'', maxWidth:'100vw', height:''}}>
            <YouTubed />
            </div>
       
          ) : (
            ""
          )}








{ContentinVideo ? (
  <div id="contentvideo"
        className="blog-post-content" style={{ fontSize:'1.1rem', textAlign:'left', padding:'', margin:'0 auto', color:'inherit !important', border:'1px solid transparent', position:'absolute', bottom:'', left:'0', top:'0', right:'0', zindex:'3', maxHeight:'90vh', borderBottom:'0px solid', }}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
 ) : (
  ""
)}


        
{Svg ? (
  <AddSvg />
     ) : (
       ""
       )}





        </div>



      {/* </div> */}






      


{Suggestion1 ? (
            <ShowSuggestion style={{position:'relative', top:'', zIndex:'0',}} />
       
          ) : (
            ""
          )}

{YouTube2 ? (
            <Iframer3 />
       
          ) : (
            ""
          )}

{/* <AnchorLink className="" to="#sharethis" style={{position:'absolute', top:'0', zIndex:'60'}}>
                About Us 
              </AnchorLink> */}
{/* <div style={{position:'fixed', bottom:'20px', zIndex:'1',  left:'', right:'', display:'flex', justifyContent:'center', width:'', margin:'0 auto', gap:'20px',
textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 5px rgba(155,155,155,1))', color:'#fff', padding:'5px 10px', borderRadius:'12px',

 }}>
  
      {(previous || next) && <Pagination {...props} />}
      </div> */}






{!ContentinVideo ? (
<article className="blog-post">
        <header style={{height:'', display:'grid', placeContent:'center'}}>
          <section className="article-header1" style={{textAlign:'center', margin:'2vh 0 0 0', height:'auto', color:''}}>
            <h1 className="tronText" style={{fontSize:'4vw'}}>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            {/* <TimeAgo date={frontmatter.date} style={{color:'#fff !important'}} /> */}
          </section>
        </header>
<div style={{padding:'0 0', borderTop:'0px solid', margin:'0 0', textAlign:'center', fontSize:'1.5rem', minWidth:'50%', width:'100%', maxWidth:'', border:'0px solid yellow'}}>
      <div
        className="blog-post-content" style={{ fontSize:'1.1rem', textAlign:'center', width:'100%', maxWidth:'', padding:'10vh 10vw', margin:'0 auto', color:'inherit !important'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />    
</div>
 </article>
        ) : (
          ""
        )}
         


     
  





      <section id="original" style={{height:'100vh', marginTop:'50vh',   display:'grid', placeContent:'center'}}>

      {ShowOriginal ? (
          <div style={{position:'relative', width:'100%', maxWidth:'800px', margin:'0 auto', textAlign:'center', display:'flex', flexDirection:'column', fontSize:'100%', borderRadius:'12px' }}>
<div style={{maxWidth:'60vw', width:'100%', height:'', maxHeight:'40vh', padding:'0', position:'relative', bottom:'0', textAlign:'center', border:'0px solid blue', margin:'0 auto', borderRadius:'12px'}}>
  
                    {/* <Iframer2 /> */}
<a href={OriginalUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
 <div style={{display:'grid', placeContent:'center', fontWeight:'bold', padding:'1rem', fontSize:'2rem', width:'100%', height:'', border:'1px solid', borderRadius:'12px'}}>Support Our Video Sponsors

<ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
Click to play original video
</div>
</a>                   
       </div>
 
       </div>
       
          ) : (
            ""
          )}
          
          <br />

          <div style={{textAlign: 'center', margin: '2rem 10px 1rem 10px', justifyContent: 'center', fontSize: '.95rem', textDecoration:'none', maxWidth:'70vw'}}>
            Legal:<br />
            <Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link>
      <br /> <br />
            <p style={{textAlign:'left'}}>*This is a parody website meant for education and entertainment purposes. <br />All characters, and events portrayed in this production are fictitious.<br />There is no identification with actual persons (living or deceased), <br />places, buildings, and/or products that are intended or should be inferred. 
            <br />
            Any resemblance to real persons, living or dead, is purely coincidental.<br />All content is purely satirical in nature. No celebrities were harmed.</p>

            <br />
          Some imagery from <a href="https://www.flickr.com/photos/donkeyhotey/" target="_blank" >DonkeyHotey</a>
          <br />

            </div>


  <GoBack />
</section>



      






   


{ShareThis ? (

<section id="sharethis" style={{height:'100vh', marginTop:'',   display:'grid', placeContent:'center'}}>

  <br />
<ShareSocial />
<br />
<GoBack />




</section>
          ) : (
            ""
          )}





       



















{Comments ? (

<section id="comments" style={{height:'100vh', marginTop:'',   display:'grid', placeContent:'center'}}>

<CommentBox />


</section>
          ) : (
            <section id="comments" style={{height:'100vh', marginTop:'',   display:'grid', placeContent:'center'}}>

{/* <CommentBox /> */}
Comments have been disabled for this post.
<GoBack />

</section>
          )}













      

      


   <br />
   <br />
   </CustomBox>

   <section id="footer" style={{height:'100vh', marginTop:'',  }}>
   <Footer />
   </section>
    </Layout>




  )
}



export default Post

export const pageQuery = graphql`
  query BlogPostQueryBlogPostQuery($id: String!) {
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        youtuber
        youtuber2
        youtubeshoworiginal
        youtubersuggestion1
        youtubersuggestion2
        youtubersuggestion3
        youtubestart
        youtubeend
        audiostart
        audioend
        audiotitle
        liarliar
        youtubemute
        youtubeloop
        youtubecontrols
        youtubeautostart
        contentinvideo
        comments
        shareable
        nftredeem
        isnftforsale
        nftdrop
        svgzindex
        nftlink
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        svgImage{
          publicURL
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`