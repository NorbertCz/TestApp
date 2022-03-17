import React from 'react';
import {Flex, Stack, Avatar, Text, PseudoBox, Box, Image, AvatarGroup} from "@chakra-ui/core";
import {HiLocationMarker} from "react-icons/hi";
import {LikeButton, CommentButton, ShareButton} from "./PostButtons";






const BlogPost = (props) => {
    const{author, when, where, image, isLiked} = props;
    return (
            


        <Flex bg="white" direction="column" w="500px"my="15px"  shadow="md"borderRadius="10px" {...props}>
            {/*first box  */}
            <Flex direction="row">
                <Flex p="12px">
                    <Stack isInline>
                        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                        <Stack justifyContent="center" spacing="0px">
                            <Text fontWeight="bold" fontSize="sm">{author}</Text>
                            <Text fontSize="xs" color="gray.600"> {when}</Text>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex ml="auto" p="12px">
                    <Stack  isInline>
                            <Text fontWeight="bold" color="gray.700" fontSize="xs" mt="10px">{where}</Text>
                            <PseudoBox mt="7px" as={HiLocationMarker} color="gray.600" fontSize="xl"/>
                    </Stack>
                </Flex>
                
            </Flex>
            <Box w="full" h="380px">
                <Image w="full" h="full" src={image}></Image>
            </Box>
            <Box w="full" justifyContent="center" alignItems="center" >
                
                 <LikeButton  status={isLiked} />
                 <CommentButton  status={props}/>
                 <ShareButton  status={props}/>
                 

            
                
                <Stack isInline>
                

                    <AvatarGroup size="xs" max={3} ml="0px" >
                        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                    </AvatarGroup>
                    <Stack alignItems="center" spacing="3px" isInline>
                        <Text fontWeight="bold" fontSize="xs" color="gray.800"> + 38 Osób</Text>
                        <Text  fontSize="xs" color="gray.800">Polubiło to zdjęcie</Text>
                        

                    </Stack>
                
                </Stack>
            </Box>
            
        </Flex>
        

        
    );
};

export default BlogPost;
