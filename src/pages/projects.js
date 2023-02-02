import * as React from "react"
import Layout from "../components/siteLayout"
import Seo from "../components/seo"
// import Panel1 from "../components/panel1"
// import Panel2 from "../pages/shawshank-trailer"
// import Panel3 from "../pages/pulp-fiction-trailer"
import { StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby"
import styled from "styled-components"
const CustomBox = styled.div`




@media (max-width: 48em) {

}

@media (min-width: 1100px) {

}

@media (min-width: 1100px) {

  }


`
    // const Panel13 = loadable(() => import('../components/panel13'))






export default function Projects() {
   return (

    <CustomBox>
    
    <Layout className="thanks-page">

<Seo
          title={`All In 60 Seconds - Current Projects`}
          description={`Archive of all projects`}
          image={'https://allin60.com/allin60seconds.jpg'}
        />




<div className="horizontal-holder" style={{position:'relative',}}>
{/* <div className="RArrow"><span></span></div> */}


<div className="horizontal-scroll panels sitegrad movingBG" style={{}}>


<div className="" style={{height:'50%', paddingTop:'50%'}}></div>






{/* <Panel2 /> */}


<div>
<Link title="Shawshank Redemption by Stephen King - All In 60 Seconds"  to="/shawshank-trailer/" className="navbar-item button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
{/* <Panel3 /> */}
<StaticImage className=""
alt="Shawshank Redemption by Stephen King - All In 60 Seconds" src="../../static/assets/shawshank.jpg" />
</Link>
</div>



<div>
<Link title="Pulp Fiction by Quentin Tarantino - All In 60 Seconds"  to="/pulp-fiction-trailer/" className="navbar-item  button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
{/* <Panel3 /> */}
<StaticImage className=""
alt="Pulp Fiction by Quentin Tarantino - All In 60 Seconds" src="../../static/assets/pulpfiction.jpg" />
</Link>
</div>


{/* <a href="https://tron.allin60.com/">
<StaticImage className=""
alt="Shawshank Redemption by Stephen King - All In 60 Seconds" src="../../static/assets/shawshank.jpg" />
</a> */}


<div>
<Link title="They Live by John Carpenter - All In 60 Seconds"  to="/they-live/" className="navbar-item  button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<StaticImage className=""
alt="They Live by John Carpenter - All In 60 Seconds" src="../../static/assets/TheyLive-Header.jpg" />
</Link>
</div>


{/* <a href="https://tron.allin60.com/">
<StaticImage className=""
alt="Pulp Fiction by Quentin Tarantino - All In 60 Seconds" src="../../static/assets/pulpfiction.jpg" />
</a> */}


<div>
<Link title="They Live by John Carpenter - All In 60 Seconds"  to="/mystery-science-theater-3022/" className="navbar-item  button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<StaticImage className=""
alt="Mystery Science Theater 3000 - All In 60 Seconds" src="../../static/assets/mystery-science.jpg" />
</Link>
</div>


   
</div>
</div>

          




    
    
    </Layout>
    </CustomBox>
  )
}
