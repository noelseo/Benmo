import React from 'react';

const Modal = ({ handleClose, show, friend }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    if (!friend) return null; 
    
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {friend.first_name}
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    );
};

export default Modal;