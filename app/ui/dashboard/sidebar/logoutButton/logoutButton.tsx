'use client';

import { Button } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";

import { clearStorageAndCookies } from "../../../../utils/client/sessionHandler";

const LogoutButton = () => {
    return (
        <Button onClick={clearStorageAndCookies} >
            <MdLogout />
        </Button>
    );
};

export default LogoutButton;
