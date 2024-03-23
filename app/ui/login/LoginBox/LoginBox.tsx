import { Button, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";


import { safeackGithubLogoUrl } from "../../../constants/urls";
import PasswordInput from "../../utilComponents/PasswordInput/PasswordInput";

const LoginBox: React.FC = () => {
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex
                direction="column"
                background="white.700"
                padding={12}
                rounded={6}
            >
                <Image
                    src={safeackGithubLogoUrl}
                    alt="SafeAck Logo"
                    borderRadius="full"
                    boxSize="200px"
                    alignSelf="center"
                    mb={4}
                />
                <Input
                    placeholder="john.doe@example.com"
                    variant="filled"
                    mb={3}
                />
                {/* <Input
                    placeholder="**************"
                    variant="filled"
                    mb={6}
                    type="password"
                /> */}
                <PasswordInput mb={6} />
                <Button colorScheme="telegram" mb={6}>
                    Login
                </Button>
            </Flex>
        </Flex>
    );
};

export default LoginBox;
