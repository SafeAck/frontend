"use client";

import { Flex, Box, Text, useColorModeValue } from "@chakra-ui/react";

// Local imports
import {
    lightThemeHoverBgColor,
    darkThemeHoverBgColor,
} from "../../constants/colors";

const Card: React.FC = () => {
    const hoverBgColor = useColorModeValue(
        lightThemeHoverBgColor,
        darkThemeHoverBgColor
    );

    return (
        // container
        <Flex backgroundColor={hoverBgColor}>
            <Box>
                <Text></Text>
            </Box>
        </Flex>
    );
};

export default Card;
