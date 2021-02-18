import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
const Infa = () => {

const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bae3.png" }) {
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
        <InfaSection>
        <InfaContainer
         className="container"
         data-sal="fade"
  data-sal-delay="300"
  data-sal-easing="ease">
          <div>
            <h1>Ready to get <b>your</b> limited lipsticks?</h1>
            <p>
            Morbi sed nisl convallis, vulputate enim at, viverra nibh. Praesent <strong>tempus quis augue et efficitur</strong>. Maecenas condimentum cursus est, at iaculis erat tincidunt vitae. Vestibulum eget scelerisque ex.
            <br/>
            <br/><b>Sed tincidunt sit</b> amet arcu a ornare. <br/>
            <br/><b>Cras rutrum ipsum</b> eget sapien eleifend, eu varius dui.<br/>
            <br/><b>Sed dictum laoreet nibh</b>, et lacinia lectus cursus quis.     </p>
          
          </div>
 
            <InfaImg fluid={data.placeholderImage.childImageSharp.fluid}/>

           
        </InfaContainer>
      </InfaSection>
    )
}

export default Infa
const InfaImg = styled(Img)`
width: 120%;

@media (max-width: 790px){
     
      width: 80%;
      margin: auto;
 } `

const InfaSection = styled.section`
 margin: 2rem 0;
 margin-bottom: 0;

 margin-top: 0;
min-height: 100vh;
background-color: #CCEBE8;
padding-top: 3rem;
padding-bottom: 3rem;
  h1 {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
   }
  
 p {
    margin: 1rem 0;
    font-family: 'Telex', sans-serif;
    margin-bottom: 4rem;
    font-size: clamp(0.2rem, 3.5vw, 1.2rem);
  }


   @media (max-width: 700px){
   p{
       margin-bottom: 2rem;
    }
   }  `

const InfaContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: center;
    justify-content: center;
 
    
   b{
       font-weight: 600;
       color: #FF4034;
   }

   strong{
       color: #597D00;
       font-weight: 600;
   }
max-height: 100%;
padding: 0rem calc((100vw - 1300px) / 2);

padding-left: 0.8rem;
    @media (max-width: 910px) {
      
      grid-template-columns: 1fr;
      text-align: center;
    
  
    InfaContainer div:first-child {
      order: 2;
    }
  
    InfaContainer div:nth-child(2) {
      order: -1;
    }
  
  }
      `

