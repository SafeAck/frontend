import { Flex, Box, useColorMode } from "@chakra-ui/react";

import { Providers } from "../providers";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

const DashboardLayout = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Flex>
            <Box flex="1">
                <Sidebar />
            </Box>
            <Box flex="4">
                <Navbar />
                <Providers>{children}</Providers>
            </Box>
        </Flex>
    );
};

export default DashboardLayout;
