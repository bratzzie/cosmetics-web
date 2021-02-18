import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import {useStaticQuery, graphql} from 'gatsby'


const Insta = () => {

    const data = useStaticQuery(graphql `
    query TripsQuery {
        allPhotosJson {
          edges {
            node {
              alt
              img {
                childImageSharp {
                  fluid (maxWidth: 500){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      `);
    
    function getPhotos(data){
        const photosArray = [];
        data.allPhotosJson.edges.forEach( (item, index)=> {
            photosArray.push(
                <div className="col-md-3" key={index} >
                     <InstaImg src={item.node.img.childImageSharp.fluid.src}
                    alt={item.node.alt}
                    fluid={item.node.img.childImageSharp.fluid} />
                   </div>
            )
        });
    
        return photosArray;
    }
    
    return (
        <InstaContainer className="container">

        <InstaHeading className="heading">Cosmetics for everyone. Makeup for everyone. 
        <br/><i>@instagramcosmetics_prot 
        <br/>#instagramcosmetics_prot</i></InstaHeading>
    

        <InstaCont className="container">
       
  <div className="row">
  {getPhotos(data)}
      </div>
  
</InstaCont>


       
        </InstaContainer>
    )
}

export default Insta

const InstaImg = styled(Img)`


width: 100%;
height: 300px;
position: relative;

`
const InstaCont = styled.div`
transform: scale(0.75);`

const InstaContainer = styled.div`
	max-width: 100rem;
	margin: 0 auto;
	padding: 0 2rem 2rem;
    min-height: 100vh;
    position: relative;
    padding-bottom: calc((100vw - 1300px) / 2);
    padding-top: 2rem;
    background-color: #FFE3E8;
    `
  
    const InstaHeading = styled.h1`
 	font-weight: 400;
	line-height: 1;
	text-align: center;
	padding: 3.5rem 0;
  padding-bottom: 0;
	color: #1a1a1a;
    font-size: clamp(1.2rem, 5vw, 2.5rem);
    font-family: 'Raleway', sans-serif;
    transform: scale(0.75);
    i{
      
      font-family: 'Averia Serif Libre', cursive;
          font-size: clamp(0.9rem, 4vw, 1.5rem);
          
      
        }

          
`