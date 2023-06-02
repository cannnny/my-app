import {useState} from 'react';

const AddTodo = ({setTodos}) => {
    // 入力したタスクの情報を保持するための変数を定義
    const [newTodo, setNewTodo] = useState('');

    // イベント時に実行される関数を定義
    const handleNewTask = (event) => {
        setNewTodo(event.target.value);
    };

    // 追加ボタンの押下時に実行される関数を定義
    const handleSubmit = (event) => {
        event.preventDefault() // リロードさせない
        if(newTodo === '') return

        setTodos(todos => 
            [...todos, {task: newTodo, isCompleted: false}]
        )
        // 初期化
        setNewTodo('')
    };

    return (
        <div className="addTask">
            <form onSubmit = {handleSubmit}>
            Add task : 
                <input 
                    value={newTodo}
                    placeholder='Add new Task'
                    onChange={handleNewTask}
                />
            </form>
        </div>
    );
}

export default AddTodo;