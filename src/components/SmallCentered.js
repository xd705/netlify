import {
    Box,
    chakra,
    Container,
    Image,
    Link,
    Stack,
    Flex,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  import Logo from "./logo.gif";
  
  
  
  export default function SmallCentered() {
    return (
      // <Box
      //   bg={useColorModeValue('gray.50', 'gray.900')}
      //   color={useColorModeValue('gray.700', 'gray.200')}>
      //   <Container
      //     as={Stack}
      //     maxW={'6xl'}
      //     py={4}
      //     spacing={4}
      //     justify={'center'}
      //     align={'center'}>
      //       <Flex justify="space-between" width="13%" align="center" direction="column">
      //   <Image borderRadius="150px" boxSize="50px" src={Logo} alt="MzTz Logo" />
      //   <Text className="text-white text-2xl ml-2" >MozziTozzi</Text>
      //  </Flex>
      //     <Stack direction={'row'} spacing={6}>
      //       <Link href={'#'}>Home</Link>
      //       <Link href={'#'}>About</Link>
      //       <Link href={'#'}>Blog</Link>
      //       <Link href={'#'}>Contact</Link>
      //     </Stack>
      //   </Container>
  
      //   <Box
      //     borderTopWidth={1}
      //     borderStyle={'solid'}
      //     borderColor={useColorModeValue('gray.200', 'gray.700')}>
      //     <Container
      //       as={Stack}
      //       maxW={'6xl'}
      //       py={4}
      //       direction={{ base: 'column', md: 'row' }}
      //       spacing={4}
      //       justify={{ base: 'center', md: 'space-between' }}
      //       align={{ base: 'center', md: 'center' }}>
      //       <Text color="black">© 2023 MozziTozzi NFT, with ❤️...  xd705.</Text>
      //       <Text>All rights reserved</Text>
       
      //     </Container>
      //   </Box>
      // </Box>
      <Flex justify="space-around" align="center" paddingBottom="20px" bgGradient="linear(to-r, gray.700, pink.300, gray.500 40%)" width= "maxW" height="60px">
        <Box width="200px">
      <Text color="black" >© 2023 MozziTozzi NFT. With ❤️...  xd713.</Text>
      </Box>
            <Box justify="space-between" width="30%" align="center" direction="column" paddingRight="150px">
        <Image borderRadius="150px" boxSize="50px" src={Logo} alt="MzTz Logo" />
        <Text className="text-white text-2xl ml-2" color="black">MozziTozzi</Text>
       </Box>
        
  
        <Box>
            <Text color="black">All rights reserved</Text>
        </Box>
       </Flex>
    );
  }

  