import React from "react";
import {Flex, Stack, Avatar, Text, PseudoBox, Box, Image, AvatarGroup} from "@chakra-ui/core";
import {BsSearch} from "react-icons/hi";


export const Navbar = () => {
    
    return (
    <Flex w="full" h="60px" bg="white">
        <Flex  justifyContent="flex-start" alignItems="center" >
            <Text color="blue.900" p="30px" borderRight="2px" >TestApp</Text>
                 <Flex as="input" ml="30px" p="30px" w="full" h="full" type="text" placeholder="Search" >
                </Flex>
            </Flex>
        </Flex>
    
    );
};

export default Navbar; 