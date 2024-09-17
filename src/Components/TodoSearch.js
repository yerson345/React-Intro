import React from 'react';
import '../Styles/TodoSearch.css';
import { TodoContext } from './TodoContex';

function TodoSearch() {

    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)

    return (
        <input
            className='TodoSearch'
            placeholder="Palabra a buscar"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };
