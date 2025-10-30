import Trophy from "../assets/quiz-complete.png";
import questions from '../../questions';

export default function Summary({answers}){
    const totalCount = questions.length;
    const correct = [...answers.filter((answer, index)=>questions[index].answers[0]===answer)].length;
    const unAnswered = [...answers.filter((answer)=> answer === null)].length;
    const wrong = questions.length - correct - unAnswered;
    const percentages = [(correct/totalCount)*100,unAnswered * 100/totalCount, wrong * 100/totalCount];
    return (
        <div id="summary">
            <img src={Trophy} alt="Trophy image" />
            <h2>Quiz completed!</h2>
            <div id="summary-stats">
                <p><span className="number">{percentages[0].toFixed(2)}</span> <span className="text">Correct Answers</span></p>
                <p><span className="number">{percentages[1].toFixed(2)}</span> <span className="text">Skipped Answers</span></p>
                <p><span className="number">{percentages[2].toFixed(2)}</span> <span className="text">Wrong Answers</span></p>
            </div>
            <ol>
                {questions.map((question,index)=>{
                    return (
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className="question">{question.text}</p>
                            <p className={`user-answer ${answers[index]?answers[index]===question.answers[0]?"correct":"wrong":"skipped"}`}>{answers[index]?answers[index]:"Not Answered"}</p>
                        </li>
                    )
                })}
            </ol>
            
        </div>
    );
}