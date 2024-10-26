import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    return isOpen
        ? ReactDOM.createPortal(
              <div
                  className={`fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center`}
              >
                  <div
                      className="absolute bottom-0 top-0 left-0 right-0 bg-black opacity-20"
                      onClick={onClose}
                  ></div>
                  <div className="z-[999]">{children}</div>
              </div>,
              document.querySelector("body")!
          )
        : null;
};
export default Modal;
