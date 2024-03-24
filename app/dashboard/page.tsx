import { Box, Flex } from "@chakra-ui/react";

import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import EventBar from "../ui/dashboard/eventbar/eventbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard: React.FC = () => {
    return (
        // wrapper
        <Flex gap="20px" marginTop="20px">
            {/* // main */}
            <Flex flex={3} flexDirection="column" gap="20px">
                {/* //Cards */}
                <Flex gap="20px" justifyContent="space-between">
                    <Card />
                    <Card />
                    <Card />
                </Flex>
                <Transactions />
                <Chart />
            </Flex>

            {/* // side */}
            <Box flex={1}>
                <EventBar />
            </Box>
        </Flex>
    );
};

export default Dashboard;
