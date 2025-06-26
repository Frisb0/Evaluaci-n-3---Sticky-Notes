import React, { useEffect, useState } from 'react';
import './Note.css'; 

function Note({ id, title, description, isImportant, onDelete }) {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const randomRotation = Math.random() * 10 - 5;
        setRotation(randomRotation);
    }, []);

    const noteClass = isImportant ? 'note important' : 'note';

    return (
        <div className={noteClass} style={{ transform: `rotate(${rotation}deg)` }}>
            <button className="note-delete-button" onClick={() => onDelete(id)}>X</button>
            {title && <h3>{title}</h3>} 
            <p>{description}</p>
        </div>
    );
}

export default Note;