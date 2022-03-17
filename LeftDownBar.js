import React from "react";
import {Flex, Stack, Avatar, Text, PseudoBox, Box, Image, AvatarGroup} from "@chakra-ui/core";
import SidebarLink from "./SidebarLink";
import {GrTrain} from "react-icons/gr";
import {GiHockey} from "react-icons/gi";
import {IoIosBasketball} from "react-icons/io";
import {FaSnowman, FaRegSmileBeam, FaSmileBeam} from "react-icons/fa";
import {RiVipDiamondFill} from "react-icons/ri";
import{IoIosTrain} from "react-icons/io";



export const LeftDownBar = () => {
    
    return (
       <Flex  direction="column" >
           <Flex direction="column" w="full" h="full" alignItems="flex-start" ml="30px" >           
                <Flex direction="column" alignItems="flex-start" w="full" h="full">    
                <Text
                        fontWeight="italic" 
                        py={2} 
                        px={4}
                        mt="20px"
                        rounded="md"
                        color="gray.500" 
                        bg="white.500"    
                    >
                        Menu
                    </Text>
                    <SidebarLink name="Home"/>
                    <SidebarLink name="Disscusion"/>
                    <SidebarLink name="Friends"/>
                    <SidebarLink name="Events"/>
                    <SidebarLink name="Photos"/>
                    <SidebarLink name="Videos"/>
                    <SidebarLink name="Files"/>
                    <Text
                        fontWeight="italic" 
                        py={2} 
                        px={4}
                        mt="20px"
                        rounded="md"
                        color="gray.500" 
                        bg="white.500"    
                    >
                        Your Favorites
                    </Text>
                    <SidebarLink name="Railways Deals" icon={GrTrain}  /> 
                    <SidebarLink name="Hockey Guys UK" icon={GiHockey}  /> 
                    <SidebarLink name="BasketBall UK" icon={IoIosBasketball}  /> 
                    <SidebarLink name="WinterSports" icon={FaSnowman}  /> 
                    <SidebarLink name="Ha! The best jokes" icon={FaRegSmileBeam}  /> 
                    <SidebarLink name="8Gag" icon={FaSmileBeam}  />
                    <SidebarLink name="Mentors" icon={RiVipDiamondFill}  /> 
                    <SidebarLink name="Pociagi" icon={IoIosTrain} />
                    
                </Flex>    
            </Flex>
        </Flex>
    );
};

export default LeftDownBar;