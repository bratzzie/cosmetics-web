import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const NavItem = styled(Link)`
  text-decoration: none;
  color: #000;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #9BDEAC;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #F7F5DD;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #111;

    :hover {
    color: #03A700;
    ::after {
      display: none;
    }
  }
  }
`

const NavLinks = () => {
  return (
    <>
    
      <NavItem  to="/#aboutvideo">About</NavItem>
      <NavItem  to="/#first">New Products</NavItem>
      <NavItem  to="/#signin">Sale</NavItem>
    </>
  )
}

export default NavLinks