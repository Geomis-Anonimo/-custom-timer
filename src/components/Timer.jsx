import React, { useState, useEffect } from 'react'
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'
import LapList from './LapList'
import SaveLap from './SaveLap';
import './Timer.css'


const Timer = () => {

  const [milliSecconds, setmilliSecconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapRecords, setLapRecords] = useState([]);

  const formatTime = () => {
    const minutes = ("0" + (Math.floor(milliSecconds / 60000) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(milliSecconds / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + Math.floor(milliSecconds / 10) % 100).slice(-2);

    return `${minutes}:${seconds}:${centiseconds}`
  }

  const startTimer = (interval) => {
    return setInterval(() => {
      setmilliSecconds((add) => add + 10);
    }, 10)
  };

  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  }

  const resetTime = () => {
    setmilliSecconds(0);
    setTimerOn(false);
    setLaps([]);
  }

  const addLap = () => {
    const lapTime = formatTime();
    setLaps([...laps, lapTime]);
  }

  useEffect(() => {
    let interval = null;

    if(timerOn) {
      interval = startTimer(interval);
    } else {
      interval = stopTimer(interval);
    }

    return () => stopTimer(interval);
  }, [timerOn]);

  return (
    <React.Fragment>
    <div className='timer-container'>
    <TimerDisplay time={formatTime()} />
    <TimerControls 
      timerOn={timerOn}
      onStart={() => setTimerOn(true)}
      onStop={() => setTimerOn(false)}
      onReset={resetTime}
      onLap={addLap}
    />
    <LapList laps={laps} onSaveLapRecord={setLapRecords} formatTime={formatTime} />
    </div>
    <SaveLap lapRecords={lapRecords} />
    </React.Fragment>
  )
}

export default Timer