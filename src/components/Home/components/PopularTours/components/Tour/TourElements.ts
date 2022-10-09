import styled from 'styled-components';

interface ContainerProps {
    width: number;
    height?: number;
}

export const PaddingContainer = styled.div`
  padding: 9px;
`;

export const TourContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: ${p=> p.width}px;
  height: ${p => p.height}px;
  border: 1px solid #D3EAFF;
`;

export const Title = styled.h3`
  font-style: normal;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 24px;
  color: #1E1E1E;
  
  display: flex;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
`;

export const Subtitle = styled.span`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  justify-content: center;
  text-align: center;

  color: #556B84;
`;


export const ImageContainer = styled.div`
  position: relative;
`;

export const BgContainer = styled.div<ContainerProps>`
  overflow: hidden;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  margin: 0;
  padding: 0;
`;

interface ImageProps {
    src: string;
    width: number;
    height: number;
}

export const ImageBg = styled.img<ImageProps>`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  object-fit: cover;
  backdrop-filter: blur(5px);
  -webkit-filter: blur(5px);
`;

export const Image = styled.img<ImageProps>`
  position: absolute;
  top: 0;
  z-index: 1;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  object-fit: contain;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  padding: 0;
  width: 350px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const BuyAction = styled.button`
  display: flex;
  background: #D3EAFF;
  border: 0;
  width: 278px;
  height: 53px;

  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  &:active {
    opacity: 0.4;
  }
`;

export const LikeAction = styled.button`
  width: 53px;
  height: 53px;

  background: #ECECEC;
  padding: 0;
  border: 0;

  &:active {
    opacity: 0.4;
  }
`;

