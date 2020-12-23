import React, {useEffect, useState} from 'react';
import './App.scss';
import { Header, Task } from '../../components';
import { useLocalStorage } from '../../hooks'
function App() {
  const [currentPhase, setCurrentPhase] = useLocalStorage('currentPhase', 'Phase-1');
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [currentTask, setCurrentTask] = useLocalStorage('currentTask', 0);
  const [phases, setPhases] = useLocalStorage('phases', [])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/getPhases')
      .then(response => response.json())
      .then(data => {
        setPhases(data);
      })
  }, [])
  useEffect(() => {
    if (currentPhase !== '') {
      setLoading(true)
      fetch(`/api/getTasks?phase=${currentPhase}`)
        .then(response => response.json())
        .then(data => {
          setTasks(data);
        });
    }
    setCurrentTask(0);
  }, [currentPhase])
  useEffect(() => {
    if(tasks.length > 0 && phases.length > 0){
      setLoading(false);
    }
    else(setLoading(true))
  }, [phases, tasks])
  const clickHandle = () => {
    const audio = document.querySelector(`audio`);
    audio.currentTime = 0;
    audio.play();
  }
  return (
    <div className="App">
      <Header 
        title="Relaxation Protocol"
        options={phases}
        handler={(val) => setCurrentPhase(val)}
        selectedPhase={currentPhase}
      />
      { loading ? <div className="content"><div class="lds-dual-ring"></div></div> : 
      <>
        <div className="content">
          <Task task={tasks[currentTask]} totalTasks={tasks.length}/>
        </div>
        <div className="footer">
          <button className="clickButton" onClick={clickHandle}>CLICK</button>
          <button 
            className="nextButton"
            disabled={currentTask >= tasks.length - 1}
            onClick={() => setCurrentTask(currentTask + 1)}
          >
            NEXT
          </button>
        </div>
        <audio  src="click.mp3"></audio>
      </>
      }
    </div>
  );
}

export default App;
