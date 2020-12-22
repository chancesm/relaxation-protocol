import React, {useEffect, useState} from 'react';
import './App.scss';
import { Header, Task } from '../../components';
import { useLocalStorage } from '../../hooks'
function App() {
  const [currentPhase, setCurrentPhase] = useLocalStorage('currentPhase', 'Phase-1');
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [currentTask, setCurrentTask] = useLocalStorage('currentTask', 0);
  const [phases, setPhases] = useLocalStorage('phases', [])
  useEffect(() => {
    fetch('/api/getPhases').then(response => response.json()).then(data => setPhases(data))
  }, [])
  useEffect(() => {
    if (currentPhase !== '') {
      fetch(`/api/getTasks?phase=${currentPhase}`).then(response => response.json()).then(data => setTasks(data));
    }
  }, [currentPhase])
  return (
    <div className="App">
      <Header 
        title="Relaxation Protocol"
        options={phases}
        handler={(val) => setCurrentPhase(val)}
        selectedPhase={currentPhase}
      />
      <div className="content">
        <Task />
      </div>
    </div>
  );
}

export default App;
