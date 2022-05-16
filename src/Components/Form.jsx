import React, { useEffect, useState } from "react";
import localforage from "localforage";
import "../css/Form.css";
import { v4 } from "uuid";
import TextareaAutosize from "react-textarea-autosize";

export default function Form({ buttonType, updateGridMethod, selectedNote }) {
  const [note, setNote] = useState(selectedNote.note);
  const [title, setTitle] = useState(selectedNote.title);

  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  function createNewNoteObj() {
    const date = new Date().toLocaleDateString("en-US", options);
    let noteObj = {
      note: note,
      date: date,
      title: title,
    };
    return noteObj;
  }

  function updateGrid(e) {
    e.preventDefault();
    const noteObj = createNewNoteObj();
    if (!selectedNote.date) {
      updateGridMethod(noteObj, selectedNote);
      setNote("");
      setTitle("");
    } else {
      noteObj.updateDate = noteObj.date;
      noteObj.date = selectedNote.date;
      updateGridMethod(noteObj, selectedNote);
    }
    let key = v4();
    localforage.setItem(key, noteObj, function (error, value) {
      console.log("i sent :>>", value);
      localforage.getItem(key, function (error, value) {
        console.log("i get :>> ", value);
      });
    });
  }

  return (
    <form className="shadow rounded d-flex flex-column">
      <input
        className="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextareaAutosize
        className="note mt-2"
        minRows={5}
        style={{ resize: "none", borderRadius: "5px", overflow: "hidden" }}
        type="text"
        value={note}
        placeholder="Your note..."
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        // disabled={!note&&!title }
        className="mt-3 btn btn-outline-dark"
        type="submit"
        style={{ borderRadius: "10px" }}
        onClick={(e) => updateGrid(e, updateGridMethod)}
      >
        {buttonType}
      </button>
    </form>
  );
}
