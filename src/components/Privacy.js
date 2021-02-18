import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Privacy = () => {
    
const data = useStaticQuery(graphql`
query {
  placeholderImage: file(relativePath: { eq: "bae-2.png" }) {
    childImageSharp {
      fluid(maxWidth: 600) {
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
     
        <PrivacySection>
            <PrivacyContainer
         className="container"
         data-sal="fade"
  data-sal-delay="300"
  data-sal-easing="ease">
           <PrivacyImg fluid={data.placeholderImage.childImageSharp.fluid}/>
<div>
                   <h1>You have to start somewhere. Start with getting lashes</h1>
 
           <li> Quick and simple make up </li>
           <li> This is all about our cosmetics </li>
           <li> Try out our new series with a unique coupon sale up to 90%!</li>
           <li> Morbi sed nisl convallis, vulputate enim at, viverra nibh</li>
           <li> Praesent tempus quis augue et efficitur. </li>
          
            </div>
 
           
           
        </PrivacyContainer>
      </PrivacySection>
    )
}

export default Privacy


const PrivacyImg = styled(Img)`
width: 110%;
@media (max-width: 790px){
     
      width: 80%;
      margin: auto;
 } `

const PrivacySection = styled.section`
 margin: 2rem 0;
 margin-bottom: 0;

 margin-top: 0;
min-height: 100vh;
padding-top: 3rem;
padding-bottom: 3rem;
background: #FC466B;  /* fallback for old browsers */
background: -webkit-linear-gradient(89.72deg, #F04393 -4.98%, #EEF3D2 74.68%); 
background: linear-gradient(89.72deg, #F04393 -4.98%, #EEF3D2 74.68%); 

  h1 {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-family: 'Raleway', sans-serif;
   text-align: left;
   font-weight: 900;
   
@media (max-width: 790px){
     
    text-align: center;
}
  }
  
 li {
     color: #000;
    margin: 1rem 0;
  
font-family: 'Averia Serif Libre', cursive;
    font-size: clamp(0.2rem, 3.5vw, 1.2rem);
  
-webkit-transition: all .4s ease-in-out;
-moz-transition: all .4s ease-in-out;
-o-transition: all .4s ease-in-out;
transition: all .4s ease-in-out;
  
@media (max-width: 790px){
     
     text-align: center;
 }
  }
  li::marker {
    font-size: 1.5em;
  content: url(/heart.svg);
  content: url(#heart);
  content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='24' width='24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='hotpink' stroke='black' stroke-width='3'/></svg>");
}
 li:hover{

transform:scale(1.1);
}
   @media (max-width: 700px){
   p{
       margin-bottom: 2rem;
    }
   }  `

const PrivacyContainer = styled.div`
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
padding: 0rem calc((100vw - 1300px) / 2);

padding-left: 0.8rem;
    @media (max-width: 700px) {
      
      grid-template-columns: 1fr;
      text-align: center;
    
  
    PrivacyContainer div:first-child {
      order: 2;
    }
  
    PrivacyContainer div:nth-child(2) {
      order: -1;
    }
  
  }
      `

