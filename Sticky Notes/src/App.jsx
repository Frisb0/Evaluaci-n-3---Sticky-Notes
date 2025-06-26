import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import Ficha from './Ficha';
import './App.css';

function App() {
    const notas = [];

    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || notas);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (newNoteData) => {
        const newNote = {
            id: Date.now(),
            title: newNoteData.title,
            description: newNoteData.description,
            isImportant: newNoteData.isImportant,
        };
        setNotes((prevNotes) => [...prevNotes, newNote]);
    };

    const deleteNote = (idToDelete) => {
        setNotes((prevNotes) => prevNotes.filter(note => note.id !== idToDelete));
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Post It Simulator!</h1>
            <Formulario onSubmit={addNote} />
            <div className="notes-grid-container">
                {notes.map((note) => (
                    <Ficha
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        description={note.description}
                        isImportant={note.isImportant}
                        onDelete={deleteNote}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
