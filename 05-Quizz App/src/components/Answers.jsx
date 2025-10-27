import questions from "../../questions";
import {useEffect, useState, useRef} from 'react';

export default function Answers({index, handleAnswerSelect, answerState}){
    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...questions[index].answers];
        shuffledAnswers.current.sort(()=> Math.random()-0.5);
    }

    function optionStyles(id){
        let classes = "";
        if(answerState.answered &&  answerState.selectedOption === id){
            if(questions[index].answers[0] === shuffledAnswers.current[id])
                classes += " correct";
            else 
                classes += " wrong";
        }
        return classes;
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer, id)=>{
                return <li key = {id} className="answer">
                    <button className={optionStyles(id)} onClick={()=>handleAnswerSelect(answer,id)} disabled={answerState.answered}>{answer}</button>
                </li>
            })}
        </ul>
    );
}