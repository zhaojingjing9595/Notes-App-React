import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Form from "./Components/Form";
import Modal from "./Components/Modal";
import NoteGrid from "./Components/NoteGrid";

function App() {
  const [grid, setGrid] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  
  function addNoteToGrid(newNoteObj) {
    // setGrid((prevState) => prevState.concat(newNoteObj));
    setGrid((prevState) => [newNoteObj, ...prevState]);
  }

  function replaceNoteToGrid(noteObj, selectedNote) {
    const selectedNoteIndex = grid.findIndex((obj) => obj === selectedNote);
    const newGrid = [...grid];
    newGrid.splice(selectedNoteIndex, 1, noteObj);
    setGrid(newGrid);
    setSelectedNote(noteObj);
  }

  function deleteNoteConfirm(noteObj) {
    // "filter": create a new array, not changing the origin array
    // setGrid(grid.filter(note=>note!==noteObj))
    const selectedNoteIndex = grid.findIndex((obj) => obj === noteObj);
    const result = window.confirm("Are you sure you want to delete your note?");
    if (result === true) {
      const newGrid = [...grid];
      newGrid.splice(selectedNoteIndex, 1);
      setGrid(newGrid);
    }
  }

  function onClickShowModal(e, noteObj) {
    e.preventDefault();
    let newObj = { ...selectedNote };
    newObj = noteObj;
    setSelectedNote(newObj);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div id="App">
      <Form
        buttonType="Add"
        updateGridMethod={addNoteToGrid}
        selectedNote={{ note: "", title: "" }}
      />
      <NoteGrid
        updatedGrid={grid}
        onClickShowModal={onClickShowModal}
        deleteNoteConfirm={deleteNoteConfirm}
      />
      {/* better to put Modal inside NoteGrid, cuz Modal and NoteTag are siblings and having the same parent */}
      <Modal
        selectedNote={selectedNote}
        modalState={showModal}
        updateGridMethod={replaceNoteToGrid}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

export default App;
