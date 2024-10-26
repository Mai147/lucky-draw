import React from "react";
import Background from "../Background";

type LayoutProps = {
    children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <Background>{children}</Background>;
};
export default Layout;
