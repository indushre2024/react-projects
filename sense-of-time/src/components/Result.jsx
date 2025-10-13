import { useImperativeHandle, useRef } from "react";

export default function Result({dialogRef, timeLeft, targetTime, onReset}){
    const dialog = useRef();
    console.log(timeLeft);
    useImperativeHandle(dialogRef,()=>{
        return {
            openDialog(){
                dialog.current.showModal();
            }
        }
    })

    function calculateScore(){
        const score = (1-(timeLeft/(targetTime*1000))) *100;
        return score.toFixed(2);
    }

    return (
        <dialog ref={dialog} onClose={onReset}>
            <p className="status">You {timeLeft<=0?'Lost':'Won'}</p>
            <p className="score">Your Score: {timeLeft<=0?0:calculateScore()}</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}