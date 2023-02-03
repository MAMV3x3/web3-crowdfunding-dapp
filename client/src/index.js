import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from '@chakra-ui/react';
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <ChakraProvider>
        <ThirdwebProvider desiredChainId={ChainId.Goerli}>
            <Router>
                <App />
            </Router>
        </ThirdwebProvider>
    </ChakraProvider>
)