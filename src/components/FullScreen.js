
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






<button title="Go Full-Screen" className="fullscreenButt" onClick={toggleFullScreen} style={{position:'', top:'', right:'', fontSize:'5vh',padding:'', zIndex:'55', border:'0px solid blue'}}><span className="" style={{padding:''}}><BsArrowsFullscreen /></span> {" "}</button>





  
)

export default FullScreen