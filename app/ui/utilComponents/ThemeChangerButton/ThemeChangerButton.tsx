"use client";

import { useColorMode, Button } from "@chakra-ui/react";
import { GoSun, GoMoon } from "react-icons/go";

const ThemeChangerButton:React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <GoMoon /> : <GoSun />}
        </Button>
    );
};

export default ThemeChangerButton;
