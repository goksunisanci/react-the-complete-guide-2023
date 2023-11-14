import allQuestions from "../questions"
import { useState, useEffect } from "react"
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { LinearProgress, Box } from "@mui/material"


const Question = ({ timer, onQuizFinished, results }) => {
    const [questions, setQuestions] = useState(allQuestions.slice(1))
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0])
    const [progress, setProgress] = useState(100)
    const [selectedAnswerId, setSelectedAnswerId] = useState("")
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)
    const [userResults, setuserResults] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            if (!selectedAnswerId) {
                setProgress((prevProgress) => {
                    let newProgress = prevProgress - (1000 / (timer))
                    newProgress = newProgress < -10 ?  -999 : newProgress
                    return newProgress
                })
            }

        }, 10)

        return () => {
            clearInterval(interval)
        }
    }, [selectedAnswerId, timer])

    useEffect(() => {
        if (progress === -999) {
            setuserResults((prevResult) => {
                const questionResult = {
                    questionId : currentQuestion.id,
                    userAnswerId : null,
                    isCorrect : null
                }
                return ([...prevResult, questionResult])
            })
        }
    }, [progress, currentQuestion.id])

    const goNextQuestion = () => {
        if (questions.length > 1) {
            const notSelectedQuestions = questions.filter((question) => question.id !== currentQuestion.id)
            setQuestions(notSelectedQuestions)
            selectQuestion(notSelectedQuestions)
        } else {
            onQuizFinished(true)
            results(userResults)
        }
        setIsAnswerCorrect(null)
        setSelectedAnswerId(null)
    }

    const selectQuestion = (notSelectedQuestions) => {
        const randomNumber = Math.floor(Math.random() * (notSelectedQuestions.length))
        const currentQuestion = notSelectedQuestions[randomNumber]
        setCurrentQuestion(currentQuestion)
        setProgress(100)
    }

    const checkAnswer = (userAnswerId) => {
        let result = false
        if (userAnswerId === currentQuestion.correctAnswer.id) {
            result = true
        }
        setIsAnswerCorrect(result)

        setuserResults((prevResult) => {
                const questionResult = {
                    questionId : currentQuestion.id,
                    userAnswerId : userAnswerId,
                    isCorrect : result
                }
                return ([...prevResult, questionResult])
        })
    }

    useEffect(() => {
        if(userResults.length) {
            setTimeout(() => {
                goNextQuestion()
            }, 2000)
        }
    }, [userResults])

    const handleNextStep = (userAnswerId) => {
        if (selectedAnswerId || progress < 0) {
            return
        }

        setSelectedAnswerId(userAnswerId)
        setIsAnswerCorrect(null)

        setTimeout(() => {
            checkAnswer(userAnswerId)
        }, 1000)
    }

    const getBackgroundColor = (answerId) => {
        let result
        if (selectedAnswerId === answerId) {
            if (isAnswerCorrect) {
                result = "green"
            } else {
                result = "red"
            }
        } else {
            result = null
        }
        return result
    }

    return (
        <>
            <Box sx={{ width: "80%", height: 20, mb: 3 }}>
                {
                    (progress < 100) &&
                    <LinearProgress variant="determinate" value={progress} />
                }
            </Box>
            <List>
                <ListItem>
                    <ListItemText primary={currentQuestion.text} />
                </ListItem>
                {currentQuestion.answers.map((answer) => {
                    return (
                        <ListItem inset key={answer.id}>
                            <ListItemButton onClick={() => { handleNextStep(answer.id) }}
                                selected={selectedAnswerId === answer.id && isAnswerCorrect == null}
                                sx={{ bgcolor: getBackgroundColor(answer.id) }}>
                                <ListItemText primary={answer.text}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
}

export default Question