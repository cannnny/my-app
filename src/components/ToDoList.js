import {useState} from 'react';

const TodoList = () => {
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
    ]

    // useStateにinitialStateを指定すると、todosにTodoリストが保存される
    const [todos, setTodos] = useState(initialState);

    return(
        <div>
            <h1>TODO LIST</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
