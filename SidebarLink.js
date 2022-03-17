import react from "react";
import { Link, Stack, Text, Box } from "@chakra-ui/core";

const SidebarLink = (props) => {
    const { name, icon } = props;
    return (
        <Link
            fontWeight="semibold"  
            py={2} 
            px={4}
            rounded="md"
            color="gray.600" 
            bg="white.500"
            _active={{ bg: "blue.700" }}
            _hover={{ textDecoration: "none", color: "blue.500" }}
            {...props}
        >
            <Stack align="center" isInline>
                <Box as={icon} fontSize="md"/> 
                <Text>{name}</Text>
            </Stack>
        </Link>
    )
}

export default SidebarLink;