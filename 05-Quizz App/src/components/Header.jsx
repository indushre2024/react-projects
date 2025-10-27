import logoImage from "../assets/quiz-logo.png";

export default function Header(){
    return (
        <header>
            <img src={logoImage} alt="Quiz Text pad image" />
            <h1>React Quizz</h1>
        </header>
    );
}