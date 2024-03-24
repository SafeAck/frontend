"use client";

import { Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import { MenuItem } from "../menuItems/menuItems";

const MenuLink: React.FC<{ item: MenuItem }> = ({ item }) => {
    const pathname: string = usePathname();
    const hoverBgColor = useColorModeValue("gray.100", "gray.700");

    return (
        <Link
            href={item.path}
            padding="20px"
            display="flex"
            alignItems="center"
            gap="10px"
            margin="5px 0px"
            borderRadius="10px"
            _hover={{ backgroundColor: hoverBgColor }}
            backgroundColor={pathname === item.path ? hoverBgColor : undefined}
            // className={`${styles.container} ${
            //     pathname === item.path && styles.active
            // }`}
        >
            {item.icon}
            {item.title}
        </Link>
    );
};

export default MenuLink;
