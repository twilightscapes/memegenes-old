import React, { useEffect, useState } from 'react';
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/siteLayout"
import useSiteMetadata from "../hooks/SiteMetadata"
import { ImPlay } from "react-icons/im"
import { FaImage } from "react-icons/fa"
import { AiOutlinePicLeft } from "react-icons/ai"
// import TimeAgo from 'react-timeago'
import { BiGridHorizontal } from "react-icons/bi"
import { MdOutlineRectangle } from "react-icons/md"
import ScrollAnimation from 'react-animate-on-scroll'
import { Helmet } from "react-helmet"


const Tag = ({ data, pageContext }) => {
  const { tag } = pageContext
  const posts = data.allMarkdownRemark.edges

  const { showNav } = useSiteMetadata()





  const isFirefox = navigator.userAgent.includes('Firefox');
  if (isFirefox) {
    const elements = document.querySelectorAll('.contentpanel');
    elements.forEach(el => {
      el.classList.add('grid-container');
      el.classList.remove('horizontal-scroll', 'panels');
    });
  }

  const [archiveView, setArchiveView] = useState('');

  useEffect(() => {
    // Retrieve the selected option from local storage
    const archiveView = localStorage.getItem('archiveView');
    setArchiveView(archiveView);
  }, []);

  useEffect(() => {
    // Apply the selected option on page load
    if (archiveView === 'grid') {
      resizeGrid();
    } else if (archiveView === 'swipe') {
      resizeSwipe();
    }
  }, [archiveView]);

  const resizeGrid = () => {
    const elements = document.querySelectorAll('.contentpanel');
    elements.forEach(el => {
      el.classList.remove('horizontal-scroll', 'panels');
      el.classList.add('grid-container');
    });
    localStorage.setItem('archiveView', 'grid');
  };

  const resizeSwipe = () => {
    const elements = document.querySelectorAll('.contentpanel');
    elements.forEach(el => {
      el.classList.remove('grid-container');
      el.classList.add('horizontal-scroll', 'panels');
    });
  window.scrollTo(0, 0);
  localStorage.setItem('archiveView', 'swipe');
  };



  
  if (posts.length === 0) {
    return <p>No posts found.</p>
  }

  return (
    <Layout>
      <Helmet>
  <body id="body" className="tag scroll" style={{}} />
</Helmet>


      {showNav ? (
  <div className="spacer" style={{height:'70px', border:'0px solid yellow'}}></div>
      ) : (
        ""
      )}
      
    
      <h1 style={{textAlign:'center'}}>Posts tagged "{tag}"</h1>
      
      <ScrollAnimation animateIn="" animateOut="" initiallyVisible={true} animateOnce={false} animatePreScroll={true} style={{position:'fixed', left:'0', bottom:'5vh', zIndex:'2', width:'', background:'rgba(0, 0, 0, .6)', color:'#ccc', height:'', borderRadius:'0 12px 12px 0', borderLeft:'none !important',}}> 
<div id="resizer" style={{display:'flex', flexDirection:'column', gap:'30px', justifyContent:'center', 
  alignItems:'center', alignContent:'center', textAlign:'center',  padding:'1rem', textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold',}}><button onClick={resizeGrid}><BiGridHorizontal style={{fontSize:'24px', margin:'0 auto'}} />Grid </button><button onClick={resizeSwipe}><MdOutlineRectangle style={{fontSize:'24px', margin:'0 auto'}} />Swipe</button>



</div>
</ScrollAnimation>


<div className="contentpanel horizontal-scroll panels" style={{padding:''}}>

<div className="sliderSpacer" style={{height:'', paddingTop:'', display:'none'}}></div>

      
        {posts.map(({ node }) => (
          <div key={node.id}>
            <Link key={node.id} to={node.frontmatter.slug}>
                      <GatsbyImage
              image={node.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData}
              alt={node.frontmatter.title}
            />

{node.frontmatter.youtuber ? (
<Link to={node.frontmatter.slug} style={{}}>
  <div className="spotlight" style={{maxHeight:''}}>
<div className="posticons" style={{}}>
<div style={{display:'flex', justifyContent:'space-around', gap:'2vw', color:'fff',}}>
<FaImage className="posticon" style={{margin:'0 auto', width:'100%', height:'5vh', fontSize:''}} />
    <ImPlay className="posticon" style={{margin:'0 auto', width:'100%', height:'5vh', fontSize:''}} />
    <AiOutlinePicLeft className="posticon" style={{margin:'0 auto', width:'100%', height:'5vh', fontSize:''}} />
</div>
Play Multimedia
</div>
</div>
</Link>
) : (
  ""
)}

<div className="panel" style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px auto', maxWidth:'80vw', gap:'.4vw', height:'', textAlign:'left', padding:'2vh 3vw', fontSize:'clamp(1rem, 1vw, 1rem)',  background:'rgba(0, 0, 0, 0.7)', borderRadius:'8px', color:'#fff' }}>

<h2 className="title" style={{fontSize:'clamp(1rem, 2vw, 3rem)', }}>
{node.frontmatter.title}
</h2>

{/* <p style={{minWidth:'', position:'', textAlign:'center', border:'0px solid red', fontSize:'70%'}}>
              <TimeAgo date={node.frontmatter.date}/>
            </p> */}
            {/* <p>{node.excerpt}</p> */}
            </div>
            
            </Link>
          </div>
        ))}
      
    </div>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {tags: {in: [$tag]}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            category
            youtuber
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

export default Tag
