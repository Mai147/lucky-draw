import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="h-28 sm:h-36 flex flex-col justify-center items-center text-4xl sm:text-5xl md:text-6xl font-['Danfo',serif] text-yellow-200">
            <span className="drop-shadow-lg">LUCKY DRAW</span>
        </div>
    );
};
export default Header;
