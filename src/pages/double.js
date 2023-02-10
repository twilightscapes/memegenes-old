import React, { useState, useRef } from "react";
// import useSiteMetadata from "../hooks/SiteMetadata"
import ReactPlayer from "react-player/lazy";
// import { ImPlay } from "react-icons/im"
// import { StaticImage } from "gatsby-plugin-image"
import Controls from "../components/Controls";
// import {Link} from "gatsby"
import styled from "styled-components"
import Layout from "../components/siteLayout"
// import Chatbot from "../components/Chatbot";
const CustomBox = styled.div`




`

function Double() {

  
  const [state, setState] = useState({
    playing: true,
    controls: true,
    light: false,
    muted: true,
    loop: true,
  });

  const playerRef = useRef(null);
  const controlsRef = useRef(null);

  const {
    playing,
    controls,
    light,
    muted,
    loop,
    played,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };



  return (

    <CustomBox>
<Layout>



<div style={{width:'50vw', overflow:'hidden', height:'40vh', margin:'20vh auto 0 auto', border:'1px solid red'}}>
  Hello world!
{/* <Chatbot /> */}
</div>




      {/* <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />
      <ReactPlayer
            ref={playerRef}
            style={{position:'', zIndex:'0'}}
            width="100%"
            height="100vh"
            // url={iframeUrl}
            url="https://youtu.be/lZzai6at_xA"
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            muted={muted}
            playsinline
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, autoplay:1, controls:0, start:0, end:5000, mute:1  }
              },
            }}
          /> */}




</Layout>



      </CustomBox>
  );
}

export default Double;


// https://youtu.be/NmzuHjWmXOc