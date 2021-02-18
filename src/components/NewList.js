import React from 'react'
import './test.css'
import styled from 'styled-components'
import NewElement from './NewElement'

const NewListSection = styled.section`
  background-color: #FFE3E8;
margin: 2rem 0;
margin-bottom: 0;
margin-top: 0;

position: relative;
    padding-bottom: calc((100vw - 1300px) / 2);
    padding-top: 2rem;
 min-height: 100vh;

 @media (max-width: 700px){
   
      padding-bottom: 3rem;
    }
 
 `
const NewListWrapper = styled.div`

  display: table;
 

`

const NewListInner = styled.div`
 display: table-cell;
 vertical-align: middle;`


const NewListHeader = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
	line-height: 1;
	text-align: center;
	padding: 3.5rem 0;
  padding-bottom: 0.5rem;
	color: #1a1a1a;
    font-size: clamp(1.8rem, 6vw, 4rem);

    i{
      
font-family: 'Averia Serif Libre', cursive;
    font-size: clamp(0.5rem, 4vw, 1.5rem);
line-height: 16px;
color: #94697B;
    }
`

const Test = () => {
    return (
      <NewListSection>
        <NewListWrapper className="container">
  <NewListInner>
    <NewListHeader>Limited Series Products <br/>
    <i>Only 3000 per worldwide. Don't miss your chance!</i></NewListHeader>
    <div className="row" style={{width: '99.9%'}}>
      <NewElement
      
       name="Lorem Ipsum"
       subname="Dala Bum"
       src="new.png"
       alt="Cosmetics Box"
       cost="$52"/>

      <NewElement
       name="Nam posuere"
       subname="Quisque ultricies ipsum nunc
       "
       src="new-3.png"
       alt="Brushes"
       cost="$20"/>

      <NewElement
       name="Cras accumsan purus vel "
       subname="Morbi tristique placerat nibh"
       src="new-2.png"
       alt="Cosmetics Box"
       cost="$48.99"/>
    </div>
  </NewListInner>
</NewListWrapper>
</NewListSection>
    )
}

export default Test
