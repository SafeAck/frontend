"use client";

import { MdLogout } from "react-icons/md";

import { clearStorageAndCookies } from "../../../../utils/client/sessionHandler";

const LogoutButton = () => {
    return <MdLogout onClick={clearStorageAndCookies} />;
};

export default LogoutButton;
