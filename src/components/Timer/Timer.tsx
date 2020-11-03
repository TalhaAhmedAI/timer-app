import React, {useState} from 'react'
import TimerButton from '../TimerButton/TimerButton'
import "./Timer.css"


const Timer = () => {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [isOn, setIsOn] = useState(false)

    const startTimer = () => {
        console.log("Starting timer")
    }

    const stopTimer = () => {
        console.log("Stopping timer")
    }

    const resetTimer = () => {
        console.log('Resetting timer')
    }

    return <div className="timer-container">
        <div className="timer-display"></div>
        <div className="timer-button-container">
            <TimerButton buttonAction={this.startTimer} buttonValue={'start'}/>
            <TimerButton buttonAction={this.startTimer} buttonValue={'start'}/>
            <TimerButton buttonAction={this.startTimer} buttonValue={'start'}/>
        </div>
    </div>

}

export default Timer;
