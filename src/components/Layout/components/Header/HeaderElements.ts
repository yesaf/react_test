import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  top: 0;
  background-color: black;
  opacity: 0.85;
  z-index: 9999;

  &:hover {
    opacity: 1;
  }
`;

export const Logo = styled.img`
  width: 240px;
  height: 60px;
  justify-self: flex-start;
`;

export const MainLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

interface LinkProps {
    $isActive?: boolean;
}

export const HeaderLink = styled(Link)<LinkProps>`
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  color: white;
  font-size: 22px;
  margin: 10px;
  text-decoration: ${p => (p.$isActive ? "underline" : "none")};
  
  &:active {
    opacity: 0.5;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  & svg {
    -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
    filter: invert(100%);
  }
`;

export const SignInButton = styled(HeaderLink)`
  background-color: #266dd3;
  border-radius: 10px;
  font-size: 20px;
  text-transform: uppercase;
  padding: 5px 10px;
`;


