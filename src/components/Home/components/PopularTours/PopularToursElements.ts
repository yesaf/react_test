import styled from 'styled-components';

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border: 0;
  background-color: black;
  border-radius: 50%;
  margin: 0;
  justify-self: center;
  align-self: center;
`;

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const TopBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  @media (min-width: 800px) and (max-width: 1200px) {
    width: ${390*2 + 20*2}px;
  }
  @media (min-width: 1200px) {
    width: ${390*3 + 20*3}px;
  }
`;

export const Heading = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

export const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-content: center;
`;

export const NavButton = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 30px;
  margin: 10px;
  border: 0;
  background: #ECECEC;
  &:active {
    opacity: 0.3;
  }
`;
