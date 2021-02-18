import React from 'react'
import styled from 'styled-components'
import VideoSrc from '../images/video.mp4'
const Video = () => {
    return (
        <VideoSection id="aboutvideo">

            <VideoWrapper 
            data-sal="slide-down"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={`container`}>
                <VideoHeading >Spring Roses Collection</VideoHeading>
                <VideoSubHead>Buy yourself a present for the 8th March</VideoSubHead>
            <VideoBlock src={VideoSrc} type="video/mp4"
                controls loop muted playsInline 
                style={{border: "10px solid #ee8592", backgroundColor: "transparent"}}>Your browser does not support the video tag.</VideoBlock>
                </VideoWrapper>
        </VideoSection>
    )
}

export default Video
const VideoSection = styled.section`
	max-width: 100rem;
	margin: 0 auto;
	padding: 0 2rem 2rem;
    min-height: 100vh;
    position: relative;
    padding-bottom: calc((100vw - 1300px) / 2);
    padding-top: 2rem;
    background-color: #FDB0B9;
  
    
@media screen and (max-width: 768px){
    min-height: 80vh;
  }
   `
const VideoHeading = styled.h1`

	font-weight: 400;
	line-height: 1;
	text-align: center;
	padding: 3.5rem 0;
    padding-bottom: 0rem;
	color: #1a1a1a;
    font-size: clamp(1.8rem, 6vw, 4rem);
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    color: #fff;
`
const VideoSubHead = styled.h2`
display: block;
font-family: 'Averia Serif Libre', cursive;
font-style: italic;


	letter-spacing: 2px;
    font-size: 30px;
	color: #94697B;
    text-align: center;
    
    font-size: clamp(0.3rem, 3vw, 1.3rem);`
const VideoBlock = styled.video`

width: 100%;
  height: auto;
-o-object-fit: cover;
object-fit: cover;
`
const VideoWrapper = styled.div``