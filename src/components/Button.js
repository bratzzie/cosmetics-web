import  styled  from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
background: ${({primary}) => (primary ? "#006B64" : "#F7F5DD")};
white-space: nowrap;
padding: ${({big}) => (big ? "16px 40px" : "10px 32px")};

font-size:  ${({big}) => (big ? "20px" : "16px")};
color: ${({primary}) => (primary ? "#FFF" : "#000")};
outline: none;
border: 2px solid #6B0009;
min-width: 100px;
cursor: pointer;
text-decoration: none;
transition: 0.3s !important;
border-radius:  ${({round}) => (round ? "50px" : "none")};
font-weight: 500;
letter-spacing: 3px;
font-family: 'Raleway', sans-serif;
&:hover {
    background: ${({primary}) => (primary ? "#F7F5DD" : "#FFCBFF")};
    transform: translateY(-2px);
   text-decoration: none;
   color: ${({primary}) => (primary ? "#000" : "#FFF")};
}

@media screen and (max-width: 721px){
    padding: ${({big}) => (big ? "10px 22px" : "8px 16px")};
}
`