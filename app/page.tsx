// import dynamic from "next/dynamic";
import LoginBox from "./ui/login/LoginBox/LoginBox";

// const ThemeChangerButton = dynamic(
//     () => import("./ui/utilComponents/ThemeChangerButton/ThemeChangerButton"),
//     { ssr: false }
// );

const IndexPage = () => {
    return <LoginBox />;
};

export default IndexPage;
