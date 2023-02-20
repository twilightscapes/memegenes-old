import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ImPlay } from "react-icons/im"
import { FaImage } from "react-icons/fa"
import { AiOutlinePicLeft } from "react-icons/ai"
import Layout from "../../components/siteLayout"
import TimeAgo from 'react-timeago'

function clearfield() {  
  document.querySelector('#clearme').value = '';
}


const SearchPage = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges
  const [query, setQuery] = React.useState("")
  const [filteredPosts, setFilteredPosts] = React.useState(allPosts)

  const handleSearch = event => {
    const query = event.target.value
    setQuery(query)

    const filteredPosts = allPosts.filter(({ node }) => {
      const { title, tags } = node.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    setFilteredPosts(filteredPosts)
  }

  return (
<Layout>



      <div className="contact-form searchform" style={{position:'absolute', top:'64px', right:'0', left:'0', maxWidth:'65vw', margin:'0 auto', zIndex:'3'}}>
      <form>
      <label>
        <input id="clearme" type="text" placeholder="Type here to filter by keyword" onChange={handleSearch} />
      </label>
      <button type="reset" value="reset" onClick={() => clearfield()} style={{position:'absolute', right:'2vw', top:'2vh'}}>clear</button>


</form>
      </div>


<div className="horizontal-scroll panels sitegrad movingBG" style={{marginTop:'120px', paddingTop:''}}>
    <div className="" style={{height:'50%', paddingTop:'50%'}}></div>


        {filteredPosts.map(({ node }) => (
          <Link key={node.id} to={node.frontmatter.slug}>
          
    
          {node.frontmatter.youtuber ? (
<Link to={node.frontmatter.slug} style={{}}>
  <div className="spotlight">

  <div style={{display:'grid', placeContent:'center', position:'relative'}}>
    


<div className="posticons panel" style={{fontWeight:'bold', padding:'1vh 2vw', width:'34vw', height:'', background:'rgba(0, 0, 0, 0.7)', borderRadius:'12px', position:'absolute', bottom:'15vh', left:'30vw', right:'30vw', margin:'0 auto', color:'#ccc'}}>

  


{/* <SiteLogo className="posticon" style={{margin:'0 auto', height:'20vh', width:'100%',}}/> */}

<div style={{display:'flex', justifyContent:'space-around', gap:'2vw', color:'fff',}}>

<FaImage className="posticon" style={{margin:'0 auto', width:'100%', height:'5vh', fontSize:''}} />


    <ImPlay className="posticon" style={{margin:'0 auto', width:'100%', height:'5vh', fontSize:''}} />

    
    <AiOutlinePicLeft className="posticon" style={{margin:'0 auto', width:'100%', height:'5vh', fontSize:''}} />


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


            <GatsbyImage
              image={node.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData}
              alt={node.frontmatter.title}
            />
            <div className="panel" style={{display:'flex', justifyContent:'space-around', alignItems:'center', margin:'10px auto', width:'auto', maxWidth:'90vw', minWidth:'50vw', height:'100%', textAlign:'left', padding:'1vh 1vw', fontSize:'clamp(1rem, 1vw, 1rem)',  background:'rgba(0, 0, 0, 0.7)', borderRadius:'8px', color:'#fff' }}>

            
            <h2 className="title" style={{fontSize:'clamp(1rem, 2vw, 3rem)', }}>{node.frontmatter.title}</h2><p style={{minWidth:'', position:'', textAlign:'center', border:'0px solid red', fontSize:'70%'}}>
  <TimeAgo date={node.frontmatter.date}/>
</p>
            {/* <p>{node.excerpt}</p> */}
            </div>
          </Link>
        ))}
      </div>

      </Layout>


  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            youtuber
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
            slug
          }
        }
      }
    }
  }
`


export default SearchPage




