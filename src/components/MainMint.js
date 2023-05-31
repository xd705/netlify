import {useState} from 'react';
import {ethers, BigNumber} from 'ethers';
import {Box, Button, Flex, Input,Text, Spacer} from '@chakra-ui/react';
import mzTz from './MzTz.json';
import LoadingSpinner from "./LoadingSpinner";
import { useAccount} from 'wagmi';


const mzTzAddress = "0x638506D625E60ac4FD1A844aF5Ce97825CE543E4";



const MainMint = ({ accounts, setAccounts}) => {
 const [mintAmount, setMintAmount] = useState(1);
 const { address, isConnecting, isDisconnected, isConnected } = useAccount()
 const [isLoading, setIsLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState("");
 const [mintedMessage, setMintedMessage] = useState(" ");
 
 
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
            value: ethers.utils.parseEther((0.01 * mintAmount).toString()), gasLimit: 1000000 ,
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
 

 const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
 };

 const handleIncrement = () => {
    if (mintAmount >= 10) return;
    setMintAmount(mintAmount + 1);
 };
  return (
    
    <Flex justify="center" align="top" height="100vh">
    
    <Box>
    <div>
 
        <Text bgGradient='linear(to-t, #fffeb8 25%, #FF0080)' bgClip='text' paddingTop="50px" spacing={5} fontSize="48px"  fontFamily="Slackey">"MozziTozzi"</Text>
        
        <Text width="900px" paddingTop="30px" fontSize="30px" letterSpacing="-5.5%" fontFamily="Open Sans" color="#99ead5">
          MozziTozzi collection will be tapping forever in Ethereum blockchain .
          Created as symbols of fun ,liveliness and wellness.</Text>
        </div>
        
        {isConnected ? (
        <Flex paddingTop="100px" direction="column">
            <Flex justify="center" align="auto" >
                <Button 
                  backgroundColor="#39161f"
                  borderRadius="5px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="#e4cb3a"
                  cursor="pointer"
                  fontFamily="inherit"
                  fontSize="25px"
                  padding="15px"
                  marginTop="10px"
                  onClick={handleDecrement}> - </Button>

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

                <Button
                 backgroundColor="#39161f"
                 borderRadius="5px"
                 boxShadow="0px 2px 2px 1px #0F0F0F"
                 color="#e4cb3a"
                 cursor="pointer"
                 fontFamily="inherit"
                 fontSize="20px"
                 padding="15px"
                 marginTop="10px"
                 onClick={handleIncrement}> + </Button>
                </Flex>
               
                <Flex justify="center" align="auto">
                {isLoading ? (<LoadingSpinner/>) : (
                <Button
                backgroundColor="#39161f"
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
                  Minting price is 0.05 ETH excluding gas fees
                 </Text>      
         </Flex>
          ) : (
            <Text
            paddingTop="100px"
            marginTop="70px"
            fontSize="30px"
            letterSpacing="5.5%"
            fontFamily="inherit"
            textShadow="0 3px #000000"
            color="D6517D"
            > Must be connected to mint </Text>
        )}
         {errorMessage && <Flex className="error" padding="0px"  color="red" height="0px" justify="center" align="auto">{errorMessage}</Flex>}
         {handleMint && <Flex padding="0px" color="green" height="0px" justify="center" align="auto">{mintedMessage}</Flex>}

    
    </Box>
    </Flex>

  );

};

export default MainMint;