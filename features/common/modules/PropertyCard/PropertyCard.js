import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { usePropertyFormat } from "../../Hooks/usePropertyFormat";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { TfiRulerAlt2 } from "react-icons/tfi";
import Link from "next/link";

const PropertyCard = (property) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
  } = usePropertyFormat(property);
  return (
    <Box marginBottom="4rem" backgroundColor="#fff">
      <Link href={`/properties/${externalID}`}>
        <Box
          backgroundImage={`url("${coverPhoto}")`}
          height="250px"
          backgroundPosition="center"
          backgroundSize="cover"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box margin="1rem">
            <Badge colorScheme="green">{purpose}</Badge>
          </Box>
          <Box
            height="50%"
            bgGradient="linear(to-t, #0a0b1cd9, #ffffff00 100%)"
            display="flex"
            alignItems="flex-end"
            padding="1rem"
          >
            <Text fontSize="3xl" fontWeight="medium" color="whiteAlpha.800">
              {price}
            </Text>
          </Box>
        </Box>
        <Box padding="1.5rem">
          <Text fontSize="lg" fontWeight="medium" marginBottom="1rem">
            {propertyType}
          </Text>
          <Text
            fontSize="sm"
            fontWeight="light"
            isTruncated //Mantém os cards na mesma altura
          >
            {address}
          </Text>
          <Text isTruncated>{title}</Text>
          <HStack spacing="1.3rem" marginTop="1rem">
            <Flex alignItems="center" gap="0.3rem">
              <IoIosBed />
              {rooms}
            </Flex>
            <Flex alignItems="center" gap="0.3rem">
              <FaBath />
              {baths}
            </Flex>
            <Flex alignItems="center" gap="0.3rem">
              <TfiRulerAlt2 />
              {sqSize}
              <sup>m²</sup>
            </Flex>
          </HStack>
        </Box>
      </Link>
    </Box>
  );
};

export default PropertyCard;
