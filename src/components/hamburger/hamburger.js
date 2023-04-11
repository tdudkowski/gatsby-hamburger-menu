import React, { useState} from "react"
import Links from "./links"
import styled from "styled-components"

const StyledNavigation = styled.div`
  display: flex;
  height: 3rem;
  z-index: 10;
`;

const StyledHaburgerBox = styled.div`
cursor: pointer;
padding: 2rem;
z-index: 20;

@media (min-width: 800px) {
  display: none;
}
`;

const StyledHamburger = styled.div`
background-color: #111;
width: 30px;
height: 3px;
transition: all .3s linear;
align-self: center;
position: relative;
transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

::before,
::after {
  width: 30px;
  height: 3px;
  background-color: #111;
  content: "";
  position: absolute;
  transition: all 0.3s linear;
}

::before {
  transform: ${props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
  top: -10px;
}

::after {
  opacity: ${props => (props.open ? "0" : "1")};
  transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
  top: 10px;
}
`;

const StyledNavbox = styled.nav`
position: relative;
width: 100%;
transition: all 0.3s ease-in;
left: ${props => (props.open ? "-100%" : "0")};
& ul {display: flex; flex-direction: column;}

@media (min-width: 800px) {
    & ul {flex-direction: row; justify-content: space-evenly;}
    left: 0;
}
`;

const HamburgerMenu = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    return (
        <StyledNavigation>
            <StyledHaburgerBox hamburgerOpen={hamburgerOpen} onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            {hamburgerOpen ? <StyledHamburger open /> : <StyledHamburger />}
            </StyledHaburgerBox>

            {hamburgerOpen ? (<StyledNavbox onClick={() => setHamburgerOpen(!hamburgerOpen)}><Links /></StyledNavbox>) : (<StyledNavbox open><Links/></StyledNavbox>)}
        </StyledNavigation>
    )
}

export default HamburgerMenu