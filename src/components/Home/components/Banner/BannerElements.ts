import styled from 'styled-components';

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border: 0;
  background-color: white;
  border-radius: 50%;
  margin: 0;
  justify-self: center;
  align-self: center;
`;

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

interface TextContainerProps {
    top: number;
}

export const TextContainer = styled.div<TextContainerProps>`
  position: absolute;
  top: ${p => p.top}px;
  z-index: 1;
  margin: 0;
`;

interface BannerTextProps {
    fontSize: number;
}

export const BannerText = styled.span<BannerTextProps>`
  color: white;
  font-size: ${p => p.fontSize}px;
  line-height: ${p => p.fontSize}px;
  margin: 0;
  font-style: normal;
  font-weight: 800;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

interface ImageProps {
    image: string;
    width: number;
    height: number;
}

export const ImageNoBg = styled.img.attrs((props: ImageProps) => ({
    src: props.image,
}))<ImageProps>`
  position: relative;
  opacity: 0.85;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  object-fit: cover;
`;

export const ExploreButton = styled.button`
  position: absolute;
  bottom: 20px;
  z-index: 1;
  background-color: transparent;
  border: 0;
  color: white;
  font-size: 24px;
  
  &:active {
    opacity: 0.5;
  }
`;
