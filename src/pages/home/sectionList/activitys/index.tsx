import { activitys } from '@/constants/activity';
import styled from 'styled-components';
import { _Text } from '@/components/Text';
import { ImageSlider } from '@/components/ImageSlider';

export const Activitys = () => {
  return (
    <_Wrapper>
      {activitys
        .map((activity, idx) => (
          <div>
            <_Title weight="medium" size="24px">
              {idx + 2021}년
            </_Title>
            {activity.map((activityItem) => {
              return (
                <CardWrapper>
                  <ImageWrapper>
                    <ImageSlider width="300px" images={activityItem.imgs} />
                  </ImageWrapper>
                  <ContentWrapper>
                    <Title>{activityItem.title}</Title>
                    <ImageDescription>
                      {activityItem.description}
                    </ImageDescription>
                  </ContentWrapper>
                </CardWrapper>
              );
            })}
          </div>
        ))
        .reverse()}
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.gray300};
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  :hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 0 10px 10px 0;
  padding: 24px;
  width: 50%;
`;

const ImageDescription = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
`;

const _Title = styled(_Text)`
  margin-bottom: 29px;
`;
