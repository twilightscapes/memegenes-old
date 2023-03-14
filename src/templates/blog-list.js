import React, { useEffect, useState } from 'react';
import { graphql, Link, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/siteLayout"
import useSiteMetadata from "../hooks/SiteMetadata"
import { ImPlay } from "react-icons/im"
import { FaImage } from "react-icons/fa"
import { AiOutlinePicLeft } from "react-icons/ai"
import ScrollAnimation from 'react-animate-on-scroll'
import { BiGridHorizontal } from "react-icons/bi"
import { MdOutlineRectangle } from "react-icons/md"

// import TimeAgo from 'react-timeago'

const BlogList = ({ data, pageContext }) => {

  const { showNav } = useSiteMetadata()





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

    // Store the selected option in local storage
    localStorage.setItem('archiveView', 'grid');
  };

  const resizeSwipe = () => {
    const elements = document.querySelectorAll('.contentpanel');
    elements.forEach(el => {
      el.classList.remove('grid-container');
      el.classList.add('horizontal-scroll', 'panels');
    });

    // Store the selected option in local storage
    localStorage.setItem('archiveView', 'swipe');
  };
  

  
  const posts = data.allMarkdownRemark.edges
  const { numPages } = pageContext

  return (
    <Layout>

{showNav ? (
  <div className="spacer" style={{height:'70px', border:'0px solid yellow'}}></div>
      ) : (
        ""
      )}

      <div style={{maxHeight:'80vh'}}>
        <h1 style={{textAlign:'center'}}>Archive</h1>


        <ScrollAnimation animateIn="" animateOut="" initiallyVisible={true} animateOnce={false} animatePreScroll={true} style={{position:'fixed', left:'0', bottom:'5vh', zIndex:'1', width:'', background:'rgba(0, 0, 0, .6)', color:'#ccc', height:'', borderRadius:'0 12px 12px 0', borderLeft:'none !important',}}> 
<div id="resizer" style={{display:'flex', flexDirection:'column', gap:'30px', justifyContent:'center', 
  alignItems:'center', alignContent:'center', textAlign:'center',  padding:'1rem', textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold',}}><button onClick={resizeGrid}><BiGridHorizontal style={{fontSize:'24px', margin:'0 auto'}} />Grid </button><button onClick={resizeSwipe}><MdOutlineRectangle style={{fontSize:'24px', margin:'0 auto'}} />Swipe</button>



</div>
</ScrollAnimation>


        <div className="contentpanel horizontal-scroll panels" style={{padding:''}}>

<div className="sliderSpacer" style={{height:'', paddingTop:'', display:'none'}}></div>


        {posts.map(({ node }) => {
          // const title = node.frontmatter.title || node.fields.slug
          // const tags = node.frontmatter.tags || []
          // const excerpt = node.frontmatter.excerpt || node.excerpt
          const featuredImg = node.frontmatter.featuredImage

          return (
            <div key={node.fields.slug}>
              {/* Render featured image thumbnail if it exists */}
              {featuredImg && (
                <Link to={node.fields.slug}>
                  <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="" style={{maxHeight:'60vh'}} />

                  
                  


                  {node.frontmatter.youtuber ? (
<Link to={node.frontmatter.slug} style={{}}>
  <div className="spotlight" style={{position:'absolute'}}>
<div className="posticons" style={{bottom:''}}>
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
              )}


            </div>
          )
        })}

        
      </div>
      </div>

      {/* Render pagination links */}
<div style={{position:'fixed', bottom:'20px', width:'100vw',  background:'rgba(0, 0, 0, 0.7)', padding:'2vh 2vw', textAlign:'center', color:'#fff'}}>
  <button onClick={() => navigate(pageContext.currentPage > 2 ? `/archive/${pageContext.currentPage - 1}` : '/archive')} disabled={pageContext.currentPage === 1}>
    Previous
  </button>
  {Array.from({ length: numPages }, (_, i) => {
    const page = i + 1
    const path = page === 1 ? "/archive" : `/archive/${page}`
    return (
      <Link
        key={`pagination-link-${page}`}
        to={path}
        activeClassName="active"
        style={{padding:'20px'}}
      >
        {page}
      </Link>
    )
  })}
  <button onClick={() => navigate(`/archive/${pageContext.currentPage + 1}`)} disabled={pageContext.currentPage === numPages}>
    Next
  </button>
</div>



    </Layout>
  )
}




export const query = graphql`
  query($skip: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 10
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            youtuber
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;


export default BlogList
