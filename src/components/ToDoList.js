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
    
    // 入力したタスクの情報を保持するための変数を定義
    const [newTodo, setNewTodo] = useState('');
    
    // イベント時に実行される関数を定義
    const handleNewTask = (event) => {
        setNewTodo(event.target.value);
    }
    
    // 追加ボタンの押下時に実行される関数を定義
    const handleSubmit = (event) => {
        event.preventDefault() // リロードさせない
        if(newTodo === '') return

        setTodos(todos => 
            [...todos, {task: newTodo, isCompleted: false}]
        )
        // 初期化
        setNewTodo('')
    }

    // 削除時に実行される関数を定義
    // const handleRemoveTask = (index) => {
    //    const currentTodos = [...todos]
    //    currentTodos.splice(index, 1)
    //    setTodos(currentTodos)
    //}

    // 削除時にタスクを完了させる関数を定義
    const handleUpdateTask = (index) => {
        let currentTodos = todos.map((todo, todoIndex) => {
            if(todoIndex === index){
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        })
        setTodos(currentTodos);
    };

    return(
        <div>
            <h1>TODO LIST</h1>
            <form onSubmit = {handleSubmit}>
            Add task : 
                <input 
                    value={newTodo}
                    placeholder='Add new Task'
                    onChange={handleNewTask}
                />
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}
                        style={todo.isCompleted === true ? {textDecorationLine: 'line-through'} : {} }>
                        {todo.task}<span onClick={() => handleUpdateTask(index)}>✗</span></li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
