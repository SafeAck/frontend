"use client";

import { useColorMode, Box } from "@chakra-ui/react";
import { GoSun, GoMoon } from "react-icons/go";
import {MdWbSunny, MdOutlineDarkMode} from "react-icons/md";

const ThemeChangerButton: React.FC<{
    iconSize: string | number | undefined;
}> = ({ iconSize }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
            colorMode === "light" ? (
                <MdOutlineDarkMode size={iconSize} onClick={toggleColorMode}/>
            ) : (
                <MdWbSunny size={iconSize} onClick={toggleColorMode}/>
            )
    );
};

export default ThemeChangerButton;
