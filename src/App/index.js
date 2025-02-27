import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: true},
//   {text: 'Tomar el curso de introduccion a React.js',completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'Melooooooo', completed: true}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')

function App() {
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
export default App;
