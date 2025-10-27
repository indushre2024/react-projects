import {useState, useEffect} from 'react';

export default function ProgressBar({time, handleTimeout, answered}){
    const [progressTimer, setProgressTimer] = useState(time);

    useEffect(()=>{
        setProgressTimer(time);
        const timer = setTimeout(()=>{
            !answered && handleTimeout();
        },time);
        const timer1 = setInterval(()=>{
            setProgressTimer(progressTime=>progressTime-100);
        },100);
        return ()=>{
            timer && clearTimeout(timer);
            clearInterval(timer1);
        }
    }, [handleTimeout, time]);

    return (
        <progress value={progressTimer} max={time}>
        </progress>
    );
}