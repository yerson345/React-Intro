import React from "react";
import { useLocalStorage } from "../CustomHook/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const { item: actividad, saveItem: saveActivity, loading, error } = useLocalStorage('Actividades_V1', []);

    // Mostrar actividades completadas
    const completedTodos = actividad.filter((todo) => !!todo.completed).length;

    // Cantidad en el arreglo
    const totalTodos = actividad.length;

    //Buscar por palabra
    const searchActividad = actividad.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

    const addTodo = (text) => {
        const newActivity = [...actividad];
        newActivity.push({
            text,
            completed: false,
        })
        saveActivity(newActivity);
    };

    const completedActividad = (text) => {
        const actividadIndex = actividad.findIndex((todo) => todo.text === text);
        const newActivity = [...actividad];
        newActivity[actividadIndex].completed = !newActivity[actividadIndex].completed;
        saveActivity(newActivity);
    };

    const deleteActividad = (text) => {
        const newActivity = actividad.filter((todo) => 
            todo.text.toLowerCase() !== text.toLowerCase()
        );
        saveActivity(newActivity);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            searchActividad,
            completedActividad,
            completedTodos,
            totalTodos,
            deleteActividad,
            searchValue,
            setSearchValue,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
