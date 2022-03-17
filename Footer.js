import React from "react";
import {Flex, Stack, Avatar, Text, PseudoBox, Box, Image, AvatarGroup} from "@chakra-ui/core";



export const Footer = () => {
    
    return (
    <Flex  h="full"  >
        <Flex  justifyContent="flex-start" alignItems="center" mt="50%">
            <Text color="black.900" p="30px" borderRight="1px" >@ Social Network</Text>
            <Text color="black.900" p="30px" >Need Help ? </Text>
            </Flex>
        </Flex>
    
    );
};

export default Footer; 