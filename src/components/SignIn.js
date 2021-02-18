import React from 'react'
import styled from "styled-components"
import Form from './Form'

const SignIn = () => {
    return (
        <SignInSection id="signin">
        <div className="container">
        <div className="row">
        <div className="col-sm-12">
            <SignInWrapper>
                <h2>GET YOUR INDIVIDUAL SALE UP TO 85% OFF <br/> OR WIN A SUPERPRISE</h2>
           
            <Form/>
            </SignInWrapper>
        </div>
        </div>
        </div>
        </SignInSection>
    )
}

export default SignIn

const SignInSection = styled.section`
 padding: 80px 0;
  background: #f84e77;

 `
const SignInWrapper = styled.div`

  max-width: 650px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2; 
  h2 {
  font-size: 27px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 40px; 
  font-family: 'Raleway', sans-serif;
    font-weight: 900;
    letter-spacing: 2px;
  }

  `