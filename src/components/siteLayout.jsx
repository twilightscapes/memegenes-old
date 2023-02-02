import React from "react"
import Seo from "./seo"
import { Link } from 'gatsby'
// import { ModalRoutingContext } from '@decantyme/gatsby-plugin-modal-routing'
// import { AiOutlineClose } from "react-icons/ai"
import "../assets/scss/reset.scss"
import "../assets/scss/global.scss"
import "../assets/scss/styles.css"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { StoreContext } from "../context/store-context"
// import { Toast } from "./toast"
import Bug from "../../static/assets/logo.svg"
import SiteLogo from "../../static/assets/logo.svg"
// import Install from './install-discount'
import Theme from "./theme"
// import { CartButton } from "./cart-button"
// import SearchIcon from "../../static/assets/search"


// import { Link } from "gatsby-plugin-anchor-links"
// import { StaticImage } from "gatsby-plugin-image"

// import Install from './install-discount'
// import { navigate } from "gatsby";
const TemplateWrapper = ({ children }) => {

  
  // const { iconimage } = useSiteMetadata()
  // const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  // const items = checkout ? checkout.lineItems : []

  // const quantity = items.reduce((total, item) => {
  //   return total + item.quantity
  // }, 0)

  return (
    <div style={{display:''}}> 
<>
<Seo />

{/* <ModalRoutingContext.Consumer >
{({ modal, closeTo }) => (
<div style={{overflow:''}}>
  {modal ? (

    <div style={{display:'', position:'fixed', top:'10%', right:'3%', padding:'0px', fontSize:'2rem', background:'#111 !important', opacity:'1 !important', zIndex:'55 !important', filter:' drop-shadow(0px 4px 3px #000)', color:'#fff'}}>
    <Link state={{noScroll: true }} to={closeTo} style={{fontSize:'2rem',  textDecoration:'none', lineHeight:'', display:'flex', flexDirection:'column', color:'#fff', cursor:'pointer'}}>
      <AiOutlineClose />
    </Link>
    </div>

  ) : (
''
  )}

</div>
)}
</ModalRoutingContext.Consumer> */}










<header id="top" name="pagetop" style={{}} >

{/* <ul id="menu" className="menu" style={{position:'fixed', width:'100vw', top:'0', zIndex:'10', display:'flex', justifyContent:'space-around', fontSize:'clamp(.8rem, 2.3vw, 2.5rem)', gap:'10px', textAlign:'center', background:'radial-gradient(#111 14%,#222 140%)', color:'#ccc', boxShadow:'0 0 24px rgba(0,0,0,.9)', padding:'0 .5rem', alignItems:'center'}}>
<li className="grad" style={{position:'relative',}}>
        <AnchorLink className="navbar-item" to="/#about" style={{paddingRight:'',}}>
          About <span className="mobilehide">Us</span> 
        </AnchorLink>
        </li>
      <li className="grad" style={{position:'relative',}}>
      <AnchorLink className="navbar-item" to="/#capabilities" style={{paddingRight:'',}}>
      <span className="mobilehide">Our</span> Capabilities 
      </AnchorLink>
      </li>
      <li className="grad" style={{position:'relative', maxHeight:'60px'}}>
      <AnchorLink to="/#top" name="homereturn" style={{position:'absolute', display:'block', width:'180px', height:'60px', border:'1px solid'}}  aria-label="Link to Home" title="Back to Home">
      <SiteLogo style={{maxHeight:'60px'}} />
      </AnchorLink>
    </li>
      <li className="grad" style={{position:'relative',}}>
        <AnchorLink className="navbar-item" to="/#industries" style={{paddingRight:'',}}>
          Industries <span className="mobilehide">Served</span> 
        </AnchorLink>
        </li>
        <li className="grad" style={{position:'relative',}}>
        <AnchorLink to="/#contact" className="navbar-item" style={{paddingRight:'',}}>
          Contact <span className="mobilehide">Us</span>
        </AnchorLink>
        </li>
      </ul> */}



      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />

{/* <div id="secondMenu" className="" style={{marginTop:'5rem'}}>
<ul className="sidebarMenuInner post-card" style={{}}>
<Install />
<li className="carto" style={{border:'none', margin:' 0', textAlign:'center'}}>
Woot
</li>
<li className="carto" style={{border:'none', margin:' 0', textAlign:'center'}}>
This is 2nd menu
</li>

</ul>
</div> */}
<>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
  <label htmlFor="openSidebarMenu" className="backdrop1" ><input type="checkbox" /></label>

<label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle">
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'500px', color:'#fff', border:'0px solid blue'}}>
{/* <img className="" src={iconimage} alt="Logo" style={{borderRadius:'12px'}} /> */}
<Bug className="bug" style={{fontSize:'38px', maxWidth:'', opacity:'1', margin:'0 0 0 0', width:'100%', display:'' }}/> 
{/* <object className="" id="logo" data={iconimage} type="image/svg+xml" style={{  overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'', background:'transparent'  }} alt="Animated Logo" title="Animated Logo" >Animated Logo</object> */}
</div>
  </label>

  
  {/* <Install /> */}




   <div id="sidebarMenu" style={{minWidth:'', width:'',}}>
  
{/* <div className="no-app promocode">
30% OFF CODE: <span style={{color:'var(--primary-color)', fontWeight:'bold'}}>LoveTheNight</span>
</div> */}

  

<ul className="sidebarMenuInner post-card" style={{maxWidth:'400px', position:'absolute', right:'0', display:'', justifyContent:''}}>

<li className="carto" style={{border:'none', margin:' 0', textAlign:'center'}}>
<Link to="/" name="homereturn" title="return to home" style={{position:'absolute', display:'block', width:'180px', height:'180px', border:'0px solid'}}></Link>
<SiteLogo />
</li>


<li className="carto" style={{textAlign:''}}>
              <Link className="navbar-item txtshadow" to="/projects">
      <div style={{display:'flex', gap:'10px'}}>
        {/* <AiOutlineFundProjectionScreen style={{fontSize:'2vw'}} /> */}
        View By Project
        </div>
              </Link>
      </li> 


<li className="carto">
      <Link className="navbar-item txtshadow" to="/minutes/">
      <div style={{display:'flex', gap:'10px'}}>
      View All Minutes
      </div>
        </Link>
</li>

{/* <li className="carto" style={{textAlign:'center'}}>
      <Link className="navbar-item txtshadow" to="/minutes/">
      <div style={{display:'flex', gap:'10px'}}>
      Current Minutes
      </div>
        </Link>
</li> */}




<li className="carto" style={{textAlign:'', pointerEvents:'none'}}>
          <Link className="navbar-item txtshadow" to="/about/">

          About This Site

          </Link>
  </li> 




  <li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'space-around', verticalAlign:'center', padding:'5px 0 0 0' , background:'rgba(0,0,0,0)' }}>

  <Theme  style={{padding:'0'}} />
{/* <Link className="sherlock" to="/search/" style={{marginRight:'0', marginTop:'5px'}}>
<span className="carto"><SearchIcon /></span>
</Link>

<CartButton quantity={quantity} /> */}


    </li>

</ul>

  </div>

      {/* <Toast show={loading || didJustAddToCart} >
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
          </>
        )}
      </Toast> */}
 
      {/* <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div> */}
     
</header>
{children}

      
      
      {/* <Consent /> */}
     {/* <Install /> */}
      {/* <Footer /> */}
      
      </>
    </div>
    
    );
  };
  
  export default TemplateWrapper;