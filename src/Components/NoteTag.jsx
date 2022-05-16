import React, { useEffect, useState } from "react";
import localforage from "localforage";
import deleteLogo from "../svg/trash.svg";

function NoteTag({key, noteObj, deleteNoteConfirm, onClickShowModal }) {
  // const [storedData, setStoredData] = useState([]);

  // console.log(noteObj);
  // useEffect(() => {
  //   console.log("noteObj :>> ", noteObj);
  //   const newArray = storedData.concat([noteObj]);
  //   setStoredData(newArray);
  //   console.log("newArray :>> ", newArray);
  //   localforage.setItem("test", storedData, function (error, value) {
  //     console.log("i sent :>>", value);
  //     localforage.getItem("test", function (error, value) {
  //       console.log("i get :>> ", value);
  //     });
  //   });
  // },[noteObj]);
  return (
    // better use grid row container...
    <div className={"shadow rounded p-3 m-2 d-flex "}>
      <div
        className="d-flex flex-column"
        style={{ width: "175px" }}
        onClick={(e) => onClickShowModal(e, noteObj)}
      >
        <div className="text-truncate fw-bold fs-4">{noteObj.title}</div>
        <div className="text-truncate fs-5">{noteObj.note}</div>
        <div className="text-secondary fs-7 " style={{ fontSize: "11px" }}>
          created: {noteObj.date}
        </div>
        <div className="text-secondary fs-7" style={{ fontSize: "11px" }}>
          {noteObj.updateDate ? `updated: ${noteObj.updateDate}` : ""}
        </div>
      </div>
      <div className="align-top">
        <button type="button" className="btn p-0">
          <img
            src={deleteLogo}
            alt=""
            onClick={() => deleteNoteConfirm(noteObj)}
          />
        </button>
      </div>
    </div>
  );
}

export default NoteTag;
