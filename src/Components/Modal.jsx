import React from "react";
import ReactModal from "react-modal";
import '../css/Modal.css'
import Form from "./Form";

function Modal({ selectedNote, modalState, handleCloseModal, updateGridMethod }) {
  const myModalStyle = {
    content: {
      backgroundColor: "white",
      width: "200px",
      position: "absolute",
      top: "40%",
      left: "47.45%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <ReactModal
      className="modal-form  rounded d-flex"
      style={myModalStyle}
      isOpen={modalState}
      onRequestClose={handleCloseModal}
      appElement={document.getElementById("App")}
    >
      <Form
        buttonType="Update"
        updateGridMethod={updateGridMethod}
        selectedNote={selectedNote}
      />
    </ReactModal>
  );
}

export default Modal;
