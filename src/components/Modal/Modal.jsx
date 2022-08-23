import React from "react";
import "./Modal.scss";

const Modal = ({ php, close }) => {
    return (
        <>
            <div className="modal">
                <div className="container-fluid">
                    <div className="modal__hero">
                        <div className="modal__nav">
                            <h5 className="modal--title">Php</h5>
                            <img src={close} alt="" className="modal--close" />
                        </div>
                        <div className="modal__aside">
                            <img src={php} alt="" className="modal--book" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
