import { useQuery } from '@apollo/client';
import { Box, Flex, useColorModeValue, Text, Image } from '@chakra-ui/react';
import { LargeButton } from 'components/base';
import { SG721, TokensMint } from 'components/types';
import { TOKENS } from 'config';
import React, { useMemo } from 'react';
import { getHttpUrl } from 'utils';

export const Hero = ({
  collectionAddr,
  collectionInfo,
  mintBoxRef,
}: {
  collectionAddr: string;
  collectionInfo: SG721;
  mintBoxRef: React.RefObject<HTMLDivElement>;
}) => {
  const minterAddress = collectionInfo.minter;
  const sg721Address = collectionAddr;

  const tokensQuery = useQuery<TokensMint>(TOKENS, {
    variables: { collectionAddr, limit: 10 },
  });

  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const titleColor = useColorModeValue('#697584', '#A7B4C2');

  const url = 'https://ipfs-gw.stargaze-apis.com/ipfs/bafybeibv3qytwd7n6vpmyng72ttk6wps46f42mvonigzgzdf63arlngcni/locality.png'

  const handleClick = () => {
    mintBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <Flex w="100%" h="460px" mb="100px" py="85px" px="24px" gap="20px">
      <Flex flex="1 1 100%" flexDir="column">
        <Text
          fontWeight="600"
          fontSize="48px"
          color={statColor}
          lineHeight="shorter"
          w="80%"
          mb="18px"
        >
          {collectionInfo.name}
        </Text>
        <Text
          w="85%"
          fontWeight="400"
          fontSize="16px"
          lineHeight="shorter"
          color={titleColor}
        >
          {(collectionInfo.description.length || 0) > 200
            ? collectionInfo.description.slice(0, 200) + '...'
            : collectionInfo.description}
        </Text>
        <Box mt="auto">
          <LargeButton
            width="260px"
            btnContent="Mint Now"
            handleClick={handleClick}
          />
        </Box>
      </Flex>

      <Box position="relative" flex="1 1 100%">

          return (
            <Image
              key={url}
              position="absolute"
              alt=""
              boxSize="180px"
              borderRadius="6px"
              src={getHttpUrl(url)}
            />
          );
     </Box>
    </Flex>
  );
};
