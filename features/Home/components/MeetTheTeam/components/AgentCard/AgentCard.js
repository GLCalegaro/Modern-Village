import { Box, Image, Text } from "@chakra-ui/react";

const AgentCard = ({ name, title, image, description }) => {
  return (
    <Box
      backgroundColor="#f1f1f14c"
      padding="2rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginBottom={{ base: "1rem", sm: "0" }}
      textAlign="center"
    >
      <Image
        src={image}
        width="14rem"
        height="10rem"
        objectFit="cover"
        borderRadius="full"
        marginBottom="1rem"
        shadow="lg"
      />
      <Text color="#64CEC0" fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <Text fontSize="lg" color="#84CEC0">
        {title}
      </Text>
      <Text fontSize="md" fontWeight="light" noOfLines="4" marginTop="1rem" color="gray.600">{description}</Text>
    </Box>
  );
};

export default AgentCard;
