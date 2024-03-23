import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import { Providers } from "../providers";
import { Flex, Box } from "@chakra-ui/react";

const DashboardLayout = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Flex>
            <Box backgroundColor="telegram.300" flex='1'>
                <Sidebar />
            </Box>
            <Box flex='4'>
                <Navbar/>
                <Providers>{children}</Providers>
            </Box>
        </Flex>
    );
};

export default DashboardLayout;
