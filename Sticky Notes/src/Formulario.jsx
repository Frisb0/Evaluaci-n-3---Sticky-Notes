import React, { useState } from 'react';

function NoteForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isImportant, setIsImportant] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description.trim()) {
            alert('La descripción es obligatoria.');
            return;
        }
        onSubmit({ title, description, isImportant });
        setTitle('');
        setDescription('');
        setIsImportant(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-4 my-3">
                <div className="col-md-3">
                    <label className="form-label" htmlFor="Título">Título</label>
                    <input
                        className="form-control"
                        id="Título"
                        type="text"
                        placeholder="Ingrese el título"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <label className="form-label" htmlFor="Descripción">Descripción</label>
                    <input
                        className="form-control"
                        id="Descripción"
                        type="text"
                        placeholder="Ingrese la descripción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="col-md-3 d-flex align-items-center">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="isImportant"
                            checked={isImportant}
                            onChange={(e) => setIsImportant(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="isImportant">
                            ¡Importante!
                        </label>
                    </div>
                </div>
                <div className="col-md-3 d-flex align-items-end">
                    <button type="submit" className="btn btn-primary">AGREGAR</button>
                </div>
            </div>
        </form>
    );
}

export default NoteForm;