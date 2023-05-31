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
        </div>
    );
}

export default TodoList;
