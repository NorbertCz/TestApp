import React from "react";
import {Flex, Stack, Avatar, Text,Link, PseudoBox, Box, Image, AvatarGroup, Textarea} from "@chakra-ui/core";
import AccountArea from "./AccountArea";
import {BsPencil} from "react-icons/bs";
import {GrGallery} from "react-icons/gr";
import {AiOutlineVideoCamera} from "react-icons/ai";




export const AccountAreaUsing = () => {
    
    return (
       <Flex w="full" h="full"  shadow="md" bg="white" direction="column" >
           
               
                    <Flex>
                   <AccountArea name="makePost"  icon={BsPencil}/>
                   <AccountArea name="Photo/Video Album" icon={GrGallery}/>
                   <AccountArea name="Live Video" icon={AiOutlineVideoCamera}/>
                    </Flex>
                  <Stack isInLine>
                      <Avatar name="Norbert Czubak">
                      </Avatar>
                      <Textarea/>
                      </Stack>    
        </Flex>
       
    )
}

export default AccountAreaUsing;