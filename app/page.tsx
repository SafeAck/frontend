import { Button, Flex, Heading, Input } from "@chakra-ui/react";

const IndexPage = () => {
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex
                direction="column"
                background="white.700"
                padding={12}
                rounded={6}
            >
                <Heading mb={6} textAlign={"center"}>
                    Login
                </Heading>
                <Input
                    placeholder="john.doe@example.com"
                    variant="filled"
                    mb={3}
                />
                <Input
                    placeholder="**************"
                    variant="filled"
                    mb={6}
                    type="password"
                />
                <Button colorScheme="telegram" mb={6}>
                    Login
                </Button>
            </Flex>
        </Flex>
    );
};

export default IndexPage;
