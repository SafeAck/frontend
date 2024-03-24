"use client";
import { usePathname } from "next/navigation";
import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <Flex justifyContent="space-between" alignItems="center" padding="20px" borderRadius="10px">
            <Box>{pathname.split("/").pop()}</Box>
            <Box>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <MdSearch />
                    </InputLeftElement>
                    <Input type="text" placeholder="Search" />
                </InputGroup>

                <Box>
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </Box>
            </Box>
        </Flex>
    );
};

export default Navbar;
