import * as React from "react"
// import React, { useState, useRef } from "react";
import { Link, graphql } from "gatsby"
import ReactPlayer from 'react-player/lazy'
import Layout from "../components/siteLayout"
import Footer from "../components/footer";
import Seo from "../components/seo"
import { ImPlay } from "react-icons/im"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
// import Controls from "../components/Controls";
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
import BlogListHome from "../components/blog-list-home"
import Newsignup from "../components/newssign"
import SocialMe from "../components/share"
// import Details from "../components/equipment-list"
// import Contact from "../components/Contact-inc"

// import FrontLoader from "../../static/assets/grid-loader.svg"
// import { RiArrowRightSLine } from "react-icons/ri"
import useSiteMetadata from "../hooks/SiteMetadata"
// import { AnchorLink } from "gatsby-plugin-anchor-links";
// import BackgroundImage from 'gatsby-background-image'
// import Panel1 from "../components/panel1"
// import Panel2 from "../pages/shawshank-trailer"



// import TimeAgo from 'react-timeago'
// import Countdown from 'react-countdown'

export const pageQuery = graphql`
query HomeQueryHomeQuery($id: String!) {
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
      showFeature
      showPosts
      showInfo
      youtuber
      youtubestart
      youtubeend
      youtubemute
      youtubeloop
      youtubecontrols
      youtubeautostart
      svgzindex
      tagline
      featuredImage {
        publicURL
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      secondaryImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 800)
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
      svgImage {
        relativePath
      }
    }
  }
  posts: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {template: {eq: "blog-post"}}}
    limit: 3
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "YYYY-MM-DD-HH-MM-SS")
          slug
          title
          nftdrop
          youtubemute
          youtubeloop
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


//  const Capability1 = data.capability1.childImageSharp.gatsbyImageData
//  const Capability2 = data.capability2.childImageSharp.gatsbyImageData
//  const Capability3 = data.capability3.childImageSharp.gatsbyImageData

//  const imageData = data.desktop.childImageSharp.fluid

  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data 
  const { frontmatter, html, excerpt } = markdownRemark

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

  // const SecondaryImage = frontmatter.secondaryImage
  //   ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
  //   : ""
  
    // const UnderlayImage = frontmatter.underlayImage
    // ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    // : ""

    // const { iconimage } = useSiteMetadata()

    // const imageData = data.desktop.childImageSharp.fluid
    const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend

    // const YouTubeMute = frontmatter.youtubemute
    // const YouTubeControls = frontmatter.youtubecontrols
    // const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts

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
        <object title="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', bottom:'0', left:'0', right:'0', top:'0', overflow:'hidden', display:'block', border:'2px solid red', zIndex:'', width:'100vw', height:'100vh',  }} alt="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" ></object>
      )
    }



    // const [state] = useState({
    //   playing: true,
    //   controls: false,
    //   light: true,
    //   muted: true,
    //   loop: true,
    // });
    // const playerRef = useRef(null);
    // const controlsRef = useRef(null);
    
    // const {
    //   playing,
    //   controls,
    //   light,
    //   muted,
    //   loop,
    //   // playbackRate,
    //   // pip,
    //   // played,
    //   // seeking,
    //   // volume,
    // } = state;
    
    // const handlePlayPause = () => {
    //   setState({ ...state, playing: !state.playing });
    // };
    
    // const hanldeMute = () => {
    //   setState({ ...state, muted: !state.muted });
    // };
    
    const { iconimage } = useSiteMetadata()

 




const YouTube = frontmatter.youtuber

if (!YouTube) {

}
else{
  
  <Iframer />
}

function Iframer() {
  

  const Url = "https://www.youtube-nocookie.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=" + frontmatter.youtubeautostart + "&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=" + frontmatter.youtubeloop + "&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
  return (
    <ReactPlayer
    className='react-player66'
    url={Url}
    
    // url={[
    //   iframeUrl,
    //   YoutuberSuggestion1,
    //   YoutuberSuggestion2,
    //   YoutuberSuggestion3
    // ]}
    width="100%"
    height="100%"

    config={{
      youtube: {
        playerVars: { showinfo:1, autoplay:frontmatter.youtubestart, controls:frontmatter.youtubecontrols, start:YouTubeStart, end:YouTubeEnd, mute:frontmatter.youtubemute  }
      },
    }}
    loop
    playing
    playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>

    <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', margin:'0 auto'}}>
    

      <div style={{position:'relative', maxWidth:'100vw', margin:'4% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
<img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'30vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
</div>

      <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
<ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      </div>
      </button>}
        light="../assets/transparent.png"
    />
  )
}


// const options = {
//   settings: {
//     autoplaySpeed: 4000,
//     boxShadow: '0px 0px 20px #000',
//     disableKeyboardControls: false,
//     disablePanzoom: false,
//     disableWheelControls: true,
//     hideControlsAfter: false,
//     lightboxTransitionSpeed: 0.3,
//     lightboxTransitionTimingFunction: 'linear',
//     overlayColor: 'rgba(0, 0, 0, 0.8)',
//     slideAnimationType: 'slide',
//     slideSpringValues: [300, 50],
//     slideTransitionSpeed: 0.6,
//     slideTransitionTimingFunction: 'linear',
//     usingPreact: false
//   },
//   buttons: {
//     backgroundColor: '#FA02B7',
//     iconColor: 'rgba(255, 255, 255, 0.8)',
//     iconPadding: '10px',
//     showAutoplayButton: false,
//     showCloseButton: true,
//     showDownloadButton: false,
//     showFullscreenButton: false,
//     showNextButton: false,
//     showPrevButton: false,
//     showThumbnailsButton: false,
//     size: '40px'
//   },
//   caption: {
// captionAlignment: 'start',
// captionColor: '#FFFFFF',
// captionContainerPadding: '20px 12% 30px 12%',
// captionFontFamily: 'inherit',
// captionFontSize: 'inherit',
// captionFontStyle: 'inherit',
// captionFontWeight: 'inherit',
// captionTextTransform: 'inherit',
// showCaption: false
//   },
//   thumbnails: {
//     showThumbnails: false,
//     thumbnailsAlignment: 'center',
//     thumbnailsContainerBackgroundColor: '#111',
//     thumbnailsContainerPadding: '0',
//     thumbnailsGap: '0 2px',
//     thumbnailsIconColor: '#ffffff',
//     thumbnailsOpacity: 0.4,
//     thumbnailsPosition: 'bottom',
//     thumbnailsSize: ['100px', '80px']
//   },
//   progressBar: {
//     backgroundColor: '#000',
//     fillColor: '#333',
//     height: '3px',
//     showProgressBar: true
//   },
// };
  
  return (

    <Layout>
    <Helmet>
  <body className="homepage" style={{background:''}} />
</Helmet>
{/* <Seo
          title={`VidSock - Video Multimedia NFT Platform`}
          description={`Create, display and market your NFTs with VidSock`}
          image={'https://vidsock.com/default-og-image.jpg'}
        /> */}
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
  //       image={photoUrl}
  //  photoUrl

   image={ siteUrl + getSrc(frontmatter.featuredImage) }
/>
      




{/* VIDEO URLS */}
{/* uCf3Q43fC_4 cool train */}







{ShowFeature ? (
<>
{/* <div className="RArrow"><span></span></div> */}
<div className="horizontal-holder allin60panel" style={{position:'relative',  overflow:'hidden', color:'#ccc', border:'1px solid transparent'}}>



<div className="horizontal-scroll panels" style={{}}>




<div className="panelspacer" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'', height:'50%', paddingTop:'50%', background:''}}></div>

{/* <div id="" className="wrap-element " style={{overflow:'', width:'100vw', height:'85vh', position:'relative', top:'0', zIndex:'', marginBottom:''}}> */}


{/* <div style={{position:'absolute', objectFit:'', top:'0', zIndex:'-1', placeContent:'', background:'#111', width:'100vw', height:'100vh'}}>
          {Image ? (
            <GatsbyImage
              image={Image}
              loading="eager"
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'fixed', top:'0', zIndex:'', objectFit:'cover', overflow:'', backgroundSize:'cover', border:'0px solid red !important', background:'#111', aspectRatio:'none'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}
</div> */}
 

{/* <ReactPlayer
            ref={playerRef}
            width="100%"
            height="100%"
            style={{position:'absolute', zIndex:'-1'}}
            url={YouTube}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            muted={muted}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, autoplay:1, controls:0, start:10, end:2000, mute:1  }
              },
            }}

            playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'1px solid transparent', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'', justifyContent:'center', alignItem:'center', paddingTop:''}}>

            
  
            <div style={{position:'absolute', width:'100vw', height:'', top:'5px', margin:'0', zIndex:'1', display:'flex', justifyContent:'center', background:'transparent !important',}}>

            <StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/allin60seconds.jpg" style={{height:'', position:'', top:'', zIndex:'-1'}}  />
  </div> 

            <div style={{display:'grid', placeContent:'center', fontWeight:'bold', padding:'50% 0 0 0', fontSize:'clamp(1rem, 3vw, 3rem)', textShadow:'2px 2px 0 #111', width:'100%', position:'absolute', zIndex:'2', top:'', height:'100%', border:'1px solid transparent',}}>
              
            <div style={{fontWeight:'bold', padding:'2rem', backdropFilter:'blur(4px)', background:'rgba(0, 0, 0, .5)', borderRadius:'12px', }}>Click To Play

    <ImPlay style={{margin:'0 auto', width:'', fontSize:'40px'}} /></div>
    </div>
            </button>}
        //  light="../assets/transparent.png"
          />

          </div> */}




        
<div>
  <a aria-label="View Tron In 60 Seconds" title="View Tron In 60 Seconds" className="" rel="noreferrer" href="https://tron.allin60.com" >
<StaticImage className="" placeholder="blurred" layout="constrained" 
alt="Tron In 60 Seconds" src="../../static/assets/tronin60.jpg" />
</a>
</div>

<div>
  <Link aria-label="View Mystery Science Theater 3021 in 60 Seconds" title="View Mystery Science Theater 3021 in 60 Seconds" className="" to="/mystery-science-theater-3022/" >
<StaticImage className="" placeholder="blurred" layout="constrained" 
alt="Mystery Science Theater In 60 Seconds" src="../../static/assets/mystery-science.jpg" />
</Link>
</div>

<div>
  <Link aria-label="View They Live In 60 Seconds" title="View They Live In 60 Seconds" className="" to="/they-live/" >
<StaticImage className="" placeholder="blurred" layout="constrained" 
alt="They Live In 60 Seconds" src="../../static/assets/TheyLive-Header.jpg" />
</Link>
</div>

{/* <Panel1 /> */}



{/* {ShowPosts ? (
        <BlogListHome data={posts} style={{}} />
   ) : (
    ""
  )} */}

<div>
</div>

{/* <div className="allin60panel" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'100%', margin:'0', background:''}}>
<div style={{ width:'90vw', position:'relative', top:'', margin:'20px auto', padding:'4% 5%', zIndex:'3', textAlign:'', borderRadius:'12px', textDecoration:'none', color:'#cccc'}}>
  <Newsignup />
  </div>
</div> */}

</div>


</div>
</>
) : (
  ""
)}







<div id="intro" name="container21" className="container21" style={{position:'relative', zIndex:'1', paddingTop:'0'}}>

{/* <div className="" style={{textAlign:'center', padding:'1rem', marginTop:'0' }}>
<a className="button actionJacksons specialfont" aria-label="Order Online Now" title="Order Online Now" rel="noreferrer" target="_blank" href="https://www.toasttab.com/rackhousegulfport/v3/" style={{ textDecoration:'none', padding:'.5rem', textShadow:'1px 1px 0 #333', borderRadius:'8px', fontSize:'clamp(1rem, 2vw, 2.8rem)', textAlign:'center', display:'flex', justifyContent:'center', maxWidth:'', margin:'1rem 30%'}}>
Order Online
</a>
 </div> */}

{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ display:'',}}>
  <article>

  <div className='' style={{ display:'', position:'relative', top:'0', zIndex:'0', overflow:'', filter: 'drop-shadow(0 0 20px #000)' }}>





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

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}


{/* <div className="specialfont" style={{position:'absolute', top:'0', width:'100%', display:'flex', justifyContent:'space-between', gap:'20px', padding:'5% 5%', border:'0px solid', zIndex:'5', color:'#fff'}}>
<div style={{fontSize:'clamp(1rem, 3vw, 3.8rem)', textShadow:'1px 1px 1px #111', width:'50%'}}>
1301 26th Avenue
<br />
Gulfport, MS
<br />
<a className="call" href="tel:+2282062744">228-206-2744</a>
</div>

<div style={{fontSize:'clamp(.9rem, 3vw, 3.8rem)', textShadow:'1px 1px 1px #111', width:'50%', textAlign:'right'}}>
Open Daily At 11am
<br />
Sat &amp; Sun Brunch
<br />
Happy Hour 3-6pm
</div>
  </div> */}



{/* if(navigator.standalone) {
    "Thanks for using our PWA!"
} else {
    "Please consider downloading our PWA."
} */}





 

  {/* {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )} */}





{/* {UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )} */}


  
{/* {YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )} */}




      </div>
  </article>
</section>

) : (
  ""
)}
{/* end show feature */}






{/* <section style={{ display:'',}}>
  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>


    {Image ? (
  <GatsbyImage
              image={Image}
              loading="eager"
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100%', height:'100vh', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}}
            />

          ) : (
          ""
          )}


<div className="specialfont" style={{position:'absolute', bottom:'5%', width:'100%', display:'flex', justifyContent:'space-between', gap:'20px', padding:'10%', border:'0px solid', zIndex:'5', color:'#fff'}}>
<div style={{fontSize:'clamp(1rem, 3vw, 3.8rem)', textShadow:'1px 1px 1px #111', width:'50%'}}>
1301 26th Avenue
<br />
Gulfport, MS
<br />
<a className="call" href="tel:+2282062744">228-206-2744</a>
</div>

<div style={{fontSize:'clamp(.9rem, 3vw, 3.8rem)', textShadow:'1px 1px 1px #111', width:'50%', textAlign:'right'}}>
Open Daily At 11am
<br />
Sat &amp; Sun Brunch
<br />
Happy Hour 3-6pm
</div>
  </div>

  </div>


</article>
</section> */}





{/* show Info */}
{ShowInfo ? (
            
       


<section style={{ display:'', height:'', overflow:'', marginTop:'6%'}}>
  <article>
<div className="flexbutt" style={{display:'flex', gap:'30px'}}>
      <div className="flexcheek " style={{padding:'0 2rem 0 2rem', maxHeight:'90vh',}}>


      <span className="specialfont2" style={{fontSize:'clamp(2rem, 4vw, 2.5rem)', textAlign:'left', marginLeft:'1rem'}}>
            {frontmatter.title}
            {/* Today's Popular Subjects <br /> */}
            {/* The Rack House */}
          </span>
          {/* <h2
            className="tagline1"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </h2> */}





          <div
          style={{padding:'1rem', fontSize:'clamp(1rem, 2vw, 2.8rem)',}}
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />


  

          {/* <Link state={{modal: true}} 
            to={frontmatter.cta.ctaLink}
            className="button fire actionJackson specialfont"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc',
              fontSize:'130%'
            }}
          >
            {frontmatter.cta.ctaText}
   

            

          </Link> */}

         


{/* <AnchorLink 
className="actionJackson txtshadow"
style={{
  cursor:'pointer',
  width:'70%',
  margin:'0 auto'

}} 
to="#experiences" title="See the new EXPERIENCES™" /> */}




{/* <span className="actionJackson txtshadow"> <span className="icon -right">
              <FaHandPointDown />
            </span> &nbsp;&nbsp;All New EXPERIENCES &nbsp;&nbsp;<span className="icon -right">
              <FaHandPointDown />
            </span></span> */}
          


      </div>



        


      <div className="flexcheek" style={{position:'relative', maxHeight:'', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
 
 


 <div style={{margin:'0 30px', zIndex:'', borderRadius:'12px', maxHeight:'', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:'column'}}>
   





           {/* {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              layout="constrained"
              placeholder="blurred"
              style={{border:'1px solid red', width:'100%', height:'', maxHeight:'',  borderRadius:'12px', position:'', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
            />
          ) : (
            ""
          )} */}





<div style={{position:'relative', top:'', margin:'0', padding:'0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
  <Newsignup />
  </div>



{/* <ScrollAnimation animateIn="bounceInDown" delay={350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} >
<div style={{position:'relative', top:'0px', paddingRight:'', border:'0px solid yellow', zIndex:'0'}}>
  <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'1rem 0 0 0',
    padding:'0',
  }}
>
Only Available<br />
Through NFT
</h2>
</div>
</ScrollAnimation> */}



{/* <div style={{fontSize:'120%', textAlign:'center', margin:'1rem', textShadow:'2px 2px 0 #000'}}><Link state={{modal: true}} to="/about/">Learn More About The VidSock Platform Here</Link></div> */}

</div>

      
      







      </div> 
</div>
</article>
</section>


) : (
  ""
)}
{/* end show Info */}





{/* end show Posts */}
{ShowPosts ? (

<div id="posts" name="posts" style={{padding:'0 3%'}}>
  
 
<div className="specialfont" style={{textAlign:'center', fontSize:'5vw', margin:'0 0',}}>Latest Minutes:</div>

        <BlogListHome data={posts} />


       
        
        <div style={{textAlign:'center'}}><Link className="button " to="/minutes/" style={{textDecoration:'none', color:'inherit', textAlign:'center'}}>More Minutes </Link>
        </div>



 

  
</div>

   ) : (
    ""
  )}
{/* end show Posts */}


 </div>{/* end scooch */}

      

 










{/* <div id="capabilities" className="" style={{position:'relative', zIndex:'2', textAlign:'', padding:'0 2%', fontSize:'clamp(1rem, 2vw, 2.8rem)', margin:'20px auto 0 auto', maxWidth:'1600px'}}>




<div className="flexbutt noexit print" style={{padding:'0',
position:'relative', height:'', width:'', overflow:'', display:'flex', gap:'20px', margin:'0 auto 2rem auto', }}>


<div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'flex-start', pointerEvents:'', fontSize:'clamp(1rem, 1vw, 2.8rem)',}}>
    <AnchorLink className="" to="#iso" style={{textDecoration:'none', textAlign:'center', color:'inherit',}}>
    {Capability1 ? (
            <GatsbyImage
              image={Capability1}
              alt="Image Alt Text"
              className=""
              style={{borderRadius:'8px'}}
            />
          ) : (
            ""
          )}
    </AnchorLink>
   
   <p style={{padding:'1rem'}}>Our menu is steep in the traditions of the great steakhouses of America, however at virtually every step we have added our own "Rack House style" flair. We focus on providing a fantastic steak.</p>
    </div>


    
    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'flex-start', pointerEvents:'', fontSize:'clamp(1rem, 1vw, 2.8rem)',}}>
    <AnchorLink className="" to="#about" style={{textDecoration:'none', color:'inherit',}}>
    {Capability2 ? (
            <GatsbyImage
              image={Capability2}
              alt="Image Alt Text"
              className=""
              style={{borderRadius:'8px'}}
            />
          ) : (
            ""
          )}
    </AnchorLink>

    <p style={{padding:'1rem'}}>Our mezzanine level of the Rack House was designed to be a place to sit back in a comfy couch, leather chair, or at the bar with friends and enjoy a unique atmosphere and great libations.</p>
    </div>



    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'flex-start', pointerEvents:'', fontSize:'clamp(1rem, 1vw, 2.8rem)',}}>
    <AnchorLink className="" to="#equipmentlist" style={{textDecoration:'none', color:'inherit'}}>
    {Capability3 ? (
            <GatsbyImage
              image={Capability3}
              alt="Image Alt Text"
              className=""
              style={{borderRadius:'8px'}}
            />
          ) : (
            ""
          )}
    </AnchorLink>
    
    <p style={{padding:'1rem'}}>Join the Bourbon Society and you get to enjoy plenty of perks such as a personalized decanter, exclusive access to coveted bourbons, monthly tastings and so much more!</p>
    </div>


</div>

</div> */}





<h3 style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', margin:'10vh auto 2rem auto'}}>Todd's Other Work</h3>
 
 <div className="flexbutt noexit print" style={{padding:'0 4%',
position:'relative', height:'', width:'', overflow:'', display:'flex', gap:'20px', margin:'0 auto 2rem auto', }}>



<div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
    <a className="noexit" href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage placeholder="blurred" layout="constrained" src="../../static/assets/twilightscapes-button.jpg" alt="Todd Lambert Night photos"  /></a>
    <br />
    Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the night like you&apos;ve never seen it before.
    <br /><br />
    <div style={{textAlign:'center',}}><a className="button " href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Twilightscapes.com</a></div>
    </div>


{/*     
    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <a className="noexit" href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/urban-fetish-button.jpg" alt="Todd Lambert Night photos" style={{borderRadius:'8px'}}  /></a>
    <br />
    Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. 
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>UrbanFetish.com</a></div>
    </div> */}



<div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
    <a className="noexit" href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage placeholder="blurred" layout="constrained" src="../../static/assets/toddlambert-promo-banner.png" alt="Todd Lambert is an independent artist, creator, design, developer and generally a unicorn" style={{borderRadius:'8px'}}  /></a>
    <br />
    Todd Lambert excels in design, development, marketing, conceptual photography and online strategy that bring results. Learn more about Todd and maybe hire him to help you?
    <br /><br />
    <div style={{textAlign:'center',}}><a className="button " href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>ToddLambert.com</a></div>
    </div>


    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <a className="noexit" href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
    <StaticImage placeholder="blurred" layout="constrained" src="../../static/assets/vidsock-promo.jpg" alt="Todd builds Web Apps"  style={{borderRadius:'8px'}} /></a>
    <br />
Todd sells exceptionally fast and well-built multimedia web apps called VidSocks. They are a complete website solution that costs nothing to run and get top ranks in Google!
    <br /><br />
    <div style={{textAlign:'center',}}><a className="button " href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>VidSocks.com</a></div>
    </div>


</div>










{/* <div className="specialfont" style={{textAlign:'center', fontSize:'5vw', margin:'10vh auto 0 auto', maxWidth:'80vw'}}>
Virtual Tour<br />
  <Link state={{modal: true}} to="/virtual-tour/" className="" style={{margin:'', textDecoration:'none'}}>
  <StaticImage src="../../static/assets/virtual-tour.jpg" alt="Twilightscapes Default Image" placeholder="blurred" layout="constrained" style={{height:'auto', position:'', zIndex:'', top:'',border:'6px solid !important', borderRadius:'12px', objectFit:'contain',}} />
</Link>
</div>
<br /><br /> */}


<div style={{position:'relative', top:'', margin:'10vh 0', padding:'0',  width:'', }}>
<SocialMe />
</div>






<Footer />
    </Layout>
  )
}

export default HomePage
  

