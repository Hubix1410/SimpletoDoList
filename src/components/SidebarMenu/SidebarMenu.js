import React, { useState, useEffect } from 'react';
import './sidebarMenu.scss';

export function SidebarMenu({noteArray, setNoteArray}){

    const [noteContent, setNoteContent] = useState("");

    function clearInputs(e) {
        e.preventDefault();
        setNoteContent("");
    }

    function noteContentValidation(e) {
        setNoteContent(e.target.value);
    }

    function addNewNote(e){
        e.preventDefault();

        if(noteContent === ""){
            return false;
        }

        let newContent = noteContent;

        let newNote = noteArray;
        
        newNote = [...newNote, newContent];
        setNoteArray(newNote);
    }

    useEffect(() => {
        console.log("rerender Sidebar");
    })

    return (
        <section className="menuSection">
            <h1 className="menuHeader">Create new note</h1>
            <form className="menuForm">
                Content: 
                <textarea 
                    className="menuInputContent" 
                    value={noteContent} 
                    onChange={noteContentValidation} />

                <button className="buttonAdd" 
                    onClick={addNewNote}> 
                    Create note 
                </button>

                <button className="buttonClear" 
                    onClick={clearInputs}> 
                    Clear 
                </button>
            </form>
        </section>
    )
}