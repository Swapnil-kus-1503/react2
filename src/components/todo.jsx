import React from "react";

const Todo = () => {

    let [newTodo, setTodo] = React.useState("");

    const [todos, setTodos] = React.useState([]);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    return (
        <div>
            Todo
            <input onChange={handleChange} />

            <button onClick={() => {
                setTodos([
                    ...todos,
                    {id:Date.now(),value:newTodo,isCompeleted:false},
                ]);
            }}>Add</button>

            {/* todos */}

            {todos.map((todo) => (
                <div>{todo.value}</div>
            ))}
        </div>
    );
}

export default Todo;