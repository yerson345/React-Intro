import React from "react";
import './../Styles/TodoForm.css';
import { TodoContext } from "./TodoContex";

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newActividadValue, setNewActividadValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (newActividadValue.trim()) { // Verifica si hay un valor no vacío
            addTodo(newActividadValue);
            setNewActividadValue(''); // Limpia el campo después de agregar
            setOpenModal(false);
        }
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewActividadValue(event.target.value);
    }

    return (
        <div className="modal-overlay">
            <form className="todoForm" onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
                <label className="todoForm-label">Escribe tu nueva actividad</label>
                <textarea 
                    placeholder="Mañana ir al GYM" 
                    value={newActividadValue} 
                    onChange={onChange}
                ></textarea>

                <div className="todoForm-buttons">
                    <button
                        type="button"
                        className="todoForm-button todoForm-button-cancel"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit" // Cambiado de "button" a "submit" para enviar el formulario
                        className="todoForm-button todoForm-button-add"
                    >
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    );
}

export { TodoForm };
