import styled from 'styled-components';
import { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const SliderContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
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
  transform: translateY(-50%);
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

const _Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 70%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.gray3};
`;

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div style={{ position: 'relative' }}>
      <SliderContainer>
        {images.map((imageUrl, index) => (
          <SliderImage
            key={imageUrl}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          />
        ))}
      </SliderContainer>
      <_BallWrapper>
        {images.map((imgUrl, idx) => (
          <_Ball onClick={() => setCurrentSlide(idx)} />
        ))}
      </_BallWrapper>
      <PrevButton onClick={handlePrevSlide}>Prev</PrevButton>
      <NextButton onClick={handleNextSlide}>Next</NextButton>
    </div>
  );
};
