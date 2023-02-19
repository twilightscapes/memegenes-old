/** @jsx jsx */
import { useState, useRef,forwardRef } from "react";
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { AiOutlineAudioMuted } from "react-icons/ai"
import Footer from "../components/footer"
import ScrollAnimation from 'react-animate-on-scroll'
import { IoShareOutline } from 'react-icons/io5'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import useSiteMetadata from "../hooks/SiteMetadata"
import ReactPlayer from 'react-player/lazy'
import { ImPlay,  } from "react-icons/im"
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"
import { MdVolumeOff } from "react-icons/md"
// import { MdVolumeDown } from "react-icons/md"
import { MdVolumeUp } from "react-icons/md"
import { RiArrowRightDownFill } from "react-icons/ri"
// import Popup from '../components/Popup'
// import GoogleMap from '../components/GoogleMap'
// import ContactInc from '../components/newssign'
// import Newsignup from "../components/newssign"
// import Section1 from "../pages/test2"

import styled from "styled-components"
import Social from "../components/social"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Layout from "../components/siteLayout"




const CustomBox = styled.div`

.container21 section{
  border:0px solid blue;
}

`



export const pageQuery = graphql`
query HomeQuery($id: String!) {
  site {
    siteMetadata {
      title
      titleDefault
      siteUrl
      description
      image
      twitterUsername
      companyname
      showfooter
      showInfo
      showCover
      showFeature
      showPosts
      showSocial
      showSkills
      showNav
      showPopup
      showDates
      showResume
      showSkills
    }
  }
  markdownRemark(id: {eq: $id}) {
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
      youtubestart
      youtubeend
      audiostart
      audiotitle
      audioend
      youtubemute
      youtubecontrols
      customcontrols
      youtubeautostart
      contentinvideo
      youtubeshoworiginal
      youtubersuggestion1
      youtubersuggestion2
      youtubersuggestion3
      clicktoplay
      bumpertext
      viewerwarning
      marate
      marating1
      marating2
      marating3
      marating4
      maratingtx1
      maratingtx2
      maratingtx3
      maratingtx4
      profTitle
      profText
      addressText
      addressText2
      skillsTitle
      skillsText
      svgzindex
      scrollable
      tagline
      featuredImage {
        publicURL
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      secondaryImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      underlayImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      cta {
        ctaText
        ctaLink
      }
      coverletter {
        coverText
        coverLink
      }
      portfolio {
        openText
        closeText
      }
      svgImage {
        relativePath
      }
    }
  }
  posts: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {template: {eq: "blog-post"}}}
    limit: 30
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "YYYY-MM-DD-HH-MM-SS")
          slug
          title
          youtubemute
          youtubeloop
          youtubecontrols
          customcontrols
          youtuber
          featuredImage {
            publicURL
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`




const HomePage = ({ data }) => {
  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const FrontImage = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""

    // const SvgUrl = frontmatter.svgImage
    // const SvgZindex = frontmatter.svgzindex

    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""


    const { companyname } = useSiteMetadata()
    const { siteUrl } = useSiteMetadata()
		

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart
    const SkillsText = frontmatter.skillsText
    const coverText = frontmatter.coverletter.coverText
    const { showNav } = useSiteMetadata()
    const { showInfo } = useSiteMetadata()
    const { showFeature } = useSiteMetadata()
    const { showPosts } = useSiteMetadata()
    const { showResume } = useSiteMetadata()
    const { showSocial } = useSiteMetadata()
    const { showSkills } = useSiteMetadata()
    const { showCover } = useSiteMetadata()
    const { showfooter } = useSiteMetadata()
    
// const CustomControls = frontmatter.customcontrols

// const ShowOriginal = frontmatter.youtubeshoworiginal
// const ShareThis = frontmatter.shareable
// const Comments = frontmatter.comments


const CustomControls = frontmatter.customcontrols
const Suggestion1 = frontmatter.youtubersuggestion1
const Suggestion2 = frontmatter.youtubersuggestion2
const Suggestion3 = frontmatter.youtubersuggestion3

const YoutubeLoop = frontmatter.youtubeloop

const ClickToPlay = frontmatter.clicktoplay

const iframeUrl = "https://www.youtube-nocookie.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=" + frontmatter.youtubeautostart + "&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=" + frontmatter.youtubeloop + "&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""


const ContentinVideo = frontmatter.contentinvideo
// const LiarLiar = frontmatter.liarliar

    const CtaLink = frontmatter.cta.ctaLink

    const { iconimage } = useSiteMetadata()
    
    const ProfText = frontmatter.profText
 

    // const openQuote = frontmatter.portfolio.openText
    // const closeQuote = frontmatter.portfolio.closeText
    

  //   const resizeMobile = () => {
  //     const elements = document.querySelectorAll('.boom');
  //     elements.forEach(el => el.style.width = '400px');
  //   }

  // const resizeDesk = () => {
  //   const elements = document.querySelectorAll('.boom');
  //   elements.forEach(el => el.style.width = '80%');
  // }


  let iframeFiltered;
if (Suggestion1) {
  iframeFiltered = [
    frontmatter.youtuber,
    frontmatter.youtubersuggestion1,
    frontmatter.youtubersuggestion2,
    frontmatter.youtubersuggestion3,
  ];
} else {
  iframeFiltered = frontmatter.youtuber;
}


  const Svg = frontmatter.svgImage
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }



  
  function AddSvg(){
    const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
    return (
      <object title="Animation" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'', height:'auto',  }} alt="Animation" ></object>
    )
  }





const YouTube = frontmatter.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

function Iframer() {
    

    // const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
    return (
      <div className="wrap-element effects" style={{aspectRatio:'', minHeight:'300px', width:'100vw', maxHeight:'90vh', overFlow:'hidden'}}>


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
{/* {FrontImage ? (


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
    )} */}

</div>
    ) : (

<div className="imageonly">
{/* {FrontImage ? (


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
    )} */}

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


{/* PURPLE */}
            <ReactPlayer
              allow="web-share"
              ref={playerRef}
              style={{position:'asbolute', zIndex:''}}
              width="100%"
              height="100%"
                // url={[iframeUrl, Suggestion1, Suggestion2, Suggestion3]}
              url={iframeFiltered}
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
                <div style={{position:'fixed',
                // backgroundColor:'var(--theme-ui-colors-bodyBg)',
                backgroundColor:'rgba(0,0,0,0.6)',
                 width:'100vw', height:'100%', minHeight:'40vh', maxHeight:'85vh', zIndex:'0', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'center', justifyContent:'center', 
                color:'var(--theme-ui-colors-text)', 
                color:'#ddd',
                fontFamily:'Verdana, Sans-Serif, System' }}>



<button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'', top:'50px', border:'0px  solid red', width:'100vw', background:'transparent', color:'', fontSize:'18px', textAlign:'center', display:'', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', border:'0px solid', borderRadius:'', padding:''}}>
                {/* // <div style={{position:'absolute', background:'#111', height:'100vh', width:'100vw', zIndex:'3', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'start', justifyContent:'center', color:'#fff', fontFamily:'Verdana, Sans-Serif, System' }}> */}
   
                {/* <img className="homepage-bg" src={iconimage} width="250px" height="150px" alt="MemeGenes" style={{ width:'', margin:'120px auto 0 auto', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important', position:'relative', top:''}} /> */}


                <div className="flex-items" style={{fontSize:'clamp(.6rem, 1.4vw, 2rem)', fontWeight:'bold', margin:'0 auto 0 auto', textTransform:'uppercase',}}>The following is rated: <strong>{frontmatter.marate}</strong></div>

<ul className="flex-container" style={{display:'flex', flexDirection:'row', gap:'1vh', justifyContent:'center', alignItems:'center',  textAlign:'left', margin:'0 auto', color:'#ddd', background:'rgba(0, 0, 0, .8)', width:'auto', maxWidth:'800px', height:'', border:'1px solid #222', borderRadius:'12px', padding:'2vh 5vw' }}>


{frontmatter.marate ? (
            <li className="flex-items" style={{display:'grid', placeContent:'center', width:'', height:'', aspectRatio:'1/1', padding:'0 20px', border:'6.5px solid #fff', margin:'0 auto 0 auto 0', fontSize:'clamp(4rem, 15vw, 5rem)', fontFamily:'Verdana, Sans-Serif, System', fontWeight:'800'}}>{frontmatter.marate}</li>
            ) : (
              <li className="flex-items" style={{display:'grid', placeContent:'center', width:'', height:'', aspectRatio:'1/1', padding:'0 20px', border:'6.5px solid #fff', margin:'0 auto 0 auto 0', fontSize:'clamp(4rem, 15vw, 5rem)', fontFamily:'Verdana, Sans-Serif, System', fontWeight:'800'}}>PG</li>
            )}





<li style={{display:'flex', flexDirection:'column', position:'relative', left:'', top:'', gap:'.8vh', justifyContent:'space-around', alignContent:'', alignItems:'start', border:'0px solid red', fontSize:'clamp(.5rem, 1.2vw, 2rem)'}}>


{frontmatter.maratingtx1 ? (
            <li className="flex-items" style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'end'}}><strong style={{ }}>
            {frontmatter.marating1}</strong> {frontmatter.maratingtx1}</li>
            ) : (
              ""
            )}


{frontmatter.maratingtx2 ? (
            <li className="flex-items" style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'end'}}><strong style={{ }}>
{frontmatter.marating2}</strong> {frontmatter.maratingtx2} </li>
            ) : (
              ""
            )}


{frontmatter.maratingtx3 ? (
         <li className="flex-items" style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'end'}}><strong style={{ }}>
{frontmatter.marating3}</strong> {frontmatter.maratingtx3} </li>   
            ) : (
              ""
            )} 


{frontmatter.maratingtx4 ? (
       <li className="flex-items" style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'end'}}><strong style={{ }}>
{frontmatter.marating4}</strong> {frontmatter.maratingtx4} </li>           
            ) : (
              ""
            )} 



</li>

</ul>
<div className="flex-items" style={{position:'relative', right:'', top:'', display:'', fontSize:'clamp(.6rem, 1.4vw, 2rem)', fontWeight:'bold', textTransform:'uppercase', textAlign:'center'}}>{frontmatter.viewerwarning}</div>


<div style={{display:'grid', placeContent:'center', position:'relative', zindex:'1', fontWeight:'bold', padding:'1vh 0', fontSize:'clamp(.6rem, 1.4vw, 2rem)', width:'100%', maxWidth:'25vw', height:'', border:'0px solid', borderRadius:'12px', background:'linear-gradient(180deg, rgba(24, 23, 30, 0.2) 1%, rgba(0, 0, 0, .7) 99%)', margin:'0 auto 0 auto', opacity:'.99', textShadow:'2px 2px 2px black', color:'#fff' }}>
<ImPlay style={{margin:'0 auto', width:'50%', fontSize:'clamp(2rem, 4.4vw, 3rem)', filter:'drop-shadow(0px 0px 12px #fff',}} />
Click to play
</div>






<div style={{fontSize:'clamp(1rem, 2vw, 2.5rem)', margin:'5vh 0 0 0', padding:'0 10px', maxWidth:'1000px'}}>
{frontmatter.bumpertext ? (
<h3>{frontmatter.bumpertext}</h3>
) : (
<h3>{frontmatter.title}</h3>
)}
</div>
</button>

<button
className="" 
style={{
color:'#ddd',
width:'100vw', 
height:'100vh',
display:'grid',
placeContent:'center',
position:'fixed',
top:'0',left:'0',right:'0',bottom:'0',
zindex:'1'
}}
></button>

            </div>
            }
            
            />
      {/* <div className="youtubeblockertop" style={{position:'absolute', display:'block', height:'58px', width:'100%', zIndex:'0', top:'0', right:'0', textAlign:'center', padding:'12px',
            background:'#000',
            animation:'fadeout 4s forwards', animationDelay:'6s', border:'0px solid yellow'
          }}>MemeGenes.com</div> */}
  </div>
  ) : (
    ""
  
)}
  

  
  
  {UnderlayImage ? (
              <GatsbyImage
                image={UnderlayImage}
                alt={frontmatter.title + " - image"}
                className="mcboaty1"
                style={{height:'auto', width:'', maxHeight:'100vh', overflow:'hidden', position:'absolute', left:'0', right:'0', bottom:'0', top:'', zIndex:'0',
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
    )
  }

  


  const YouTube2 = frontmatter.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend
  const AudioTitle = frontmatter.audiotitle

  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtuber2
    return (
<div style={{marginTop:'10px', position:'relative', zIndex:'1',
display:'flex', justifyContent:'center', maxHeight:'80px !important', height:'150px', border:'0px solid yellow', width:'100%'
}}>





<ReactPlayer
          allow="web-share"
          className='react-player67'
          url={iframeUrl3}
          width="250px"
          height="100%"
          style={{
            border:'0px solid red'
        }}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'', top:'', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
    

          <div className="popped" style={{display:'flex', width:'80%', minWidth:'300px', margin:'0 auto', fontWeight:'bold', padding:'.2rem .4rem', fontSize:'2rem', background:'rgba(0,0,0,0.30)', borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
            
            <div style={{fontSize:'.8rem', fontWeight:'', width:'100%', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
            I just listened to:<br />



            <div style={{fontSize:'1rem', fontWeight:'bold', marginTop:'5px' }}>{ AudioTitle }</div>
      
            <div style={{display:'flex', justifyContent:'center', marginTop:'5px'}}>
            <div><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000),', color:'#06f21a'}} /></div> &nbsp; <div>Click to listen </div>
            
            </div>
            </div>

          </div>
         
          </div>
          </button>}
   
            light="../assets/transparent.png"
          />
     </div>




    )
  }




  const Playing  = useState(true);

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

  
  

   


<div style={{position:'fixed', height:'', width:'100vw', zIndex:'3', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'', justifyContent:'', color:'var(--theme-ui-colors-text)', fontFamily:'Verdana, Sans-Serif, System' }}>




<button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'', top:'70px', border:'0px  solid red', width:'100vw', height:'100vh', backgroundColor:'var(--theme-ui-colors-bodyBg)', color:'', fontSize:'', textAlign:'center', display:'', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', border:'0px solid', borderRadius:'', padding:'2vh 0 0 0'}}>






          {/* // <div style={{position:'absolute', background:'#111', height:'100vh', width:'100vw', zIndex:'3', top:'0', right:'0', textAlign:'center', display:'grid', placeContent:'start', justifyContent:'center', color:'#fff', fontFamily:'Verdana, Sans-Serif, System' }}> */}

          {/* <img className="homepage-bg" src={iconimage} width="250px" height="150px" alt="MemeGenes" style={{ width:'', margin:'120px auto 0 auto', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important', position:'relative', top:''}} /> */}



          <div className="flex-items" style={{fontSize:'clamp(.6rem, 1.4vw, 2rem)', fontWeight:'bold', margin:'0 auto 0 auto', textTransform:'uppercase',}}>The following content is rated: </div>

          <ul className="flex-container" style={{display:'flex', flexDirection:'row', gap:'1vh', justifyContent:'center', alignItems:'center',  textAlign:'left', margin:'0 auto', color:'#ddd', background:'rgba(0, 0, 0, .8)', width:'auto', maxWidth:'800px', height:'', border:'1px solid #222', borderRadius:'12px', padding:'2vh 5vw' }}>


<li className="flex-items" style={{display:'grid', placeContent:'center', width:'', height:'', aspectRatio:'1/1', padding:'0 1vw', border:'6.5px solid #fff', margin:'0 auto 0 auto 0', fontSize:'clamp(3.5rem, 13vw, 5rem)', fontFamily:'Verdana, Sans-Serif, System', fontWeight:'800'}}><strong style={{}}>MA</strong></li>


<li style={{display:'flex', flexDirection:'column', position:'relative', left:'', top:'', gap:'.8vh', justifyContent:'space-around', alignContent:'', alignItems:'start', border:'0px solid red', fontSize:'clamp(.5rem, 1.2vw, 2rem)'}}>

<li className="flex-items" style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'end'}}><strong style={{border:'2px solid', padding:'.8em', aspectRatio:'1/1', overFlow:'', marginRight:'1.5vw', textAlign:'center'}}>
  {frontmatter.marating1}</strong> {frontmatter.maratingtx1}</li>

  <li className="flex-items" style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'end'}}><strong style={{border:'2px solid', padding:'.8em', aspectRatio:'1/1', overFlow:'', marginRight:'1.5vw', textAlign:'center'}}>
  {frontmatter.marating2}</strong> {frontmatter.maratingtx2} </li>

  <li className="flex-items" style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'end'}}><strong style={{border:'2px solid', padding:'.8em', aspectRatio:'1/1', overFlow:'', marginRight:'1.5vw', textAlign:'center'}}>
  {frontmatter.marating3}</strong> {frontmatter.maratingtx3} </li>

  <li className="flex-items" style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'end'}}><strong style={{border:'2px solid', padding:'.8em', aspectRatio:'1/1', overFlow:'', marginRight:'1.5vw', textAlign:'center'}}>
  {frontmatter.marating4}</strong> {frontmatter.maratingtx4} </li>

</li>

</ul>
<div className="flex-items" style={{position:'relative', right:'', top:'', display:'', fontSize:'clamp(.6rem, 1.4vw, 2rem)', fontWeight:'bold', textTransform:'uppercase', textAlign:'center'}}>Viewer Discretion Strongly Advised</div>


         <div style={{display:'grid', placeContent:'center', position:'relative', zindex:'1', fontWeight:'bold', padding:'1vh 0', fontSize:'clamp(.6rem, 1.4vw, 2rem)', width:'100%', maxWidth:'25vw', height:'', border:'0px solid', borderRadius:'12px', background:'linear-gradient(180deg, rgba(24, 23, 30, 0.2) 1%, rgba(0, 0, 0, .7) 99%)', margin:'0 auto 0 auto', opacity:'.99', textShadow:'2px 2px 2px black', color:'#fff' }}>
<ImPlay style={{margin:'0 auto', width:'50%', fontSize:'clamp(2rem, 4.4vw, 3rem)', filter:'drop-shadow(0px 0px 12px #fff',}} />
Click to play
</div>




      

<div style={{fontSize:'clamp(1rem, 2vw, 2.5rem)', margin:'5vh 0 0 0', padding:'0 10px', maxWidth:'1000px'}}>
{frontmatter.bumpertext ? (
<h3>{frontmatter.bumpertext}</h3>
    ) : (
<h3>{frontmatter.title}</h3>
)}
</div>


      
      </button>

      <button
        onClick={onPlayPause}
        className="" 
        style={{
         color:'#ddd',
         width:'100vw', 
         height:'100vh',
         display:'grid',
         placeContent:'center',
         position:'fixed',
         top:'0',left:'0',right:'0',bottom:'0',
         zindex:'1'
        }}
      ></button>

      </div>




 )}
 {/* end playing check */}
  
 
  
  
        
  
  
  <div ref={ref} className="controlsbox" style={{width:'', height:'', border:'0px solid red', }}>
  
        {/* <div className="contact" style={{position:'', bottom:'', zIndex:'',  left:'0', right:'0', display:'flex', justifyContent:'center', width:'200px', margin:'0 auto'}}>
    <Link state={{modal: true}}  to="/contact/" className="navbar-item  button fire" style={{margin:'', textDecoration:'none'}}>Contact Me</Link>
  </div> */}


<button
        onClick={onPlayPause}
        className="" 
        style={{
         color:'#ddd',
         width:'100vw', 
         height:'85vh',
         display:'grid',
         placeContent:'center',
         position:'absolute',
         top:'0',left:'0',right:'0',bottom:'0',
         zindex:'1'
        }}
      ></button>


                  <button
                    onClick={onPlayPause}
                    className="controls panel" 
                    style={{
                      backgroundColor:'rgba(0,0,0, 0.6)',
                      color:'#999',
                      borderRadius:'8px', overFlow:'hidden'
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
                    className="controls panel"
                    style={{
                      backgroundColor:'rgba(0,0,0, 0.6)',
                      color:'#999',
                      borderRadius:'8px', overFlow:'hidden'
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

  


     
  return (

    // TOP OF HOME
    <CustomBox style={{}}>
    <Layout>



{frontmatter.scrollable ? (
  <Helmet>
  <body id="body" className="homepage scroll" style={{}} />
</Helmet>
) : (
  <Helmet>
  <body id="body" className="homepage" style={{}} />
</Helmet>
  )}


       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
   image={ siteUrl + getSrc(frontmatter.featuredImage) }
      />


{/* <div id="top" className="container22" style={{
 	overflowY: 'scroll',
   overflowX: 'hidden',
  width:'100vw'
}}> */}





{showNav ? (
  <div id="top" className="spacer" style={{height:'70px', border:'0px solid yellow'}}></div>
      ) : (
        ""
      )}


{CustomControls ? (
    <Controls
    ref={controlsRef}
    onPlayPause={handlePlayPause}
    playing={playing}
    played={played}
    onMute={handleMute}
    muted={muted}
    style={{positon:'absolute', zIndex:'-1'}}
  />
  
     ) : (
""
     )}









{showPosts ? (
  <section id="showPosts" style={{marginBottom:'50vh'}}>
  <div style={{position:'relative', background:'none', maxHeight:'77vh', overflow:'', width:'100vwye'}}>
<ScrollAnimation className="animate" animateIn="bounceInDown" animateOut="" initiallyVisible={true} animateOnce={false} animatePreScroll={false} > 
<div className="horizontal-scroll panels sitegrad movingBG" style={{}}>
    <div className="" style={{height:'50%', paddingTop:'50%'}}></div>
                         <BlogListHome data={posts} />
      {/* <div style={{textAlign:'center', display:'grid', placeContent:'center', padding:'20% 0 0 0'}}><Link className="button " to="/archive/2" style={{textDecoration:'none', color:'inherit', textAlign:'center'}}>View More </Link>
      </div> */}
</div>
</ScrollAnimation>
</div>
</section>
      ) : (
        ""
      )}
















{/* show feature */}
{showFeature ? (   

<ScrollAnimation className="animate" animateIn="bounceInUp" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={true} > 

<section id="feature" order="1" name="feature" className="print" style={{ display:'', margin:'0 0 10vh 0', padding:'0', position:'relative'}}>





  <article>

  <div className='stack-layout' style={{ display:'flex',justifyContent:'center', position:'relative', top:'0', zIndex:'0', height:'85vh', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>



{FrontImage ? (
            <GatsbyImage
              image={FrontImage}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image12 layer1"
              style={{height:'100vh', maxHeight:'100vh', width:'', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain', paddingTop:'20px', overflow:'hidden',}}
            />





          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}








 



{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}

         

        


      </div>
  </article>




</section>


</ScrollAnimation>
) : (
  ""
)}

{/* end show feature */}























<div id="intro" name="container21" className="container21" style={{position:'relative', zIndex:'1', paddingTop:'0', marginTop:'0'}}>


{/* {showFeature ? (
<div>
{Image ? (
  <GatsbyImage
    image={Image}
    alt={frontmatter.title + " - Featured image"}
    className=""
    placeholder="blurred"
    loading="eager"
    layout="constrained"
    style={{height:'auto', width:'100vw', maxHeight:'70vh', position:'relative', top:'', zIndex:'0', objectFit:'', overflow:'', border:'0px solid red !important'}}
  />
  
) : (


  <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'70vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />

)}
</div>
      ) : (
        ""
      )} */}

















{/* show Info */}

{showInfo ? (



<section className="vertical" id="info" order="2" name="info" style={{ display:'', height:'100%',  minHeight:'100vh', position:'relative', zIndex:'0', overflow:'visible', padding:'0 0 10vh 0', border:'0px solid blue',}}>



  <article className="" style={{ margin:'0 0 0 0'}}>
<div id="profiletop" className="flexbutt" style={{display:'flex', gap:'30px', justifyContent:'center', alignItems:"center", margin:'0 0',
  padding:'0 4% 0 4%', borderRadius:'0 0 10px 10px',}}>



  {/* <div className="flexcheek mob print nameblock " style={{marginTop:'', padding:'1rem 2rem 0 2rem', maxHeight:'', fontSize:'clamp(1rem, 1.4vw, 3.2rem)', textShadow:'0 2px 3px #000', color:'#fff', 
  background:'rgba(0,0,0,0.70)', 
  backdropFilter:'blur(12px)',
  borderRadius:'10px'}}>


  <h1 className="title1" style={{fontSize:'clamp(2rem, 2.5vw, 3.2rem)'}}>{frontmatter.profTitle}</h1>

            <h2 className="tagline1">
              {frontmatter.tagline}
            </h2>
            
            <div
            style={{paddingBottom:'2rem'}}
              className="description"
              dangerouslySetInnerHTML={{ __html: ProfText }}
            />
            </div> */}
       
  
    


          
            <div className="flexcheek mob print" style={{marginTop:'', padding:'1rem 2rem 0 2rem', maxHeight:'', fontSize:'clamp(1rem, 1.4vw, 3.2rem)', textShadow:'0 2px 3px #000', color:'#fff', 
  background:'rgba(0,0,0,0.70)', 
  backdropFilter:'blur(12px)',
  borderRadius:'10px'}}>
  
     
            <h2 className="tagline1">
              {frontmatter.tagline}
            </h2>


            
{frontmatter.addressText}
<br />
{frontmatter.addressText2}

         
  


<Link state={{modal: true}} to="/contact" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', borderRadius:'8px', maxWidth:'300px', padding:'1rem', display:'grid', placeContent:'center' }}>{frontmatter.cta.ctaText}</Link>

<br />
{showCover ? (
  <Link to={frontmatter.coverletter.coverLink} className="print" style={{color:'', fontSize:'', margin:'5px auto 0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>{coverText}</Link>
) : (
  ""
)}

{showSocial ? (
           <Social />
          ) : (
            ""
          )}



{ !YouTube2 ? (
            ""
       
          ) : (
            
            <Iframer3 />
            
          )}

          <br />
            </div>




            <div className="flexcheek mob2 print" style={{position:'', maxHeight:'', overflow:'', marginBottom:'', paddingTop:'2vh', borderRadius:'0 0 10px 10px',
      }}>





{SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="drop-shadow avatar-frame"
              style={{ maxWidth:'', height:'45vh', maxHeight:'45vh', position:'relative',  top:'', objectFit:'contain', backgroundSize:'contain', marginBottom:'0', border:'2rem'}}
            />
          ) : (
            ""
          )}





  <div className="nameblock panel" style={{margin:'0 auto 0 auto', padding:'0 0 10px 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  border:'0px solid red', 
  maxWidth:'80%', paddingTop:'', 
  fontSize:'clamp(1rem, 1.4vw, 3.2rem)',
  background:'rgba(0,0,0,0.70)',
  backdropFilter:'blur(8px)',
  borderRadius:'10px',
  textShadow:'0 2px 7px #000',
  }} >

<span style={{marginTop:'10px', fontSize:'160%'}}>
  {/* {companyname}  */}
  Meme Gene</span>

</div>
</div> 
            
  

        


      

</div> 
</article>
</section>


) : (
  ""
)}


{/* end show Info */}









     
     
{/* <Popup>
 <Section1 />
</Popup>
<br /> */}












{/*  show Resume */}
{showResume ? (
  
<section className="vertical" id="resume" order="4" style={{ display:'', minHeight:'', overflow:'', margin:'5vh 0 0 0', position:'relative', border:'0px solid blue'}}>


<div className="toolbar noapp print" style={{display:'flex', flexDirection:'', gap:'', width:'', borderTop:'1px solid #777', borderBottom:'1px solid #777', justifyContent:'start', background:'rgba(24, 29, 31, 0.2)', borderRadius:'12px', padding:'5px 0 5px 0', }}>
<div className="keyboard" order="" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto', padding:'4px 0 0 0', lineHeight:'calc(2em + .4vw)'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Print:</span> &nbsp;<kbd>⌘</kbd> + <kbd>p</kbd> &nbsp;OR&nbsp; <kbd>Ctrl</kbd> + <kbd>p</kbd></div>
  <div className="keyboard" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'auto !important', margin:'0 auto', lineHeight:'calc(2em + .4vw)',}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Install:</span> &nbsp;<IoShareOutline style={{fontSize:'38px',}} />&nbsp;+&nbsp; 'Add to Home Screen'</div>
  </div>
<br />
<article className="hasapp"  style={{ display:'', height:'', overflow:'', margin:'0', position:'relative', fontSize:'clamp(1rem, 1.4vw, 3.2rem)',  background:'rgba(24, 29, 31, 0.7)',  backdropFilter:'blur(12px)', padding:'4%', borderRadius:'12px', color:'#fff'}}>

<div id="resumename" style={{display:'none', position:'relative', top:'', fontSize:'160%', padding:'0 0 2rem 0', textAlign:'left', width:'100%',}}>{companyname}<br />
{frontmatter.addressText}
<br />
{frontmatter.addressText2}
</div>
<ScrollAnimation className="animate" animateIn="bounceInUp" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={false} > 
<div id="" className="">

<span
          style={{  columnCount:'2',
            columnGap:'40px',
            columnWidth:'100%'}}
            className=""
            dangerouslySetInnerHTML={{ __html: html }}
          />
  
</div>
</ScrollAnimation>
<br />
<div className="toolbar noapp print" style={{display:'flex', flexDirection:'', gap:'', width:'', borderTop:'1px solid #777', borderBottom:'1px solid #777', justifyContent:'start', background:'rgba(24, 29, 31, 0.2)', borderRadius:'12px', padding:'5px 0 5px 0', }}>
<div className="keyboard" order="" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto', padding:'4px 0 0 0', lineHeight:'calc(2em + .4vw)'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Print:</span> &nbsp;<kbd>⌘</kbd> + <kbd>p</kbd> &nbsp;OR&nbsp; <kbd>Ctrl</kbd> + <kbd>p</kbd></div>
  <div className="keyboard" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'auto !important', margin:'0 auto', lineHeight:'calc(2em + .4vw)',}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Install:</span> &nbsp;<IoShareOutline style={{fontSize:'38px',}} />&nbsp;+&nbsp; 'Add to Home Screen'</div>
  </div>

</article>





</section>
) : (
  ""
)}

{/* end show Resume */}

{/*  show Skills */}
{showSkills ? (
   
<section className="print vertical" id="skills" order="5" style={{ width:'100%', overflow:'hidden', position:'relative',  justifyContent:'center', alignContent:'center', margin:'0 auto', textAlign:'center', borderRadius:'8px', minHeight:'', maxWidth:'', padding:'1rem', display:'', placeContent:'', border:'0px solid green', }}>
<br />
<ScrollAnimation className="animate" animateIn="bounceInUp" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={false} >
<div className="flexbutt" style={{display:'flex', justifyContent:'center', width:'', columnGap:'50px', border:'0px solid blue',  background:'rgba(24, 29, 31, 0.7)',  backdropFilter:'blur(12px)', padding:'4%', borderRadius:'12px', color:'#fff' }} dangerouslySetInnerHTML={{ __html: SkillsText }}>
</div>
</ScrollAnimation>
  </section>

          ) : (
            ""
          )}
{/* end show Skills */}





 </div>{/* end scooch */}




 {/* <GoogleMap /> */}


<div id="bottom" className="usability" style={{position:'relative', zIndex:'', bottom:'0', display:'flex', placeSelf:'center', placeContent:'center', width:'100%', margin:'0 auto', alignContent:'center', alignItems:'center', justifyContent:'center', border:'0px solid blue', textAlign:'center'}}>
<div id="branding" style={{position:'relative', left:'0', bottom:'5px', fontSize:'90%'}}><a href="https://memegenes.com" target="_blank" rel="noreferrer">MemeGenes.com</a></div>
</div>
<br/><br/><br/>

{/* show footer */}
{showfooter ? (
  <ScrollAnimation className="animate" animateIn="bounceInUp" animateOut="" initiallyVisible={true} animateOnce={true} animatePreScroll={false} > 
<Footer className="vertical" />
</ScrollAnimation>
) : (
  ""
)}
{/* end show footer */}

    </Layout>
    </CustomBox>
  )
}

export default HomePage