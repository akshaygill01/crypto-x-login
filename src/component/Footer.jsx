import {  Box, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import avtimg from "../Assets/Avatar-Profile-Vector-PNG-Clipart.png"
import linkedIn from "../Assets/linkedin.svg";
import git from "../Assets/github (1).svg";


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'}
         color={'whiteAlpha.700'}
         minH={'48'}
         px={'16'}
         py={['16','8']}
    >

       
       <Stack direction={['column','row']}
              h={'full'}
              alignItems={'center'}

       >
           <VStack w={'full'} alignItems={['center','flex-start']}>
                <Text fontWeight={'bold'}>About Us</Text>
                <Text  fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>We provide a comprehensive and easy-to-use platform for tracking cryptocurrencies.<br/> Our platform includes real-time charts, historical data, and news and analysis.</Text>
              
           </VStack>

           <VStack alignItems={'center'}>
              <Image src={avtimg} w={'120'} h={'120'}/>
              
              <Text>Akshay Gill</Text>
           </VStack>

       </Stack>

          
     </Box>
  )
}

export default Footer