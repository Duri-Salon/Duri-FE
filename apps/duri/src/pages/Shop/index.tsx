import { useRef, useState } from 'react';

import { MapInfo } from '@duri/components/shop';
import { ShopList } from '@duri/components/shop/ShopList';
import {
  AbsoluteFlex,
  Button,
  DuriNavbar,
  Flex,
  Magnifier,
  Text,
  TextField,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

const Shop = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const [isMap, setIsMap] = useState<boolean>(true);

  const changeMapType = () => {
    setIsMap(!isMap);
  };

  return (
    <>
      <Flex direction="column">
        <SearchWrapper>
          <TextField
            placeholder="경기 성남시 분당구 안양판교로 1192"
            height={46}
            width={336}
            right={<Magnifier width={24} height={24} />}
            isNoBorder={true}
          />
        </SearchWrapper>
        {isMap ? (
          <>
            <MapInfo ref={mapRef} />
          </>
        ) : (
          <ShopList />
        )}
        <ListWrapper>
          <Button
            onClick={changeMapType}
            width="67px"
            height="36px"
            bg={theme.palette.White}
          >
            <Text typo="Body4">목록</Text>
            <div></div>
          </Button>
        </ListWrapper>
      </Flex>
      <DuriNavbar />
    </>
  );
};

export default Shop;

const SearchWrapper = styled(AbsoluteFlex)`
  padding-top: 30px;
  z-index: 99;
  height: fit-content;
`;

const ListWrapper = styled(Flex)`
  position: fixed;
  height: fit-content;
  bottom: 104px;
  left: 17px;
  z-index: 99;
`;
