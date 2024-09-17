import React from 'react';
import '../Styles/TodoCount.css';
import { TodoContext } from './TodoContex';

function TodoCount() {

    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)

    return (
        <h1 className='TodoCount'>
            {completedTodos === totalTodos ? (
                // Si todas las actividades están completadas, muestra este mensaje
                <span>¡Felicitaciones! Has completado todas las actividades.</span>
            ) : (
                // Si no todas las actividades están completadas, muestra este mensaje
                <>
                    Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> actividades
                </>
            )}
        </h1>
    );
}

export { TodoCount };