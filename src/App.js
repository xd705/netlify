import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About'
import MainMint from './components/MainMint';
import SmallCentered from './components/SmallCentered';
import {ChakraProvider,theme,} from '@chakra-ui/react';
import { configureChains, createClient, createConfig, WagmiConfig, sepolia, useAccount, mainnet } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { getAccount } from "@wagmi/core";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'



const chains = [sepolia]
const projectId = '3647dcbeecbd34bc36b1a69680afbf81'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId }), infuraProvider({ apiKey: '17a94eae7c5b4ffe86120a9f1ae33a37' })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  const [accounts, setAccounts] = useState();

  return (
    <ChakraProvider theme={theme}>
        
      
    <div className="overlay">
      <div className= "App">
      <WagmiConfig config={wagmiConfig}>
         <NavBar accounts={accounts} setAccounts={setAccounts} />
         <MainMint accounts={accounts} setAccounts={setAccounts} />
         </WagmiConfig>
         <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeMode= 'dark' themeVariables={{
        '--w3m-font-family': 'Roboto, sans-serif',
        '--w3m-accent-color': '#e4cb3a',
        '--w3m-background-color': '#9E9998',
        '--w3m-accent-fill-color': '#111c54'
      }}
      defaultChain= {sepolia}
       />
         <About/>
         <SmallCentered />
      </div> 
      {/* <div className="background"></div> */}
    </div>
    
   
    </ChakraProvider>
    );  
} 

export default App;
