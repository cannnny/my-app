import { useState } from "react";
import AddTodo from './AddTodo';
import ToDoList from "./ToDoList";

const ToDo = () => {
    // タスクをオブジェクトとして保存
    const initialState = [
        {
            task: 'Learn React',
            isCompleted: false
        },
        {
            task: 'Learn Vue.js',
            isCompleted: false
        },
        {
            task: 'Learn Python',
            isCompleted: false
        }
    ];

    // useStateにinitialStateを指定すると、todosにTodoリストが保存される
    const [todos, setTodos] = useState(initialState);

    return (
        <div>
            <h1>TODO LIST</h1>
            <AddTodo setTodos={setTodos} />
            <ToDoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default ToDo;