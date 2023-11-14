import Header from "./components/Header"
import Main from "./components/Main"
import Question from "./components/Question";
import Result from "./components/Result";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Button } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

const TIMER = 5 * 1000

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [results, setResults] = useState([])

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  const handleFinishQuiz = (quizFinished) => {
    setQuizFinished(quizFinished)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {!quizFinished && <Header></Header>}
      <Main quizFinished={quizFinished}>
        {(!quizStarted) && (!quizFinished) && <Button variant="outlined" size="large" onClick={handleStartQuiz}>Start Quiz</Button>}
        {(quizStarted) && (!quizFinished) && <Question timer={TIMER} onQuizFinished={handleFinishQuiz} results={(results) => { setResults(results) }} />}
        {(quizFinished) && <Result results={results}></Result>}
      </Main>
    </ThemeProvider>
  )
}

export default App