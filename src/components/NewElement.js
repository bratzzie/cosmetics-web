import React from 'react'
import styled from 'styled-components'
import Image from './Image'


const NewElement = ({    
    name,
    subname,
    src,
    alt,
    cost}) => {
    return (
        <ElementWrapp>
        <TopCont>
            <ImageWrap className="img" ><Image imgsrc={src} alt={alt} /></ImageWrap>
              
             <div className="img-info">
            <InfoWrapper>
              <InfoName>{name}</InfoName>
              <InfoDetail>{subname}</InfoDetail>
            </InfoWrapper>
          </div>
        </TopCont>

        <BottomCont>
          <PriceWrap>
            <Price>{cost}</Price>
           
          </PriceWrap>
        </BottomCont>
      </ElementWrapp>
    )
}

export default NewElement


const ElementWrapp = styled.div`
    width: 360px;
    padding: 35px;
    margin: 15px auto;
    background-color: transparent;
    border-radius: 20px;
    -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.1) ;
          box-shadow: 0 2px 5px rgba(0,0,0,.1) ;
    @media (max-width: 991px) {
      width: 345px;
  }
  
  @media (max-width: 767px) {
      width: 205px;
      margin: 30px auto;
    
  }
  
`
const BottomCont = styled.div`
   width: 100%;
    height: 60px;
    position: relative;
    overflow: hidden;`
    
const TopCont = styled.div`
    width: 100%;
    height: 350px;
    position: relative;
    overflow: hidden;
    text-align: center;
    
    @media (max-width: 767px) {
      height: 250px;
  }
    .img {
   

    -webkit-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
    -moz-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
    -o-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
    transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
    /* ease-out */
    -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
    -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
    -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
    transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
    /* ease-out */

    :hover{
      transform: translateY(-10%);
    }
  }`
const ImageWrap = styled.div`

Img{
  width: 100%;
    background-image:
    linear-gradient(
      180deg, 
      rgba(238, 243, 210, 0),
      rgba(238, 243, 210, 0) 15%,
      #f4c4f3 15%,
      #f4c4f3 90%,
      rgba(238, 243, 210, 0) 0%
    );
}

`
  const InfoWrapper = styled.div`
   -webkit-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
    -moz-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
    -o-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
    transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
    /* ease-out */
    -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
    -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
    -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
    transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
    /* ease-out */
    position: absolute;
    width: 100%;
    bottom: 25px;`

const InfoName = styled.span`
    display: block;
    font-family: 'Telex', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #6f3c83;`

const InfoDetail = styled.span`
 display: block;
 font-family: 'Telex', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    color: #94697B;`

const PriceWrap = styled.div`
 display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-family: 'Telex', sans-serif;
     font-weight: 600;`

const Price = styled.span`
display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 36px;
    color: #252525;`