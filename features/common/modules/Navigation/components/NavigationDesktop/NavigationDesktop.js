import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { GiHouse } from "react-icons/gi";
import { navigationLinks } from "../../navigation.Consts";

const NavigationDesktop = () => {
  return (
    //Import div Box from Chakra
    <Box
      color="#64CEC0"
      paddingY="2rem"
      backgroundColor="white"
      //Breakpoint mobile
      display={{ base: "none", md: "block" }}
      //Inner Container
    >
      {/* Logo & name on the left & navigation links on the oposite side of the navigation bar */}
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <GiHouse size="30" />
              <Text fontSize="2xl" fontWeight="black">
                Modern Village
              </Text>
            </Box>
          </Link>
          <Flex gap="12" alignItems="center" fontWeight='bold'>
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
            <Button
              padding="1.5rem"
              colorScheme="teal"
              fontSize="0.9rem"
              fontWeight="semibold"
            >
              CREATE LISTING
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
