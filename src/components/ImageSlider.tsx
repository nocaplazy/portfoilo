import styled from 'styled-components';
import { useState } from 'react';
import { UnLabeledArrow } from '@/assets/UnLabeledArrow';

interface ImageSliderProps {
  images: string[];
  width?: string;
}

const SliderContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  align-items: center;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  /* transform: translateY(-50%); */
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0;
`;

const _BallWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
`;

const _Ball = styled.div<{ isCurrent: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 70%;
  cursor: pointer;
  background-color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.color.point : theme.color.gray300};
`;

export const ImageSlider = ({ images, width }: ImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <_Wrapper width={width}>
      <SliderContainer>
        {images.map((imageUrl, index) => (
          <SliderImage
            key={imageUrl}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          />
        ))}
        <PrevButton onClick={handlePrevSlide}>
          <UnLabeledArrow direction="left" />
        </PrevButton>
        <NextButton onClick={handleNextSlide}>
          <UnLabeledArrow />
        </NextButton>
      </SliderContainer>
      <_BallWrapper>
        {images.map((imgUrl, idx) => (
          <_Ball
            isCurrent={idx === currentSlide}
            onClick={() => setCurrentSlide(idx)}
            key={idx}
          />
        ))}
      </_BallWrapper>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
`;
