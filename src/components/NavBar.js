import {Flex, Image, Link, Text} from '@chakra-ui/react';
import Logo from "./logo.gif";
import { useAccount} from 'wagmi'
import { Web3Button } from '@web3modal/react'
import Twitter from './twitter.png'
import Opensea from './opensea.png'
import Etherscan from './etherscan.png'



const NavBar =({accounts, setAccounts}) => {
    const { address, isConnecting, isDisconnected, isConnected } = useAccount()

        return (
            <Flex justify="space-between" align="center" padding="20px" bgGradient="linear(to-r, #771732 40%, #ffb0e4 , #39161f)" width= "maxW" height="60px">
    
    
           <Flex justify="space-around" width="20%" padding="0 75px" align="center">
            <Image borderRadius="150px" boxSize="50px" src={Logo} alt="MzTz Logo" />
            <Text className="text-white text-2xl ml-2" align="center" fontSize="25px">MTZ</Text>
           </Flex>
               
    
               <Flex
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
                
                
               
               
               </Flex>
            </Flex>
        );
    };
    
    export default NavBar;