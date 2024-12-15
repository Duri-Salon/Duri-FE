import { useNavigate } from 'react-router-dom';

import { Flex, Text } from '@duri-fe/ui';
import { UseGetGroomerPorfolio } from '@duri-fe/utils';
import styled from '@emotion/styled';

interface PortfolioPhotosProps {
  groomerId: number;
}

export const PortfolioPhotos = ({ groomerId }: PortfolioPhotosProps) => {
  const navigate = useNavigate();

  const moveToPortfolioDetail = (id: number) => {
    navigate(`/portfolio/${groomerId}/${id}`);
  };

  const { data } = UseGetGroomerPorfolio({
    groomerId: groomerId,
  });

  return (
    <Flex>
      {data && data.length > 0 ? (
        <PhotoGrid>
          {data.map((item, index) => (
            <PortfolioInsideImg
              key={item.feedbackId}
              src={item.imageUrl}
              alt={`Porfolio ${index + 1}`}
              onClick={() => moveToPortfolioDetail(item.feedbackId)}
            />
          ))}
        </PhotoGrid>
      ) : (
        <Flex>
          <Text>아직 등록된 포트폴리오가 없어요.</Text>
        </Flex>
      )}
    </Flex>
  );
};

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
`;

const PortfolioInsideImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;