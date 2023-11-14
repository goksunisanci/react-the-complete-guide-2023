import questions from "../questions"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const Result = ({ results }) => {
    const correctAnswersCount = results.filter((result) => result.isCorrect === true).length
    const wrongAnswersCount = results.filter((result) => result.isCorrect === false).length
    const skippedAnswersCount = results.filter((result) => result.isCorrect === null).length

    const resultPrecentages = {
        correctAnswers: (Math.round(correctAnswersCount / results.length * 100)),
        wrongAnswers: (Math.round(wrongAnswersCount / results.length * 100)),
        skippedAnswers: (Math.round(skippedAnswersCount / results.length * 100))
    }

    return (
        <>
            <Typography variant="h1">QUİZ COMPLETED!</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                my: 5,
            }}>
                <Box>
                    <Typography variant="h2">{resultPrecentages.correctAnswers}%</Typography>
                    <Typography>Correct Answer</Typography>
                </Box>
                <Box>
                    <Typography variant="h2">{resultPrecentages.wrongAnswers}%</Typography>
                    <Typography>Wrong Answer</Typography>
                </Box>
                <Box>
                    <Typography variant="h2">{resultPrecentages.skippedAnswers}%</Typography>
                    <Typography>Skipped Answer</Typography>
                </Box>
            </Box>
            <Divider variant="middle" flexItem />
            <Box>
                {
                    results.map((result, index) => {
                        const question = questions.find(question => question.id === result.questionId)
                        const answer = question.answers.find((answer => answer.id === result.userAnswerId))
                        const answerColor = result.isCorrect ? "green" : result.isCorrect === false ? "red" : null
                        return (
                            <List dense>
                                <ListItem key={result.questionId}>
                                    <ListItemAvatar>
                                        <Avatar sx={{
                                            bgcolor: "white",
                                            fontWeight: "bold"
                                        }}>{index + 1}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={question.text} secondary={answer ? answer.text : "-"} secondaryTypographyProps={{ sx: { color: answerColor } }} />
                                </ListItem>
                            </List>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Result