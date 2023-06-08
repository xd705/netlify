import {
    Box,
    Spacer,
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
  
  
  
  export default function About() {
    return (

    
      <Box
      p={50} bg="black">
      <Box
      bg="gray.500"
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction='column'
        spacing={5}
        textAlign="left"
        borderRadius="20"
        >
           
          <Text fontFamily="Slackey" fontSize={["2xl", ,"4xl"]} color="blue.300">
                   About ...
               </Text>
               <Text  paddingTop="40px" fontFamily="Open Sans" fontSize={["xl", ,"2xl"]} color="yellow.200" >
                   -MozziTozzi collection live in Ethereum blockchain with total supply of 10,000 MTZs, each of them is unique.
                   </Text>
               <Text   fontFamily="Open Sans" fontSize={["xl", ,"2xl"]} color="yellow.200">
                   -MozziTozzi smart contract is "0xAF48695F5aaBc37525C5F6aD2D185469bC9095d2". Which give's ability to minters to mint up to 5 random MZTs per transaction with less gas fee in total.
                   </Text>
               <Text   fontFamily="Open Sans" fontSize={["xl", ,"2xl"]} color="yellow.200">
                    -MozziTozzi json files are stored permenantly in decentralized IPFS system. 
                   </Text>
               <Text   fontFamily="Open Sans" fontSize={["xl", ,"2xl"]} color="yellow.200">
                    -The exclusive marketplace is Opensea. 
                   </Text>
                
      </Box>
    </Box>

      
  //     <Flex justify="left" align="center" paddingBottom="20px" bgGradient="radial( #88c2ee, #99ead5, #ffb0e4)" width= "maxW" height="700px">
  //       <Box  height="600px" justify="space-around" width="80%" align="left" direction="column" paddingTop="20px" paddingLeft="40px">
  //           <Text fontFamily="Slackey" fontSize="40px" color="blue.300">
  //               About ...
  //           </Text>
            
  //           <Text paddingLeft="50px" paddingTop="40px" fontFamily="Open Sans" fontSize="25px" color="pink.500">
  //               - MozziTozzi collection live in Ethereum blockchain with total supply of 10,000 MTZs, each of them is unique.
  //               </Text>
  //           <Text paddingLeft="50px" paddingTop="20px" fontFamily="Open Sans" fontSize="25px" color="pink.500">
  //               - MozziTozzi smart contract is "0xAF48695F5aaBc37525C5F6aD2D185469bC9095d2" which give ability to minters to mint up to 5 random MZTs per transaction with less gas fee in total.
  //               </Text>
  //           <Text paddingLeft="50px" paddingTop="20px" fontFamily="Open Sans" fontSize="25px" color="pink.500">
  //                - MozziTozzi json files are stored permenantly in decentralized IPFS system. 
  //               </Text>
  //           <Text paddingLeft="50px" paddingTop="20px" fontFamily="Open Sans" fontSize="25px" color="pink.500">
  //                - The exclusive marketplace is Opensea. 
  //               </Text>
  //      </Box>
  //      </Flex>
    );
  }