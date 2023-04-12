import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsChatLeftQuote } from "react-icons/bs";

const TestimonialCard = ({ name, company, image, testimonial }) => {
  return (
    <Box
      backgroundColor="#ffffff"
      padding="3rem"
      display="flex"
      flexDirection="column"
      marginBottom={{ base: "1rem", sm: "0" }}
    >
      <Box>
        <BsChatLeftQuote size="30" color="#15BCE0" />
      </Box>
      <Text fontSize="lg" color="gray.600" marginY="1.8rem">
        {testimonial}
      </Text>
      <Flex gap="1rem" alignItems="center">
        <Image
          src={image}
          width="6rem"
          height="6rem"
          objectFit="cover"
          borderRadius="full"
        />
        <Box>
          by <Text as="span">{name}</Text>
          <Text fontSize="lg" fontStyle="italic" fontWeight="light" color="gray.700">company - {company}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
