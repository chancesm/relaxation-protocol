import React from 'react';
import './Task.scss';

function Task(props) {
  return (
    <div className="Task">
      <div className="title">{props.task.fields.Task}/{props.totalTasks}</div>
      <div className="taskContent">
        <p>{props.task.fields.Text}</p>
      </div>
    </div>
  );
}

export default Task;
