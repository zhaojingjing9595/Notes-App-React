import React from "react";
import NoteTag from "./NoteTag";
import { v4 } from "uuid";

function NoteGrid({ updatedGrid, onClickShowModal, deleteNoteConfirm }) {
  return (
    <div className="note-grid d-flex flex-wrap w-50 mx-auto ">
      {updatedGrid.map((noteObj) => (
        <NoteTag
          key={v4()}
          noteObj={noteObj}
          deleteNoteConfirm={deleteNoteConfirm}
          onClickShowModal={onClickShowModal}
        />
      ))}
    </div>
  );
}

export default NoteGrid;
