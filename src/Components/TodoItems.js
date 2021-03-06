import React from "react";

export const TodoItems = ({ todo, onDelete }) => {
  return (
      <>
    <div className="py-2">
      <ul>
    <li>

      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn-sm btn-danger btn " onClick={() => onDelete(todo)}>
        Delete
      </button>
    </li>
      </ul>
    </div>
    <hr />
    </>
  );
};
