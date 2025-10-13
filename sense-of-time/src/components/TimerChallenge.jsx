import {useState, useRef} from 'react';
import Result from './Result';

export default function TimerChallenge({challengeTime,children}){
    const timer = useRef();
    const dialog = useRef();
    const isTimerOn = useRef(false);
    const [timeLeft, setTimeLeft] = useState(challengeTime * 1000);

    if(timeLeft<=0){
        endGame();
    }

    function handleReset(){
        setTimeLeft(challengeTime*1000); 
    }

    function handleClick(){
        if(isTimerOn.current){
            endGame();
        }
        else{
            isTimerOn.current = true;
            timer.current = setInterval(()=>{
            setTimeLeft(timeLeft=>timeLeft-10);
        }, 10)
        }
    }

    function endGame(){
        clearInterval(timer.current);
        isTimerOn.current = false;
        dialog.current.openDialog();  
    }

     return (
        <>
            <Result dialogRef = {dialog} timeLeft={timeLeft} targetTime={challengeTime} onReset = {handleReset} />
            <div className="challenge">
                <p className="level">{children}</p>
                <p className="time"><i className="fa-solid fa-clock"></i> {challengeTime} seconds</p>
                <button onClick={handleClick}>{isTimerOn.current?'Stop':'Start'}</button>
            </div>
        </>
    );
}