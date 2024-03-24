"use client";
import { usePathname } from "next/navigation";
import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from "@chakra-ui/react";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";
import ThemeChangerButton from "../../utilComponents/ThemeChangerButton/ThemeChangerButton";

const Navbar: React.FC<{ softBgColor: string }> = ({ softBgColor }) => {
    const pathname = usePathname();
    const iconSize = 25;
    const pageName = pathname.split("/").pop();

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            padding="10px"
            borderRadius="10px"
            backgroundColor={softBgColor}
        >
            <Box>
                <Text fontWeight="bold" textTransform="capitalize">
                    {pageName}
                </Text>
            </Box>
            <Flex
                alignItems="center"
                gap="10px"
                padding="10px"
                borderRadius="10px"
            >
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <MdSearch size={iconSize} />
                    </InputLeftElement>
                    <Input type="text" placeholder="Search" />
                </InputGroup>
                <Flex gap="10px">
                    <MdOutlineChat size={iconSize} />
                    <MdNotifications size={iconSize} />
                    <MdPublic size={iconSize} />
                    <ThemeChangerButton iconSize={iconSize}/>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
