import * as React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"
import SearchForm from "../../components/searchbox"
import Seo from "../../components/seo"
import Layout from "../../components/siteLayout"


const Search = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />


    <div className="spacer" style={{height:'60px', border:'0px solid yellow'}}></div>



    <div className="panel" style={{width:'90%', height:'', maxWidth:'1024px', margin:'0 auto 0 auto', padding:'2vh 10vw', borderRadius:'0 0 12px 12px', textAlign:'center' }}>
    <div className="spacer33"></div> 
      <h1 className="neonText" style={{fontSize:'200%'}}>Search results from MemeGenes.com:</h1>
      {/* <p>I should respond shortly, depending on where I am at.</p> */}
      <div className="spacer33"></div> 
      <SearchForm />

      <div className="spacer33"></div> 
      {/* <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Back to Homepage
      </Link> */}
    </div>
    <div className="spacer33"></div> 
    {/* <div className="spacer66"></div>  */}
  </Layout>
)

export default Search
