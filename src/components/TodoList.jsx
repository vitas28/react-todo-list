import React, { useState } from 'react';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';
import Line from './UI/Line';

const TodoList = () => {
  const [todos, setTodos] = useState([
    'React',
    'Redux',
    'TypeScript',
    'NodeJs',
  ]);
  const [addTodo, setAddTodo] = useState('');
  const [addError, setAddError] = useState(false);
  const [removeError, setRemoveError] = useState(false);

  const changeHandler = (event) => {
    setAddTodo(event.target.value);
  };

  const errorAdd = (setValue) => {
    setValue(true);
    setTimeout(() => {
      setValue(false);
    }, 3000);
  };

  const addHandler = () => {
    if (addTodo === '') return errorAdd(setAddError);
    setTodos([...todos, addTodo]);
    setAddTodo('');
  };

  const removeHandler = (index) => {
    if (todos.length === 1) return errorAdd(setRemoveError);
    const newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray);
  };

  return (
    <div className="gradient">
      <div className="wrapper">
        <div className="task">
          <h1>Task list</h1>
          <div className="todos">
            {todos.map((todo, index) => (
              <div key={index}>
                <button
                  className={'delete'}
                  onClick={() => removeHandler(index)}
                >
                  &times;
                </button>
                <span>{todo}</span>
              </div>
            ))}
          </div>
          {removeError && (
            <h1 className="error">Your task list can not be empty</h1>
          )}
        </div>
        <Line />
        <div className="task add-todo">
          <h1>Add some task</h1>
          <Input value={addTodo} onChange={changeHandler} />
          <Button onClick={addHandler}>Add task</Button>
          {addError && <h1 className="error">You can not add empty task</h1>}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
