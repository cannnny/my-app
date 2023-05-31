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
    // 入力したタスクの情報を保持するための変数を追加
    const [task, setTask] = useState('');
    // イベント時に実行される関数を定義
    const handleNewTask = (event) => {
        setTask(event.target.value);
    }

    return(
        <div>
            <h1>TODO LIST</h1>
            Add task : <input 
                value={task}
                placeholder='Add new Task'
                onChange={handleNewTask} />
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
