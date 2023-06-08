import {
    Box,
    chakra,  
    Image,
    Link,
    Container,
    Stack,
    Flex,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { React } from 'react';
  import Logo from "./logo.gif";
  
  
  
  export default function SmallCentered() {
    
     return (

      <Box
      bg='gray.700'
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
          <Flex direction="column">
        <Text>© 2023 MozziTozzi NFT</Text>
        <Text>With ❤️...  xd713</Text>
        </Flex>
        <Image borderRadius="150px" boxSize="50px" src={Logo} />
        <Text>All rights reserved</Text>
        
      </Container>
    </Box>

     
      // <Flex justify="space-around" align="center"  bgGradient="linear(to-r, gray.700, pink.300, gray.500 40%)" width= "maxW" height="60px">
      //   <Box direction="column">
      // <Text color="black" >© 2023 MozziTozzi NFT.</Text>
      // <Text color="black" >With ❤️...  xd713.</Text>
      // </Box>
      //   <Box>
      //       <Text color="black">All rights reserved</Text>
      //   </Box>
      //  </Flex>
    );
   }

  