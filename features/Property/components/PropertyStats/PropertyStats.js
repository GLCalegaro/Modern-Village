import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { FaBath } from "react-icons/fa";
import { IoIosBed, IoMdPricetag } from "react-icons/io";
import { TfiRulerAlt2 } from "react-icons/tfi";

const PropertyStats = ({ rooms, baths, price, sqSize }) => {
  return (
    <>
      <Box backgroundColor="white" padding="1.5rem" marginBottom="1rem">
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          fontSize="xl"
          color="gray.600"
          fontWeight="light"
          gap="1rem"
          justifyContent="space-around"
          alignItems="center"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="0.3rem"
          >
            <Text>BEDS</Text>
            <Flex alignItems="center" gap="0.5rem">
              <IoIosBed />
              {rooms}
            </Flex>
          </Flex>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="0.3rem"
          >
            <Text>BATHS</Text>
            <Flex alignItems="center" gap="0.5rem">
              <FaBath />
              {baths}
            </Flex>
          </Flex>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="0.3rem"
          >
            <Text>SIZE</Text>
            <Flex alignItems="center" gap="0.5rem">
              <TfiRulerAlt2/>
              {sqSize}
              <sup>m²</sup>
            </Flex>
          </Flex>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="0.3rem"
          >
            <Text>PRICE</Text>
            <Flex alignItems="center" gap="0.5rem">
              <IoMdPricetag/>
              {price}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default PropertyStats;
