import React from "react";
import Modal from "..";
import ThemeItem from "./ThemeItem";
import { ThemeName } from "../../../contexts/ThemeContext";

type ThemeModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ThemeModal: React.FC<ThemeModalProps> = ({ onClose, isOpen }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-white px-4 py-1 rounded-md w-[100vw] sm:w-[50vw] max-h-[70vh] overflow-auto scroll">
                <ThemeItem
                    thm={ThemeName.PINK}
                    name="Pink"
                    handleClose={onClose}
                />
                <div className="w-full bg-gray-300 h-[1px]"></div>
                <ThemeItem
                    thm={ThemeName.HALLOWEEN}
                    name="Halloween"
                    handleClose={onClose}
                />
                <div className="w-full bg-gray-300 h-[1px]"></div>
                <ThemeItem
                    thm={ThemeName.CHESSMAZE}
                    name="ChessMaze"
                    handleClose={onClose}
                />
            </div>
        </Modal>
    );
};
export default ThemeModal;
