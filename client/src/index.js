import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from '@chakra-ui/react';
import App from "./App";
import { StateContextProvider } from "./context";
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ThirdwebProvider desiredChainId={ChainId.Goerli}>
            <Router>
                <StateContextProvider>
                    <App />
                </StateContextProvider>
            </Router>
        </ThirdwebProvider>
    </ChakraProvider>
)