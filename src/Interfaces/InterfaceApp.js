import React from 'react';
import { TodoCount } from './../Components/TodoCount';
import { TodoSearch } from './../Components/TodoSearch';
import { TodoList } from './../Components/TodoList';
import { TodoItem } from './../Components/TodoItem';
import { TodoLoading } from './../Icons/TodoLoading';
import { TodoError } from './../Icons/TodoError';
import { EmptyTodos } from './../Components/EmptyTodos';
import { CreateButton } from './../Components/CreateButton';
import { TodoContext } from './../Components/TodoContex';
import { Modal } from '../Components/Modal';
import { TodoForm } from '../Components/TodoForm';



function AppUI() {

    const { loading, 
        error, 
        searchActividad, 
        completedActividad, 
        deleteActividad,
        openModal,
        setOpenModal, 
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCount />
            <TodoSearch />

            <TodoList>
                {loading && (
                    <>
                        <TodoLoading />
                        <TodoLoading />
                        <TodoLoading />
                    </>
                )}

                {error && <TodoError />}

                {!loading && searchActividad.length === 0 && <EmptyTodos />}

                {searchActividad.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onCompleted={() => completedActividad(todo.text)}
                        onDeleted={() => deleteActividad(todo.text)}
                    />
                ))}
            </TodoList>


            <CreateButton setOpenModal={setOpenModal}/>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };