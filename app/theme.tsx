import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
    initialColorMode: "dark", // 'dark' | 'light'
    useSystemColorMode: false,
    fonts,
});

export default theme;
