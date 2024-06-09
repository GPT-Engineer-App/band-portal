import { Box, Container, VStack, Text, Heading, Flex, Spacer, Button, HStack, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" p={4} align="center">
        <Heading size="md">Band Name</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#home" color="white">Home</Link>
          <Link href="#tour" color="white">Tour</Link>
          <Link href="#contact" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" id="home" bg="brand.700" color="white" py={20} textAlign="center">
        <VStack spacing={4}>
          <Heading size="2xl">Welcome to Our Band</Heading>
          <Text fontSize="lg">We are a passionate group of musicians bringing you the best tunes.</Text>
          <Button colorScheme="teal" size="lg">Listen Now</Button>
        </VStack>
      </Box>

      {/* Tour Dates Section */}
      <Box as="section" id="tour" py={20} textAlign="center">
        <Heading size="xl" mb={10}>Upcoming Tour Dates</Heading>
        <VStack spacing={4}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">City, Country</Text>
            <Text>Date - Venue</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">City, Country</Text>
            <Text>Date - Venue</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">City, Country</Text>
            <Text>Date - Venue</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} textAlign="center">
        <HStack spacing={4} justify="center">
          <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
          <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
          <Link href="https://instagram.com" isExternal><FaInstagram /></Link>
        </HStack>
        <Text mt={4}>© 2023 Band Name. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;