
import * as React from "react"


import { BsArrowsFullscreen } from "react-icons/bs"
// import { navigate } from "gatsby";




function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

   
const FullScreen = () => (






<button  aria-label="Full Screen Mode" title="Go Full-Screen" className="fullscreenButt txtshadow" onClick={toggleFullScreen} style={{position:'relative', top:'', right:'', fontSize:'3vh', color:'', textShadow:'2px 2px 2px, #000', padding:'0 1vw', zIndex:'11', border:'0px solid blue', filter:'dropShadow((px 15px 15px) rgba(0,0,0, .99))'}}><BsArrowsFullscreen /></button>





  
)

export default FullScreen