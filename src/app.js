import React, { useState } from 'react';
import { NotesSection } from './components/NotesSection/NotesSection';
import { SidebarMenu } from './components/SidebarMenu/SidebarMenu';
import './main.scss';

export function App() {

    const [noteArray, setNoteArray] = useState(["1", "2", "3"]);

    return (
        <div className="mainDiv">
            <SidebarMenu noteArray={noteArray} setNoteArray={setNoteArray}/>
            <NotesSection noteArray={noteArray} setNoteArray={setNoteArray}/>
        </div>
    )
}