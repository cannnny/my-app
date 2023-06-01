import React from 'react';

const ToDoList = ({todos, setTodos}) => {
    //削除時に実行される関数を定義
    const handleRemoveTask = (index) => {
       const currentTodos = [...todos]
       currentTodos.splice(index, 1)
       setTodos(currentTodos)
    }

    // 削除時にタスクを完了させる関数を定義
    const handleUpdateTask = (clickIndex) => {
        let currentTodos = todos.map((todo, todoIndex) => {
            if(todoIndex === clickIndex){
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        })
        setTodos(currentTodos);
    };

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}
                        style={{textDecoration: todo.isCompleted ? 'line-through': 'none'}}
                    >
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => handleUpdateTask(index)}
                        />
                        {todo.task}
                        <span
                            onClick={() => handleRemoveTask(index)}
                            style={{cursor: 'pointer'}}
                        >
                            ✗
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;