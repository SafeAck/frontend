import LoginBox from "./ui/login/LoginBox/LoginBox";
import dynamic from "next/dynamic";

// const ThemeChangerButton = dynamic(
//     () => import("./ui/utilComponents/ThemeChangerButton/ThemeChangerButton"),
//     { ssr: false }
// );

const IndexPage = () => {
    return (
        <div>
            <LoginBox />
        </div>
    );
};

export default IndexPage;
