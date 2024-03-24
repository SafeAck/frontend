"use client";

import {
    Flex,
    Grid,
    GridItem,
    ListItem,
    UnorderedList,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";

// Local imports
import { MenuCategory, MenuItem, menuItems } from "./menuItems/menuItems";
import { noUserImage } from "../../../constants/urls";
import MenuLink from "./menuLink/menuLink";

const Sidebar: React.FC = () => {
    return (
        <Stack display="sticky" top="40px" my="5" mx="4">
            <Flex alignItems="center" gap="20px" marginBottom="20px">
                <Image
                    src={noUserImage}
                    alt="User Image"
                    width="50"
                    height="50"
                    borderRadius="50px"
                    objectFit="cover"
                />
                <Grid>
                    <GridItem fontWeight={500}>username</GridItem>
                    <GridItem fontSize="12px">Administrator</GridItem>
                </Grid>
            </Flex>
            <UnorderedList listStyleType={"none"}>
                {menuItems.map((cat: MenuCategory) => (
                    <ListItem key={cat.title}>
                        <Flex>
                            <Text fontWeight="bold" margin="10px 0px">
                                {cat.title}
                            </Text>
                        </Flex>
                        {cat.list.map((item: MenuItem) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </ListItem>
                ))}
            </UnorderedList>
        </Stack>
    );
};

export default Sidebar;
