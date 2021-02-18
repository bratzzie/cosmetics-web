import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Home = () => {

const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bae-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  
    return (
        <HomeSection>
        <HomeContainer
         className="container">
          <div  data-sal="slide-down"
  data-sal-delay="300"
  data-sal-easing="ease">
            <h1>Even on a bad day, there is always lipstick</h1>
            <p>Ready? <b>Special Spring Collection</b> is already on its way. Make sure 
              you've tried your destiny and won a super prize!
            </p>
            <Button  round="true"
         big="true" primary="true" 
       to="/#signin">GIVE IT ME NOW</Button>
          </div>
 
            <HomeImg fluid={data.placeholderImage.childImageSharp.fluid}/>

           
        </HomeContainer>
      </HomeSection>
    )
}

export default Home
const HomeImg = styled(Img)`
width: 100%;
width: 580px;


@media (max-width: 920px){
     
     width: 60%;
     margin: auto;
}

@media (max-width: 790px){
     
      width: 80%;
      margin: auto;
 } `

const HomeSection = styled.section`
margin: 2rem 0;
margin-bottom: 0;
color: #fff;

margin-top: 0;
margin-top: -8rem;
min-height: 120vh;
background: #FC466B;  /* fallback for old browsers */
background: -webkit-linear-gradient(85.95deg, #D73AA7 -3.75%, #FF4A75 52.22%, #FF8255 95.7%);  /* Chrome 10-25, Safari 5.1-6 */

background: linear-gradient(85.95deg, #D73AA7 -3.75%, #FF4A75 52.22%, #FF8255 95.7%); 
 h1 {
    font-size: clamp(1.8rem, 6vw, 4rem);
    font-family: 'Raleway', sans-serif;
  }
  
 p {
    margin: 1rem 0;
     margin-bottom: 4rem;
    font-size: clamp(0.2rem, 3.5vw, 1.2rem);
    font-family: 'Telex', sans-serif;
  }

  b{
    color: #A30031;
  }
   @media (max-width: 700px){
   p{
       margin-bottom: 2rem;
    }
   }  `

const HomeContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: center;
    justify-content: center;


max-height: 100%;

padding-top: 10rem !important;
padding-bottom: 3rem !important;
padding-left: 0.8rem;
    @media (max-width: 910px) {
      
      grid-template-columns: 1fr;
      text-align: center;
    
  
    HomeContainer div:first-child {
      order: 2;
    }
  
    HomeContainer div:nth-child(2) {
      order: -1;
    }
  
  }
      `

