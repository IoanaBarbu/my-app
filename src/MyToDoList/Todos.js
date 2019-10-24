import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
              <div className="collection-item" key={todo.id}>
                <span style={{fontSize:"20px",color:"#b31d64"}}>{todo.content} </span>
                <button style={{margin:"5px"}}>
                <img src="./img/deleteIcon.png" alt="delete" onClick={() => {deleteTodo(todo.id)}}/>
                </button>
              </div>
      )
    })
  ) : (
              <p className="center" style={{fontSize:"30px",color:"#eeb32c"}}>You have no todo's left!</p>
  );
      return (
        <div className="todos collection">
         {todoList}
        </div>
  )
}
export default Todos;