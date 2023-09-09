import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import { ColorModeScript ,ChakraProvider, theme } from '@chakra-ui/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
       <ColorModeScript/>
       <ChakraProvider theme={theme}>
           <ColorModeSwitcher/>
           <App />
       </ChakraProvider>
    </StrictMode>

    

);

export const server=`https://api.coingecko.com/api/v3`;

