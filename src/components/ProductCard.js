import React from 'react'
import styled from 'styled-components'
import Image from './Image'

const ProductCard = ({
    id,
    imgStart,
    topLine,
    headline,
    description,
    seconddescription,
    thirddescription,
    fourthdescription,
    src,
    alt,
    price,
    secondprice,
    thirdprice,
    fourthprice
}) => {





    return (
        <InfoContainer id={id}>
            <InfoWrapper
            data-sal="slide-down"
            data-sal-delay="300"
            data-sal-easing="ease">
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading>{headline}</Heading>
                        <Subtitle>{description}</Subtitle>
                        <ProductPrice>{price}</ProductPrice>

                        <Subtitle>{seconddescription}</Subtitle>
                        <ProductPrice>{secondprice}</ProductPrice>

                        <Subtitle>{thirddescription}</Subtitle>
                        <ProductPrice>{thirdprice}</ProductPrice>

                        <Subtitle>{fourthdescription}</Subtitle>
                        <ProductPrice>{fourthprice}</ProductPrice>

                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Image imgsrc={src} alt={alt} />
                   </ImgWrap></Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default ProductCard

const ProductPrice = styled.p`
padding-top: 0.8rem;
margin-bottom: 35px;
max-width: 440px;
font-weight: 600;
line-height: 24px;
color: #000;
font-family: 'Telex', sans-serif;
font-size: clamp(1rem, 2.5vw, 1.5rem);`

const InfoContainer = styled.div`
color: #fff;
min-height: 100vh;
padding-top: 6rem;
background-color: #FFF6F7;
@media screen and (max-width: 768px){
    padding: 100px 0;
}`

const InfoWrapper = styled.div`
display: grid;
z-index: 1;

width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;`

const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'` };
grid-gap: 6rem;
@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` };
    grid-gap: 0rem;
}
`

const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;`

const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 0px;
color: #000;`
const TopLine = styled.div`
color: #00AB39;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
font-family: 'Averia Serif Libre', cursive;
`

const Heading = styled.h1`
margin-bottom: 24px;
font-size: clamp(2rem, 4vw, 8rem);
line-height: 1.1;
font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: #444;
    
`

const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
margin: 0;
line-height: 24px;
color: #000;
font-family: 'Telex', sans-serif;
font-size: clamp(1rem, 2.5vw, 1.5rem);
`

const ImgWrap = styled.div`
max-width: 420px;
height: 100%;
z-index: -1;
transform: scale(1.3);


@media screen and (max-width: 1100px){
  max-width: 80%;
  }

@media screen and (max-width: 768px){
  max-width: 70%;
  }
`
