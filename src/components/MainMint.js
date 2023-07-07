import {useState, useEffect} from 'react';
import {ethers, BigNumber} from 'ethers';
import {Box, Button, Flex, Input,Text, Stack, Heading} from '@chakra-ui/react';
import mzTz from './MzTz.json';
import LoadingSpinner from "./LoadingSpinner";
import { useAccount} from 'wagmi';
import Background from './background.gif'


const mzTzAddress = "0x831A1a934C623E6cBCfB3a82d7560D1C17769807";



const MainMint = ({ accounts, setAccounts}) => {
 const [mintAmount, setMintAmount] = useState(1);
 const { address, isConnecting, isDisconnected, isConnected } = useAccount()
 const [isLoading, setIsLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState("");
 const [mintedMessage, setMintedMessage] = useState(" ");
 const bg = Background ;
 
 async function handleMint (){
    setIsLoading(true);
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            mzTzAddress,
            mzTz.abi,
            signer,    
        );
        try{
          const response = await contract.mint(BigNumber.from(mintAmount),{
            value: ethers.utils.parseEther((0.05 * mintAmount).toString()),
          });
          console.log('response: ', response); 
          setMintedMessage("Your MozziTozzi is Succefuly Minted")
           setTimeout(() => {
            setMintedMessage(false);
         }, 3000);
          setIsLoading(false); 
          
        } catch (err) {
            setIsLoading(false);
            setErrorMessage("Something went wrong...");
             setTimeout(() => {
            setErrorMessage(false);
         }, 8000);
        }
    }
    
 }
 




//  const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/17a94eae7c5b4ffe86120a9f1ae33a37");
//       const contract = new ethers.Contract(
//           mzTzAddress,
//           mzTz.abi,
//           provider    
//       );
//       const tokenCount = contract.tokenCount;
//       console.log('tokenCount:', tokenCount.toString());
 
      
 

  return (

    <Box
    w="full"
    h="container.sm"
    bg="blue.900"
  >
    <Flex
      align="top"
      pos="relative"
      justify="center"
      boxSize="full"
    >
      <Stack  textAlign="center" alignItems="center" spacing={6} >
          <Box p="30">
          <Box backgroundImage={bg} borderRadius="10px" >
        <Heading
          fontSize={["2xl","4xl", "6xl"]} paddingTop="50"
          textTransform="uppercase"
          bgGradient='linear(to-t, #fffeb8 25%, #FF0080)' bgClip='text'  spacing={5}   fontFamily="Slackey"  
        >
          'MozziTozzi'
         
        </Heading>
        <Flex direction="column" paddingTop="50" paddingBottom="30">
        <Text  fontSize={["l","xl","2xl"]} letterSpacing="-5.5%" fontFamily="Open Sans" color="#99ead5">
           MozziTozzi will be tapping forever in Ethereum blockchain </Text>
           <Text  fontSize={["l","xl", "2xl"]} letterSpacing="-5.5%" fontFamily="Open Sans" color="#99ead5" paddingBottom="30">
           Created as symbols of fun ,liveliness and wellness.</Text>
           </Flex>
           </Box>
           </Box>
           <Flex direction="column" justify="center" align="auto" paddingTop="1">
           {isConnected ? (
        <Flex direction="column">
            <Flex justify="center" align="auto" >
              

                <Input
                readOnly
                fontFamily="inherit"
                fontSize="xl"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type="number"
                value={mintAmount} />

                
                </Flex>
               
                <Flex justify="center" align="auto">
                {isLoading ? (<LoadingSpinner/>) : (
                <Button
                backgroundColor="gray.900"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="#e4cb3a"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                disabled={isLoading}
                onClick={handleMint}>            
                  Mint Now</Button>)}
               
                   </Flex>
                       
                  <Text>
                  currently it is 0.05 eth to mint 
                 </Text>
                   <Text>
                  1 random MTZ per transaction
                 </Text>

         </Flex>
          ) : (
            <Text
            fontSize={["xl","4xl"]}
            letterSpacing="5.5%"
            fontFamily="inherit"
            textShadow="0 3px #000000"
            color="D6517D"
            > Connect your wallet to mint </Text>
        )}
         {errorMessage && <Flex className="error" padding="0px"  color="red" height="0px" justify="center" align="auto">{errorMessage}</Flex>}
         {handleMint && <Flex padding="0px" color="green" height="0px" justify="center" align="auto">{mintedMessage}</Flex>}
       </Flex>
      </Stack>
      
    </Flex>
  </Box>
    
    // <Flex justify="center" align="top" height="100vh">
    
    // <Box>
    // <div>
 
    //     <Text bgGradient='linear(to-t, #fffeb8 25%, #FF0080)' bgClip='text' paddingTop="50px" spacing={5} fontSize="48px"  fontFamily="Slackey">"MozziTozzi"</Text>
        
    //     <Text width="300px" paddingTop="30px" fontSize="30px" letterSpacing="-5.5%" fontFamily="Open Sans" color="#99ead5">
    //       MozziTozzi collection will be tapping forever in Ethereum blockchain .
    //       Created as symbols of fun ,liveliness and wellness.</Text>
    //     </div>
        
    //     {isConnected ? (
    //     <Flex paddingTop="100px" direction="column">
    //         <Flex justify="center" align="auto" >
    //             <Button 
    //               backgroundColor="#39161f"
    //               borderRadius="5px"
    //               boxShadow="0px 2px 2px 1px #0F0F0F"
    //               color="#e4cb3a"
    //               cursor="pointer"
    //               fontFamily="inherit"
    //               fontSize="25px"
    //               padding="15px"
    //               marginTop="10px"
    //               onClick={handleDecrement}> - </Button>

    //             <Input
    //             readOnly
    //             fontFamily="inherit"
    //             fontSize="xl"
    //             width="100px"
    //             height="40px"
    //             textAlign="center"
    //             paddingLeft="19px"
    //             marginTop="10px"
    //             type="number"
    //             value={mintAmount} />

    //             <Button
    //              backgroundColor="#39161f"
    //              borderRadius="5px"
    //              boxShadow="0px 2px 2px 1px #0F0F0F"
    //              color="#e4cb3a"
    //              cursor="pointer"
    //              fontFamily="inherit"
    //              fontSize="20px"
    //              padding="15px"
    //              marginTop="10px"
    //              onClick={handleIncrement}> + </Button>
    //             </Flex>
               
    //             <Flex justify="center" align="auto">
    //             {isLoading ? (<LoadingSpinner/>) : (
    //             <Button
    //             backgroundColor="#39161f"
    //             borderRadius="5px"
    //             boxShadow="0px 2px 2px 1px #0F0F0F"
    //             color="#e4cb3a"
    //             cursor="pointer"
    //             fontFamily="inherit"
    //             padding="15px"
    //             marginTop="10px"
    //             disabled={isLoading}
    //             onClick={handleMint}>            
    //               Mint Now</Button>)}
               
    //                </Flex>
                       
    //               <Text>
    //               Minting price is 0.05 ETH excluding gas fees
    //              </Text>      
    //      </Flex>
    //       ) : (
    //         <Text
    //         paddingTop="100px"
    //         marginTop="70px"
    //         fontSize="30px"
    //         letterSpacing="5.5%"
    //         fontFamily="inherit"
    //         textShadow="0 3px #000000"
    //         color="D6517D"
    //         > Connect your wallet to mint </Text>
    //     )}
    //      {errorMessage && <Flex className="error" padding="0px"  color="red" height="0px" justify="center" align="auto">{errorMessage}</Flex>}
    //      {handleMint && <Flex padding="0px" color="green" height="0px" justify="center" align="auto">{mintedMessage}</Flex>}

    
    // </Box>
    // </Flex>

  );

};

export default MainMint;
