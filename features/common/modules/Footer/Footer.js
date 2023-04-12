import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { services, about, ourOffices, workWithUs } from "./footerConsts";
import Link from "next/link";
import { GiHouse } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Box backgroundColor="gray.700">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        paddingY="3rem"
        paddingX={{ base: "2rem", sm: "0" }}
      >
        <SimpleGrid
          columns="4"
          color="whiteAlpha.700"
          gap="1.7rem"
          minChildWidth="150px"
        >
          <Flex flexDirection="column">
            <FooterHeader title="Services" />
            {services.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="About" />
            {about.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Our Offices" />
            {ourOffices.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Work With Us" />
            {workWithUs.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
        </SimpleGrid>
      </Box>
      <Box
        backgroundColor="gray.800"
        display="flex"
        padding="2rem"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        color="white"
      >
        <Box display="flex" gap="2" alignItems="center">
          <GiHouse />
          <Text fontSize="lg" fontWeight="black">
            Modern Village
          </Text>
        </Box>
        <Text
          display="flex"
          gap="3"
          marginTop="1rem"
          fontSize="xs"
          textAlign="center"
          alignItems="center"
        >
          All rights reserved - Developed by Giovanna Calegaro
          <a href="https://github.com/GLCalegaro">
            <BsGithub fontSize="1.1rem" />
          </a>
          <a href="https://www.linkedin.com/in/giovanna-calegaro-a01775129/">
            <BsLinkedin color="#006097" backgroundColor="white" fontSize="1.1rem" />
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

const FooterLink = ({ name, link }) => {
  return (
    <Text>
      <Link href={link}>{name}</Link>
    </Text>
  );
};

const FooterHeader = ({ title }) => {
  return (
    <Text as="h4" fontWeight="light" fontSize="xl" marginBottom="1rem">
      {title}
    </Text>
  );
};
