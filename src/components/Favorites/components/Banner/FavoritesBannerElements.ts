import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

interface BannerTextProps {
    top: number;
}

export const BannerText = styled.span<BannerTextProps>`
  position: absolute;
  top: ${p => p.top}px;
  z-index: 1;
  color: white;
  font-size: 48px;
  margin: 0;
  font-style: normal;
  font-weight: 800;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;



interface ImageProps {
    width: number;
    height: number;
}

export const ImageContainer = styled.div<ImageProps>`
  position: relative;
  background: black;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  object-fit: cover;
`;

export const Image = styled.img<ImageProps>`
  position: relative;
  opacity: 0.85;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  object-fit: cover;
`;
