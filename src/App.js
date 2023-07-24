import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About'
import MainMint from './components/MainMint';
import SmallCentered from './components/SmallCentered';
import {ChakraProvider,theme,} from '@chakra-ui/react';
import { configureChains, createClient, createConfig, WagmiConfig, useAccount, mainnet } from "wagmi";
import { goerli } from 'wagmi/chains';
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { getAccount } from "@wagmi/core";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'



const chains = [mainnet]
const projectId = '5add517a7e2d268585002d44a7b0cf28'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId }), alchemyProvider({ apiKey: 'TzdwUg4atq5LBCFN9WO56PoxIwnkuEzs' })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
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
      defaultChain= {mainnet}
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
