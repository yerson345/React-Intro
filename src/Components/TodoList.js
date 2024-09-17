import '../Styles/TodoList.css'

/* Children renderiza lo que esta adentro */

function TodoList({ children }) {
    return (
        <ul className="TodoList">
            {children}
        </ul>
    );
}

export { TodoList }