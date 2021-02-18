import React from 'react'
import styled from "styled-components"
import {Link} from 'gatsby'
import Logo from './Logo'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <Logo/>
                    <h1>CosmeticsCompany</h1>
                    <p>Wear confidence like makeup. <br/>@All used photos and videos are from  Unsplash, HiClipart, Pixabay, Pexels  </p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/'><b>Phone:</b> <br/> +380962233111 <br/> +380509988321</FooterLink>
                    <FooterLink to='/'><b>Instagram</b>: <br/> @instagramcosmetics_prot</FooterLink>
                    <FooterLink to='/'><b>Facebook:</b> <br/> @facebookcosmetics_prot</FooterLink>
                    <FooterLink to='/'><b>Address:</b> <br/>Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Privacy</FooterLinkTitle>
                    <FooterLink to='/'>Terms & Conditions</FooterLink>
                    <FooterLink to='/'>Privacy Policy</FooterLink>
                    <FooterLink to='/'>Certificates</FooterLink>

                </FooterLinkItems>
              
                <FooterLinkItems>
                    <FooterLinkTitle>Quick Links</FooterLinkTitle>
                    <FooterLink to='/'>Contacts</FooterLink>
                    <FooterLink to='/'>Price List</FooterLink>
                    <FooterLink to='/'>About Company</FooterLink>
                    <FooterLink to='/'>Sales</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer


const FooterContainer = styled.div`
padding: 3rem calc((100vw - 1100px) / 2);
display: grid;
grid-template-columns: repeat(2, 1fr);
color: #FFF;
background: #f84e77;

@media screen and (max-width:450px){
    grid-template-columns: repeat(1, 1fr);
}
`
const FooterDesc = styled.div`
padding: 0 2rem;
font-family: 'Raleway', sans-serif;
 
h1{
    font-size: clamp(0.5rem, 7vw, 1.7rem);
   
    margin-bottom: 2rem;
    color: #F7F5DD;
    font-family: 'Raleway', sans-serif;
  font-weight: 400;
}
p{
    font-family: 'Telex', sans-serif;
 
    font-size: 15px;
}
@media screen and (max-width: 400px){
    padding: 1rem;
    }

    @media screen and (max-width: 300px){
    padding: 0;
}
`

const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);

@media screen and (max-width: 940px){
    grid-template-columns: 1fr;
}
`
const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 550px){
    padding: 1rem;
}

@media screen and (max-width: 300px){
    padding: 0;
}
`

const FooterLinkTitle = styled.h2`
font-size: clamp(0.5rem, 7vw, 1.7rem);
   
margin-bottom: 16px;
font-family: 'Raleway', sans-serif;
 
`

const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
color: #FFF;
font-family: 'Telex', sans-serif;
 
&:hover{
    color: #F7F5DD;
    transition: 0.3s ease-out;
}
`

