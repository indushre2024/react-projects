import Trophy from "../assets/quiz-complete.png";

export default function Summary({answers}){
    console.log(answers);
    return (
        <div id="summary">
            
            <img src={Trophy} alt="Trophy image" />
            <h2>Quiz completed!</h2>
            <ul>
                {answers.map((ans, key)=>{
                    return <li key ={key}>{ans}</li>
                })}
            </ul>
        </div>
    );
}