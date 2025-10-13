import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerChallenge from './components/TimerChallenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id = 'challenge-tiles'>
        <TimerChallenge challengeTime={2}>Easy</TimerChallenge>
        <TimerChallenge challengeTime={9}>Medium</TimerChallenge>
        <TimerChallenge challengeTime ={15}>Hard</TimerChallenge>
        <TimerChallenge challengeTime={23}>Harder</TimerChallenge>
      </div>
    </>
  )
}

export default App
