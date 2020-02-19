import React from 'react';

const Modal = ({ handleClose, show, friend }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    if (!friend) return null; 
    
    return (
      <div className={showHideClassName}>
        <section className="modal-main">

          <span className="modal-recipient">Recipient
            <br/>
            {friend.first_name}</span>

          <button className="modal-button" onClick={handleClose}>
            <p className="modal-button-text"> x </p>
          </button>

        </section>
      </div>
    );
};

export default Modal;