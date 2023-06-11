// import React from "react";

// import {
//   chakra,
//   Box,
//   Flex,
//   useColorModeValue,
//   VisuallyHidden,
//   HStack,
//   Button,
//   useDisclosure,
//   VStack,
//   IconButton,
//   CloseButton,
// } from "@chakra-ui/react";
// import { AiOutlineMenu } from "react-icons/ai";

// import Logo from "./logo.gif";
// import { useAccount} from 'wagmi'
// import { Web3Button } from '@web3modal/react'
// import Twitter from './twitter.png'
// import Opensea from './opensea.png'
// import Etherscan from './etherscan.png'

// const NavBar =({accounts, setAccounts}) => {
//   const { address, isConnecting, isDisconnected, isConnected } = useAccount()
//     const bg = useColorModeValue("white", "gray.800");
//     const mobileNav = useDisclosure();
//     return (
//       <React.Fragment>
//         <chakra.header
//           bg={bg}
//           w="full"
//           px={{
//             base: 2,
//             sm: 4,
//           }}
//           py={4}
//           shadow="md"
//         >
//           <Flex alignItems="center" justifyContent="space-between" mx="auto">
//             <Flex>
//               <chakra.a
//                 href="./logo.gif"
//                 title="Choc Home Page"
//                 display="flex"
//                 alignItems="center"
//               >
//                 <VisuallyHidden>MozziTozzi</VisuallyHidden>
//               </chakra.a>
//               <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
//                 MozziTozzi
//               </chakra.h1>
//             </Flex>
//             <HStack display="flex" alignItems="center" spacing={1}>
//               <HStack
//                 spacing={1}
//                 mr={1}
//                 color="brand.500"
//                 display={{
//                   base: "none",
//                   md: "inline-flex",
//                 }}
//               >
//                 <Button variant="ghost">Features</Button>
//                 <Button variant="ghost">Pricing</Button>
//                 <Button variant="ghost">Blog</Button>
//                 <Button variant="ghost">Company</Button>
//                 <Button variant="ghost">Sign in</Button>
//               </HStack>
//               <Button colorScheme="brand" size="sm">
//                 Get Started
//               </Button>
//               <Box
//                 display={{
//                   base: "inline-flex",
//                   md: "none",
//                 }}
//               >
//                 <IconButton
//                   display={{
//                     base: "flex",
//                     md: "none",
//                   }}
//                   aria-label="Open menu"
//                   fontSize="20px"
//                   color="gray.800"
//                   _dark={{
//                     color: "inherit",
//                   }}
//                   variant="ghost"
//                   icon={<AiOutlineMenu />}
//                   onClick={mobileNav.onOpen}
//                 />
  
//                 <VStack
//                   pos="absolute"
//                   top={0}
//                   left={0}
//                   right={0}
//                   display={mobileNav.isOpen ? "flex" : "none"}
//                   flexDirection="column"
//                   p={2}
//                   pb={4}
//                   m={2}
//                   bg={bg}
//                   spacing={3}
//                   rounded="sm"
//                   shadow="sm"
//                 >
//                   <CloseButton
//                     aria-label="Close menu"
//                     onClick={mobileNav.onClose}
//                   />
  
//                   <Button w="full" variant="ghost">
//                     Features
//                   </Button>
//                   <Button w="full" variant="ghost">
//                     Pricing
//                   </Button>
//                   <Button w="full" variant="ghost">
//                     Blog
//                   </Button>
//                   <Button w="full" variant="ghost">
//                     Company
//                   </Button>
//                   <Button w="full" variant="ghost">
//                     Sign in
//                   </Button>
//                 </VStack>
//               </Box>
//             </HStack>
//           </Flex>
//         </chakra.header>
//       </React.Fragment>
//     );
//   };

// export default NavBar;

import React from "react";
import {Image, Link, Text,   chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,} from '@chakra-ui/react';
import { AiOutlineMenu } from "react-icons/ai"
import Logo from "./logo.gif";
import { useAccount} from 'wagmi'
import { Web3Button } from '@web3modal/react'
import Twitter from './twitter.png'
import Rarible from './rarible.png'
import Etherscan from './etherscan.png'



const NavBar =({accounts, setAccounts}) => {
    const { address, isConnecting, isDisconnected, isConnected } = useAccount()
    const bg = useColorModeValue("gray.500");
    const mobileNav = useDisclosure();
    

    return (
  <React.Fragment>
  <chakra.header
    bg={bg}
    w="full"
    px={{
      base: 2,
      sm: 4,
      //md: 6,
    }}
    py={4}
    shadow="md"
  >
            <Flex alignItems="center" justifyContent="space-between" mx="auto">
    
            <Flex paddingLeft="10">
               <chakra.a
                display="flex"
              >
              <Image borderRadius="150px" boxSize="50px" src={Logo} />
                
              </chakra.a>
            
            </Flex>
           {/* <Flex justify="space-around" width="20%" padding="0 75px" align="center">
            <Image borderRadius="150px" boxSize="50px" src={Logo} alt="MzTz Logo" />
            <Text className="text-white text-2xl ml-2" align="center" fontSize="25px">MTZ</Text>
           </Flex> */}
               
           <HStack display="flex" alignItems="center" spacing={1}>
                <HStack
                spacing={5}
                paddingRight={20}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                
             <Flex> 
             <Link href="https://twitter.com/MozziTozzi">
             <Image src={Twitter} boxSize="42px" margin="0 15px"  />
           </Link>
           </Flex>
           <Flex>
           <Link href="https://rarible.com/mozzitozzi">
             <Image src={Rarible} boxSize="42px" margin="0 15px"  />
           </Link>
           </Flex>
           <Flex>
           <Link href="https://etherscan.io/address/0x831a1a934c623e6cbcfb3a82d7560d1c17769807">
            <Image src={Etherscan} boxSize="55px" margin="0 15px" />
           </Link>
         </Flex>
            
              </HStack>
              <Web3Button />
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="solid"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
  
                <HStack
                  pos="absolute"
                  top="auto"
                  left="auto"
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="row"
                  p={2}
                  pl={4}
                  m={2}
                  bg="gray.200"
                  spacing={3}
                  //rounded="sm"
                  //shadow="sm"
                  borderRadius="150px"
                  
                >
                  
  
            <Flex> 
             <Link href="https://twitter.com/MozziTozzi">
             <Image src={Twitter} boxSize="22px" />
           </Link>
           </Flex>
           <Flex>
           <Link href="https://rarible.com/mozzitozzi">
             <Image src={Rarible} boxSize="22px"  />
           </Link>
           </Flex>
           <Flex>
           <Link href="https://etherscan.io/address/0x831a1a934c623e6cbcfb3a82d7560d1c17769807">
            <Image src={Etherscan} boxSize="28px"  />
           </Link>
         </Flex>
         <CloseButton
                    aria-label="Close menu"
                    color="gray.800"
                    onClick={mobileNav.onClose}
                  />
                </HStack>
              </Box>
            </HStack>
               {/* <Flex
               justify="space-around"
               align="center"
               width="40%"
               padding="30px"
               >
        <Flex justify="space-around" width="70%" padding="10 75px" paddingRight="50px" align="center">
           <Link href="https://www.twitter.com">
             <Image src={Twitter} boxSize="42px" margin="0 15px" />
           </Link>
           <Link href="https://www.gmail.com">
             <Image src={Opensea} boxSize="42px" margin="0 15px" />
           </Link>
           <Link href="https://www.facebook.com">
            <Image src={Etherscan} boxSize="55px" margin="0 15px" />
           </Link>
         </Flex>
                
              
                 <div> 
               <Web3Button />
               </div> 
                
                
               
               
               </Flex> */}
            </Flex>
</chakra.header>
</React.Fragment>
        );
    };
    
    export default NavBar;
