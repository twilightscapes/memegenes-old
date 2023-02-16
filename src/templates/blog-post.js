/** @jsx jsx */
// import * as React from "react"

import { useState, useRef,forwardRef } from "react";

// import Controls from "../components/Controls";

import PropTypes from "prop-types";
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
// import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"
// import { StaticImage } from "gatsby-plugin-image"


import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightDownFill } from "react-icons/ri"
import CommentBox from "../components/commentbox"

import useSiteMetadata from "../hooks/SiteMetadata"
// import Countdown from 'react-countdown'


import { ImCross } from "react-icons/im"

import { RiCloseCircleFill, RiMenuUnfoldFill, RiArrowUpFill } from "react-icons/ri"

// import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { AiOutlineAudioMuted } from "react-icons/ai"


import Footer from "../components/footer"
// import { SRLWrapper } from "simple-react-lightbox"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ReactPlayer from 'react-player/lazy'
import { AnchorLink } from "gatsby-plugin-anchor-links"
// import YouTubed from "../components/youtube"
import Seo from "../components/seo"
import Layout from "../components/siteLayout"
import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import { ImPlay } from "react-icons/im"
import TimeAgo from 'react-timeago'
import styled from "styled-components"
const CustomBox = styled.div`







`



const Pagination = props => (
  <div className="pagination -post1" style={{position:'', bottom:'',}}>
    <ul className="" style={{display:'flex', gap:'2vw', justifyContent:'space-around', paddingTop:'5px', alignItems:'center'}}>
      

    {props.next && props.next.frontmatter.template === "blog-post" && (
        <li style={{display:'flex', justifyContent:'space-between', width:'50%'}}>
<Link to={props.next.frontmatter.slug + "/"} rel="next">
<button className="" style={{display:'flex', justifyContent:'', }}>
<span className="page-title">
  {props.next.frontmatter.title}
{/* Newer */}
</span>
{/* &nbsp;&nbsp;<AiFillCaretLeft /> */}
</button>
</Link>
        </li>
      )}

      <div className="specialfont" style={{fontSize:'clamp(1.5rem, 2vw, 2.8rem)', marginTop:'-5px', width:'10vw', fontWeight:'bold', border:'0px solid', display:'grid', color:'#999', placeContent:'center'}}>GO TO</div>

      
{props.previous && props.previous.frontmatter.template === "blog-post" && (
        // <li style={{border:'1px solid', borderRadius:'12px', filter:'drop-shadow(0 0px 6px rgba(0, 0, 0, 1))'}}>
        <li style={{display:'flex', justifyContent:'space-between', width:'50%'}}>
<Link style={{}}  to= {props.previous.frontmatter.slug + "/"} rel="prev">
 <button className="" style={{display:'flex', justifyContent:'',}}>
 {/* <AiFillCaretRight />&nbsp;&nbsp; */}
  <span className="page-title">
{props.previous.frontmatter.title}
{/* Previous */}
</span>
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







  //   const scrollable = frontmatter.scrollable

    // const NftDrop = frontmatter.nftdrop



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
const CustomControls = frontmatter.customcontrols
const Suggestion1 = frontmatter.youtubersuggestion1
const Suggestion2 = frontmatter.youtubersuggestion2
const Suggestion3 = frontmatter.youtubersuggestion3

const YoutubeLoop = frontmatter.youtubeloop

const ClickToPlay = frontmatter.clicktoplay

// const CustomControlBinary = frontmatter.customcontrols
// const iframeUrl = frontmatter.youtuber



const iframeUrl = "https://www.youtube-nocookie.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=" + frontmatter.youtubeautostart + "&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=" + frontmatter.youtubeloop + "&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""


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
// const YoutuberSuggestion2 = frontmatter.youtubersuggestion2
// const YoutuberSuggestion3 = frontmatter.youtubersuggestion3

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
          width="100%"
          height="250px"
          style={{margin:'0 auto', position:'relative', left:'', right:'', zIndex:'0', maxWidth:'80vw', display:'flex', justifyContent:'center', border:'0px solid blue'}}
          config={{
            
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
            
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'', top:'', border:'0px  solid red', width:'100vw', height:'0', background:'transparent', color:'', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'absolute', top:'-300px', right:'', zIndex:'3', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
      
          {/* <div className="" style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem',}}>Click For Audio</div> */}

          <div className="popped" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.3rem', color:'#ccc', fontSize:'2rem', background:'rgba(51, 51, 51, 0.3)', borderRadius:'8px', border:'0px solid #666', filter:'drop-shadow(2px 2px 2px #000)', cursor:'pointer'}}>
            
 

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
  // const { companyname } = useSiteMetadata()
  const { iconimage } = useSiteMetadata()


  const { showNav } = useSiteMetadata()



  // const [showControls, setShowControls] = useState(false);
  // const [count, setCount] = useState(0);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = useState({
    playing: YouTubeAutostart,
    controls: YouTubeControls,
    light: ClickToPlay,
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

  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };






  const Controls = forwardRef(
    (
      {
        // onSeek,
        // onSeekMouseDown,
        // onSeekMouseUp,
        // onDuration,
        // onRewind,
        onPlayPause,
        // onFastForward,
        playing,
        // played,
        // elapsedTime,
        // totalDuration,
        onMute,
        muted,
        // onVolumeSeekDown,
        // onChangeDispayFormat,
        // playbackRate,
        // onPlaybackRateChange,
        // onToggleFullScreen,
        volume,
        // onVolumeChange,
        // onBookmark,
      },
      ref
    ) => {
      // const classes = useStyles();
      // const [anchorEl, setAnchorEl] = React.useState(null);
      // const handleClick = (event) => {
      //   setAnchorEl(event.currentTarget);
      // };
  
      // const handleClose = () => {
      //   setAnchorEl(null);
      // };
  
      // const open = Boolean(anchorEl);
      // const id = open ? "simple-popover" : undefined;
  
      const { iconimage } = useSiteMetadata()
  
  
      return (
  
  <div>
  
  
  
        {playing ? (
""
        ) : (

  
  
    <div style={{position:'absolute', background:'#111', height:'100vh', width:'100%', zIndex:'3', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'top', justifyContent:'center', color:'#fff' }}>
   
    <img className="homepage-bg" src={iconimage} width="250px" height="150px" alt="MemeGenes" style={{ width:'', margin:'120px auto 0 auto', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important', position:'relative', top:''}} />
    <div style={{position:'relative', right:'0', top:'-8vh', display:'', fontSize:'clamp(1.3rem, 2vw, 3rem)'}}>
      Press the  play button
    </div>

<RiArrowRightDownFill style={{fontSize:'50px', position:'absolute', right:'40%', top:'40vh', transform:'rotate(350deg)' }} />

<div style={{fontSize:'clamp(1rem, 2.8vw, 3.8rem)', margin:'0', padding:'0 5%', maxWidth:'800px'}}>
   {frontmatter.bumpertext ? (
  <h3>{frontmatter.bumpertext}</h3>
        ) : (
  <h3>{frontmatter.title}</h3>
    )}
</div>


<br /><br /><br /><br />
    </div>
 )}  {/* end playing check */}
  
 
  
  
        
  
  
  <div ref={ref} className="controlsbox" style={{width:'', height:'', border:'0px solid red', }}>
  
        {/* <div className="contact" style={{position:'', bottom:'', zIndex:'',  left:'0', right:'0', display:'flex', justifyContent:'center', width:'200px', margin:'0 auto'}}>
    <Link state={{modal: true}}  to="/contact/" className="navbar-item  button fire" style={{margin:'', textDecoration:'none'}}>Contact Me</Link>
  </div> */}
                  <button
                    onClick={onPlayPause}
                    className="controls" 
                    style={{
                  }}
                  >
                    {/* <MdPlayArrow style={{fontSize:'50px', position:'absolute'}}  /> */}
                    {playing ? (
                      
                      <MdPause className="hudicon" style={{}} />
                      
                    ) : (
                
                <MdPlayArrow className="hudicon" style={{}}  />
                
                    )}
                  </button>
  
  
  
        
  
  
  
  
                  <button
                    // onClick={() => setState({ ...state, muted: !state.muted })}
                    onClick={onMute}
                    className="controls "
                    style={{
                  }}
                  >
                    {muted ? (
                      <MdVolumeOff className="hudicon" fontSize="" style={{}}  />
                    ) : volume > 0.5 ? (
                      <MdVolumeUp className="hudicon" fontSize="" style={{}}  />
                    ) : (
                      <MdVolumeUp className="hudicon" fontSize="" style={{}}  />
                    )}
                  </button>
  
        </div>
        
        </div>
      );
    }
  );
  
  Controls.propTypes = {
    onSeek: PropTypes.func,
    onSeekMouseDown: PropTypes.func,
    onSeekMouseUp: PropTypes.func,
    onDuration: PropTypes.func,
    onRewind: PropTypes.func,
    onPlayPause: PropTypes.func,
    onFastForward: PropTypes.func,
    onVolumeSeekDown: PropTypes.func,
    onChangeDispayFormat: PropTypes.func,
    onPlaybackRateChange: PropTypes.func,
    onToggleFullScreen: PropTypes.func,
    onMute: PropTypes.func,
    playing: PropTypes.bool,
    light: PropTypes.bool,
    played: PropTypes.number,
    elapsedTime: PropTypes.string,
    totalDuration: PropTypes.string,
    muted: PropTypes.bool,
    playbackRate: PropTypes.number,
  };
  




  // const Completionist = () => <div style={{}}>
  //  {FrontImage ? (
  //           <GatsbyImage
  //             image={FrontImage}
  //             alt={frontmatter.title + " - Featured image"}
  //             className="featured-image1 layer1"
  //             placeholder="blurred"
  //             loading="eager"
  //             // layout="constrained"
  //             style={{}}
  //           />

  //         ) : (
  //           <StaticImage className="featured-image1 layer1" src="../../static/assets/default-og-image.jpg" alt="Default Image" style={{position:'relative', zIndex:'',}} />
  //         )}

  // </div>

  
  return (
    
    <Layout className="page">
<CustomBox style={{}}>

{frontmatter.scrollable ? (
  <Helmet>
  <body id="body" className="blogpost scroll" style={{}} />
</Helmet>
) : (
  <Helmet>
  <body id="body" className="blogpost" style={{}} />
</Helmet>
  )}



      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        
        image={ siteUrl + getSrc(frontmatter.featuredImage) }

        article={true}
      />







<div id="top"></div>

{showNav ? (
  <div className="spacer" style={{height:'70px', border:'0px solid yellow'}}></div>
      ) : (
        ""
      )}





<div className="pagemenu" style={{position:'fixed', bottom:'20px', zIndex:'10', left:'1vw', right:'', display:'flex', justifyContent:'center', width:'auto', maxWidth:'80vw', margin:'0 auto', gap:'5vw',	background:'rgba(0, 0, 0, .9)', padding:'', border:'1px solid #666', borderRadius:'12px', textShadow:'0 1px 1px rgba(0, 0, 0, .7)', fontSize:'clamp(2rem, 3vw, 3rem)', verticalAlign:'center' }}>

<div className="menusnapp" style={{display:'flex', gap:'10px', padding:'1vh 1vw', alignItems:'center'}}>
{frontmatter.scrollable ? (
  <AnchorLink to="#top" style={{cursor:'pointer', height:'2vh'}}><RiArrowUpFill style={{cursor:'pointer', color:'#999'}} /></AnchorLink>
) : (
""
  )}
{(previous || next) && <Pagination {...props} />}
</div>

{isMobile ? 

      <div style={{display:'flex', gap:'10px', padding:'1vh 1vw'}}>

{frontmatter.scrollable ? (
  <AnchorLink to="#top" aria-label="Return To TOP" style={{cursor:'pointer', marginTop:'2vh'}}><RiArrowUpFill style={{cursor:'pointer', color:'#999',}} /></AnchorLink>
) : (
""
  )}
        <button onClick={resizeDesk} aria-label="Expand/Collapse menu" style={{cursor:'pointer', padding:'0 0 0 0', color:'#999'}}><RiMenuUnfoldFill />
        </button>
        </div>

       :

      <div style={{display:'flex', gap:'2vw', padding:'1vh 1vw'}}>
        <button onClick={resizeMobile} aria-label="Expand/Collapse menu" style={{cursor:'pointer', padding:'0', color:'#999'}}><RiCloseCircleFill /> 
        </button>
        </div>
    }
</div>





{CustomControls ? (
         <Controls
         ref={controlsRef}
         onPlayPause={handlePlayPause}
         playing={playing}
         played={played}
         onMute={handleMute}
         muted={muted}
       />
       
          ) : (
   ""
          )}

        

{frontmatter.scrollable ? (
<div style={{width:'100vw', height:'10vh', position:'fixed', zIndex:'2', top:'82vh', border:'0px solid yellow', textAlign:'center', animation:'poof 1.4s forwards', animationDelay:'4s'}}>
  <div style={{marginTop:'', background:'rgba(9, 9, 10, 0.866)', width:'20vw', padding:'1vh 2vw', margin:'0 auto', borderRadius:'10px', color:'#fff',}}>SCROLL DOWN</div>
</div>
) : (
""
  )}




<div className="wrap-element effects" style={{aspectRatio:'16/9', minHeight:'300px'}}>


{/* <GatsbyImage
        image={FrontImage}
        alt={frontmatter.title + " - Featured image"}
        className="featured-image1 layer1"
        placeholder="blurred"
        loading="eager"
        // layout="constrained"
        style={{position:'absolute', top:'0', zIndex:'0', width:'100vw', minHeight:'300px'}}
      /> */}



{YouTube ? (

<div>
{FrontImage ? (


<GatsbyImage
image={FrontImage}
alt={frontmatter.title + " - Featured image"}
className="featured-image1 layer1"
placeholder="blurred"
loading="eager"
// layout="constrained"
style={{position:'absolute', top:'0', zIndex:'0', width:'100vw', minHeight:'300px'}}
/>

    ) : (
      ""
    )}

</div>
    ) : (

<div className="imageonly">
{FrontImage ? (


      <GatsbyImage
        image={FrontImage}
        alt={frontmatter.title + " - Featured image"}
        className="featured-image1 layer1"
        placeholder="blurred"
        loading="eager"
        // layout="constrained"
        style={{position:'relative', top:'0', zIndex:'0', minHeight:'300px'}}
      />

    ) : (
      ""
    )}

</div>

    )}


{/* { NftDrop ? (
  
<div style={{ width:'100vw', height:'',  top:'0', zIndex:'-2', border:'0px solid red', paddingBottom:'', margin:'0 auto', display:'flex', flexDirection:'column', justifyContent:'center'}}>

<div className="countdown" style={{display:'flex', alignSelf:'center', fontSize:'540%', textAlign:'center', filter: 'drop-shadow(10px 0px 10px #000)', textShadow:'1px 1px 0px #000', border:'0px solid', width:'100%', height:'', padding:'0 0', borderRadius:'12px', flexDirection:'column' }}>
<Countdown date={NftDrop} >
<Completionist />
</Countdown>
</div> */}




{YouTube ? (
  <div>


{ Suggestion1 ? (
<div>

            <ReactPlayer
              allow="autoplay"
              ref={playerRef}
              style={{position:'asbolute', zIndex:''}}
              width="100%"
              height="100%"
                url={[iframeUrl, Suggestion1, Suggestion2, Suggestion3]}
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
                    sameSite: "none",
                    crossorigin: "anonymous",
                  },
                },
                  youtube: {
                    playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute, loop:YoutubeLoop }
                  }
              }}
              playIcon={
                <div style={{position:'absolute', background:'#111', height:'100vh', width:'100%', zIndex:'', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'top', justifyContent:'center', color:'#fff' }}>
             
                <img className="homepage-bg" src={iconimage} width="250px" height="150px" alt="MemeGenes" style={{ width:'', margin:'80px auto 0 auto', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important', position:'relative', top:''}} />
                <div style={{position:'relative', right:'0', top:'-8vh', display:'', fontSize:'clamp(1.3rem, 2vw, 3rem)'}}>
                  Click to play
                </div>
            
          
            
            <div style={{fontSize:'clamp(1rem, 2.8vw, 3.8rem)', margin:'0', padding:'0 5%', maxWidth:'800px'}}>
               {frontmatter.bumpertext ? (
              <h3>{frontmatter.bumpertext}</h3>
                    ) : (
              <h3>{frontmatter.title}</h3>
                )}
            </div>
            
            
            <br /><br /><br /><br />
                </div>
            }
            
            />
      <div className="youtubeblockertop" style={{position:'absolute', display:'block', background:'', height:'58px', width:'100%', zIndex:'0', top:'0', right:'0', textAlign:'center', padding:'12px',
            background:'#000',
            animation:'fadeout 4s forwards', animationDelay:'6s', border:'0px solid yellow'
          }}>MemeGenes.com</div>
  </div>
  ) : (
    <div>
  <ReactPlayer
    allow="autoplay"
    ref={playerRef}
    style={{position:'absolute', top:'0', zIndex:'', minHeight:'300px',}}
    width="100%"
    height="100%"
      // url={[iframeUrl, Suggestion2, Suggestion3]}
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
          sameSite: "none",
          crossorigin: "anonymous",
        },
      },
      youtube: {
        playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute, loop:YoutubeLoop }
      },
    }}
    playIcon={
      <div style={{position:'absolute', background:'#111', height:'100vh', width:'100%', zIndex:'', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'top', justifyContent:'center', color:'#fff' }}>
   
      <img className="homepage-bg" src={iconimage} width="250px" height="150px" alt="MemeGenes" style={{ width:'', margin:'80px auto 0 auto', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important', position:'relative', top:''}} />
      <div style={{position:'relative', right:'0', top:'-8vh', display:'', fontSize:'clamp(1.3rem, 2vw, 3rem)'}}>
        Click to play
      </div>
  

  
  <div style={{fontSize:'clamp(1rem, 2.8vw, 3.8rem)', margin:'0', padding:'0 5%', maxWidth:'800px'}}>
     {frontmatter.bumpertext ? (
    <h3>{frontmatter.bumpertext}</h3>
          ) : (
    <h3>{frontmatter.title}</h3>
      )}
  </div>
  
  
  <br /><br /><br /><br />
      </div>
  }
  
  />
   <div className="youtubeblockertop" style={{position:'absolute', display:'block', background:'', height:'58px', width:'100%', zIndex:'0', top:'0', right:'0', textAlign:'center', padding:'12px',
            background:'#000',
            animation:'fadeout 4s forwards', animationDelay:'6s', border:'0px solid yellow'
          }}>MemeGenes.com</div>
</div>
    )}


  </div>
 ) : (
  ""
)}
  
  
  
  {UnderlayImage ? (
              <GatsbyImage
                image={UnderlayImage}
                alt={frontmatter.title + " - image"}
                className="mcboaty1"
                style={{height:'auto', width:'100%', maxHeight:'100%', overflow:'hidden', position:'absolute', left:'0', right:'0', bottom:'0', top:'0', zIndex:'0',
               objectFit:'cover', border:'0px solid red !important', background:'transparent',}}
              />
              
            ) : (
              ""
            )}
  
            
  
  
  
{/*   
   {Suggestion1 ? (
              <div style={{position:'absolute', top:'0', left:'', bottom:'', zIndex:'', maxWidth:'100vw', height:''}}>
              <YouTubed />
              </div>
         
            ) : (
              ""
            )} */}
  
  
  
  
  
  
  {/*  SPECIAL CONTENT */}
  
  {ContentinVideo ? (
    <div id="contentvideo"
          className="blog-post-content effects" style={{ fontSize:'1.1rem', textAlign:'left', padding:'', margin:'0 auto', color:'inherit !important', border:'0px solid transparent', position:'absolute', bottom:'0', left:'0', top:'0', right:'0', zindex:'-1', maxHeight:'100vh', borderBottom:'0px solid', }}
          dangerouslySetInnerHTML={{ __html: html }}
          
        >
          
        </div>
   ) : (
    ""
  )}
  
  
          
  {Svg ? (
    <AddSvg />
       ) : (
         ""
         )}
  
  
  
  
  
          </div>


          

    


    



 {/* ****************Page Content BELOW**************** */}



     <div className="" style={{width:'100%', height:'', maxWidth:'1024px', margin:'0 auto 0 auto', }}>


     {/* {Suggestion1 ? (
            <ShowSuggestion style={{position:'relative', top:'', zIndex:'0',}} />
       
          ) : (
            ""
          )} */}




      

<article className="blog-post" style={{marginTop:'0',}}>
        {YouTube2 ? (
            <Iframer3 />
       
          ) : (
            ""
          )}
{/* ((((((((((body content)))))))))) */}
{frontmatter.scrollable ? (

<div>
{ShareThis ? (
<header style={{ height:'', display:'grid', placeContent:'center'}}>
  <div id="sharethis" style={{width:'auto', height:'', padding:'0', display:'grid', placeContent:'center', border:'0px solid'}}>
  <ShareSocial style={{}} />
  </div>

  <div className="article-header" style={{textAlign:'center', paddingTop:'1rem', height:'auto', color:''}}>
            <h1 className="headline" style={{fontSize:''}}>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
           Posted: <TimeAgo date={frontmatter.date} style={{color:''}} />
          </div>
  </header>
            ) : (
              <header style={{ height:'', display:'grid', placeContent:'center'}}>
                <div className="article-header" style={{textAlign:'center', paddingTop:'1rem', height:'auto', color:''}}>
            <h1 className="headline" style={{fontSize:''}}>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
           Posted: <TimeAgo date={frontmatter.date} style={{color:''}} />
          </div>
                </header>
            )}


  <div className="panel" style={{padding:'0 0', borderTop:'0px solid', margin:'0 0', textAlign:'center', fontSize:'1.5rem', minWidth:'50%', width:'100%', maxWidth:'', border:'0px solid yellow', borderRadius:'12px'}}>
      <div
        className="blog-post-content bodycontent" style={{ fontSize:'clamp(1.2rem, 2.8vw, 1.8rem)', textAlign:'center', width:'100%', maxWidth:'', padding:'2vh 6% 10vh 6%', margin:'0 auto', color:'inherit !important'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />    
</div>
<GoBack />
</div>


) : (

  <div>
  {ShareThis ? (
    <header style={{ height:'', display:'grid', placeContent:'center'}}>
    <div id="sharethis" style={{width:'auto', height:'', padding:'0', display:'grid', placeContent:'center', border:'0px solid'}}>
    <ShareSocial style={{}} />
    </div>
    <div className="article-header" style={{textAlign:'center', paddingTop:'1rem', height:'auto', color:''}}>
            <h1 className="headline" style={{fontSize:''}}>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
           Posted: <TimeAgo date={frontmatter.date} style={{color:''}} />
          </div>
  </header>
              ) : (
                <header style={{ height:'', display:'grid', placeContent:'center'}}>
                <div className="article-header" style={{textAlign:'center', paddingTop:'1rem', height:'auto', color:''}}>
                <h1 className="headline" style={{fontSize:''}}>{frontmatter.title}</h1>
                {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
               Posted: <TimeAgo date={frontmatter.date} style={{color:''}} />
              </div>
              <GoBack />
      </header>
              )}
</div>
          )}

 </article>












{/* <AnchorLink className="" to="#sharethis" style={{position:'absolute', top:'0', zIndex:'60'}}>
                About Us 
              </AnchorLink> */}
{/* <div style={{position:'fixed', bottom:'20px', zIndex:'1',  left:'', right:'', display:'flex', justifyContent:'center', width:'', margin:'0 auto', gap:'20px',
textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 5px rgba(155,155,155,1))', color:'#fff', padding:'5px 10px', borderRadius:'12px',

 }}>
  
      {(previous || next) && <Pagination {...props} />}
      </div> */}







          

{Comments ? (

<div id="comments" style={{height:'', paddingBottom:'0',   display:'grid', placeContent:'center', maxWidth:'100vw', padding:'0', margin:'10vh auto'}}>
<CommentBox />



</div>
          ) : (


""

          )}
         


     
  




 {ShowOriginal ? (
      <div id="original" style={{height:'', margin:'10vh auto', paddingTop:'5vh',   display:'grid', placeContent:'center', border:'0px solid blue'}}>

{YouTube ? (
          <div  className="panel" style={{position:'relative', width:'100%', maxWidth:'800px', margin:'0 auto', textAlign:'center', display:'flex', flexDirection:'column', fontSize:'100%', borderRadius:'12px' }}>
<div style={{maxWidth:'90vw', width:'100%', height:'', maxHeight:'', padding:'0', position:'relative', bottom:'0', textAlign:'center', border:'0px solid blue', margin:'0 auto', borderRadius:'12px'}}>

                    {/* <Iframer2 /> */}
<a href={OriginalUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
 <div style={{display:'grid', placeContent:'center', fontWeight:'bold', padding:'1rem', fontSize:'2rem', width:'100%', height:'', border:'0px solid', borderRadius:'12px'}}>Support Our Video Sponsors

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
</div>
    ) : (
            ""
          )}


{/* <div className="panel legal" style={{textAlign: 'center', padding:'1rem',  justifyContent: 'center', fontSize: '.95rem', textDecoration:'none', maxWidth:'90vw'}}>
            Legal:<br />
            <Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link>
      <br /> <br />
    <div style={{display:'none', placeContent:'center'}}>
      <p style={{textAlign:'left'}}>
        <strong>*This is a parody website meant for education and entertainment purposes.</strong> <br /><br />
        All characters, and events portrayed in this production are fictitious or are being portrayed in a satirical manner.<br /><br />There is no identification with actual persons (living or deceased), <br />places, buildings, and/or products. There is no harm/insult intended or and none should be inferred. 
        <br /><br /> No celebrities were harmed.

        <br /><br />
        Video footage public youtube.com | Some imagery provided from <a rel="noopener noreferrer" href="https://www.flickr.com/photos/donkeyhotey/" target="_blank" >DonkeyHotey</a>
        </p>
    </div>
</div> */}









   






       























</div>







<GoBack />

      

      

<br/><br/><br/><br/><br/><br/>

   </CustomBox>

  
   <Footer />
  
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
        customcontrols
        clicktoplay
        youtubeautostart
        contentinvideo
        comments
        shareable
        isnftforsale
        bumpertext
        nftdrop
        svgzindex
        scrollable
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