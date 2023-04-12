import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { GiHouse } from "react-icons/gi";
import { navigationLinks } from "../../navigation.Consts";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigationMobile = () => {
  return (
    <Box
      color="#64CEC0"
      padding="2rem"
      backgroundColor="white"
      //Breakpoint mobile
      display={{ base: "block", md: "none" }}
      //Inner Container
    >
      {/* Logo & name on the left & navigation links on the oposite side of the navigation bar */}
      
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="3" alignItems="center">
              <GiHouse size="30" />
              <Text fontSize="2xl" fontWeight="bold">
                Modern Village
              </Text>
            </Box>
          </Link>
          <Menu>
            <MenuButton 
            as={IconButton} 
            aria-label="Options" 
            icon={<HamburgerIcon />}
            variant="outline"
            borderColor='#ccd0d5'
  color='#4b4f56'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
            />
            <MenuList >
              {navigationLinks.map((item) => (
                <NavigationLink key={item.title} {...item} />
              ))}
            </MenuList>
          </Menu>
        </Flex>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem >
    </Link>
  );
};
