import React, { useEffect } from 'react';
import "./notesSection.scss";

export function NotesSection({ noteArray, setNoteArray }) {

    
    function deleteNote(noteId) {
        let tempArr = noteArray;
        tempArr.splice([noteId.index], 1);
        setNoteArray([...tempArr]);
    }
    
    function editNote(noteId){
        let modifiedNote = prompt("Modified note");

        let tempArr = noteArray;
        tempArr[noteId.index] = modifiedNote;
        setNoteArray([...tempArr]);
    }

    let list = noteArray.map((element, index) => 
        <section className="note" key={index}>
            <p>{element}</p>
            <button className="removeNote" onClick={() => deleteNote({index})}>Remove Note</button>
            <button className="editNote" onClick={() => editNote({index})}>Edit</button>
        </section>
    );

    useEffect(() => {
        console.log("rerender noteSection");
    })

    return (
        <section className="notesSection">
            {list}
        </section>
    )
}