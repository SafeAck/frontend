"use client";

import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { GoDiff } from "react-icons/go";

// Local imports
import {
    lightThemeHoverBgColor,
    darkThemeHoverBgColor,
    lightThemeSideBarBgColor,
    darkThemeSideBarBgColor,
} from "../../constants/colors";

const Card: React.FC = () => {
    const cardhoverBgColor = useColorModeValue(
        lightThemeHoverBgColor,
        darkThemeHoverBgColor
    );
    const cardBgColor = useColorModeValue(
        lightThemeSideBarBgColor,
        darkThemeSideBarBgColor
    );

    // BUG: if user changes theme in browser then they have to reload in order to get latest values of cardhoverBgColor and cardBgColor variables.

    return (
        // container
        <Flex
            backgroundColor={cardBgColor}
            padding="10px"
            borderRadius="20px"
            gap="30px"
            cursor="pointer"
            width="100%"
            _hover={{ backgroundColor: cardhoverBgColor }}
        >
            <GoDiff size={25} />
            {/* Texts */}
            <Flex flexDirection="column" gap="20px">
                {/* Title */}
                <Flex>
                    <Text>Total Vulnerable Endpoints</Text>
                </Flex>
                {/* Number */}
                <Flex fontSize="24px" fontWeight={500}>
                    <Text>100</Text>
                </Flex>
                {/* Detail */}
                <Flex fontSize="14px" fontWeight={300}>
                    {/* Positive or Negative */}
                    <Flex textColor={"red" || "lime"}>
                        <Text fontWeight="bold">10%</Text>
                    </Flex>
                    <Text>more than last scan</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Card;
