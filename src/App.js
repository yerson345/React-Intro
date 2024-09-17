import './App.css';
import React from 'react';
import { AppUI } from './Interfaces/InterfaceApp';
import { TodoProvider } from './Components/TodoContex';


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  );
}

export default App;
