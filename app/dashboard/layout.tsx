"use client";

import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

import { Providers } from "../providers";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

const DashboardLayout = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const softBgColor = useColorModeValue("gray.200", "gray.900");

    return (
        <Flex>
            <Box
                flex="1"
                backgroundColor={softBgColor}
                borderRadius="10px"
                marginTop="10px"
                marginLeft="10px"
            >
                <Sidebar />
            </Box>
            <Box
                flex="4"
                borderRadius="10px"
                marginTop="10px"
                marginLeft="10px"
            >
                <Navbar softBgColor={softBgColor} />
                <Providers>{children}</Providers>
            </Box>
        </Flex>
    );
};

export default DashboardLayout;
