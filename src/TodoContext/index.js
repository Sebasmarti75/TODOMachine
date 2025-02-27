import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){
    const {
        item: todos = [],
        saveItem: saveTodos,
        loading, 
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setsSearchValue] = React.useState(''); 
      
      const [openModal, setOpenModal] = React.useState(false); 
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter( (todo) => { 
        const todoText = todo.text ? todo.text.toLowerCase() : '';
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
      
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        });
        saveTodos(newTodos);
      }
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) =>todo.text ===text
        );
    
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) =>todo.text ===text
        );
    
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={{completedTodos,totalTodos, searchValue,setsSearchValue,searchedTodos,completeTodo,deleteTodo,loading,error,setOpenModal,openModal,addTodo}}>
            {children}
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider}