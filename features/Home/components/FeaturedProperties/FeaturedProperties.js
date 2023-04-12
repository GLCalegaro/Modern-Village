import PropertySlider from "./components/PropertySlider/PropertySlider";

const { Box, Text } = require("@chakra-ui/react");

const FeaturedProperties = ({ featuredProperties }) => {
  // console.log(featuredProperties)
  return (
    <Box bgGradient='linear(to-r, white, teal.600)'>
      <Box
        maxWidth="1280px"
        margin="0 auto"
        color="gray.600"
        paddingY={{ base: "3rem", sm: "6rem" }}
      >
        <Text
          fontSize={{ base: "3xl", sm: "4xl" }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
        >
          Discover our Featured Properties
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="light"
          marginTop="1rem"
          marginBottom="3rem"
          paddingX="2rem"
          textAlign='center'
        >
          A selection of our best properties
        </Text>
        <PropertySlider featuredProperties={featuredProperties}/>
      </Box>
    </Box>
  );
};

export default FeaturedProperties;
