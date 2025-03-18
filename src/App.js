import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy milk', completed: false },
        { id: 2, text: 'Finish homework', completed: false },
        { id: 3, text: 'Drink creatine', completed: false }
    ]);
    const [newTodoText, setNewTodoText] = useState('');

    const addTodo = () => {
        if (newTodoText.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            text: newTodoText,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setNewTodoText('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const editTodo = (id, newText) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="app">
            <div className="todo-container">
                <div className="header">Today</div>

                <div className="todo-list">
                    {todos.map(todo => (
                        <div key={todo.id} className="todo-item">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <span className={todo.completed ? 'completed' : ''}>
                {todo.text}
              </span>
                            <button
                                className="edit-btn"
                                onClick={() => {
                                    const newText = prompt('Edit todo:', todo.text);
                                    if (newText !== null) editTodo(todo.id, newText);
                                }}
                            >
                                ✏️
                            </button>
                        </div>
                    ))}
                </div>

                <div className="new-todo">
                    <input
                        type="text"
                        placeholder="New Item"
                        value={newTodoText}
                        onChange={(e) => setNewTodoText(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="add-btn" onClick={addTodo}>+</button>
                </div>
            </div>
            <div className="footer">Copyright © 2024</div>
        </div>
    );
}

export default App;