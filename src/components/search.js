import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// Search component
import { Helmet } from "react-helmet"


export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  
  render() {
    <Helmet>
<body id="body" className="homepage scroll" style={{overFlowY:'auto'}} />
</Helmet>
    return (
      <div  className="contact-form">
        <label>
        <input type="text" value={this.state.query} placeholder="Search MemeGenes"  onChange={this.search} />
        </label>
        <ul className="searchresults">
          {this.state.results.map(page => (
            <li className="searchitem" key={page.id}>
              <Link to={"" + page.slug}>
                {/* <img src="../../static/assets/trump-train.webp" alt="" /> */}
                
                {/* <StaticImage src={page.featuredImage} alt="" /> */}

                {/* <StaticImage src="../../static/assets/trump-train.webp" alt="" /> */}
                {page.title}<br />
                {page.featuredImage} 
              </Link>
              
            </li>
          ))}
        </ul>
        
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}