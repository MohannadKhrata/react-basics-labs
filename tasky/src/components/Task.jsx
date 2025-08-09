import React from 'react';

const Task = (props) => {
  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      {props.description && <p className="desc">{props.description}</p>}
      <p className={`priority ${props.priority}`}>{props.priority}</p>
    </div>
  );
};

export default Task;
