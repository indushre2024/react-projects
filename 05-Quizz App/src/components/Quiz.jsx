import questions from "../../questions";
import {useState,useCallback} from 'react';
import Summary from "./Summary";
import ProgressBar from "./ProgressBar";
import Answers from "./Answers";

export default function Quiz(){  
    const [answers, setAnswers] = useState([]);
    const [answerState, setAnswerState] = useState({answered:false, selectedOption:null});
    const index = answers.length;

    function handleAnswerClick(answer, id){
        setAnswerState({answered:true, selectedOption:id});
        setTimeout(()=>{
            setAnswers(prev => [...prev,answer]);
            setAnswerState({answered:false, selectedOption:null})
        },1000);
    }

    function commitAnswer(){
        if(!answerState.answered) setAnswers(prev => [...prev,null]);
    }

    const handleTimeout = useCallback(()=>{
        commitAnswer();
    },[]);

    return (
        <>
            {answers.length>=questions.length && <Summary answers = {answers}/>}
            {answers.length<questions.length && <div id="quiz">
                <div id="question">
                    <ProgressBar time={answerState.answered?1000:10000} key={index} handleTimeout={handleTimeout} answered={answerState.answered}></ProgressBar>
                    <h2>{questions[index].text}</h2>
                </div>
                    <Answers key={index} index={index} handleAnswerSelect={handleAnswerClick} answerState={answerState}></Answers>
            </div>
            }
        </>   
    );
}