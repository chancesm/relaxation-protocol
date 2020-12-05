import React, {useEffect, useState} from 'react';
import './App.scss';
import { Header } from '../../components';
import { useLocalStorage } from '../../hooks'
function App() {
  const [currentPhase, setCurrentPhase] = useLocalStorage('currentPhase', 0);
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [currentTask, setCurrentTask] = useLocalStorage('currentTask', 0);
  const [phases, setPhases] = useLocalStorage('phases', [1,2])
  useEffect(() => {
    if (currentPhase !== 0) {
      fetch(`/api/getTasks?phase=${currentPhase}`).then(response => response.json()).then(data => setTasks(data));
    }
  }, [currentPhase])
  return (
    <div className="App">
      <Header title="Relaxation Protocol"/>
      {tasks.map(task => (<p key={task.id}>{task.fields.Text}</p>))}
    </div>
  );
}

export default App;
