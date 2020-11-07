import React, { useState } from 'react';
import './App.css';
import Timer from '../Timer/Timer';
import TimerButtons from '../TimerButtons/TimerButtons';
import { timeState } from '../../types/types';

function App() {
  const [time, setTime] = useState<timeState>({ms:0, s:0, m:0, h:0})
  const [interv, setInterv] = useState<any>();
  const [status, setStatus] = useState<number>(0)

  const start = () => {
    run()
    setStatus(1)
    setInterv(setInterval(run, 10))
  }
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h

  const run = () => {
    if (updatedM === 60) {
      updatedH++
      updatedM = 0
    }
    if (updatedS === 60) {
      updatedM++
      updatedS = 0
    }
    if (updatedMs === 100) {
      updatedS++
      updatedMs = 0
    }
    updatedMs++
    return setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH})
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({ms:0, s:0, m:0, h:0})

  }

  const resume = () => start()
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
        <Timer time={time}/>
        <TimerButtons start={start} stop={stop} resume={resume} reset={reset} status={status}/>
        </div>
      </div>
    </div>
  );
}

export default App;
