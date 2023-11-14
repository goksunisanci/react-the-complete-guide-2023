import { Box, Card, CardContent } from "@mui/material"

const mainStyle = {
    backdropFilter: 'blur(1px)',
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(76,0,153,1) 130%)",
}

const cardStyle = {
    height: "60%",
    width: "40%",
    boxShadow: 20,
    borderRadius: "10px",
    background: "rgba(37,0,76,1)",
    position: "absolute",
}

const cardContentStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

const Main = ({ children, quizFinished }) => {

    cardStyle["height"] = quizFinished ? "80%" : "60%" 
    cardStyle["width"] = quizFinished ? "50%" : "40%" 
    cardStyle["top"] = quizFinished ? null : 50 

    return (
        <Box sx={mainStyle}>
            <Card sx={cardStyle}>
                <CardContent sx={cardContentStyle}>
                    {children}
                </CardContent>
            </Card>
        </Box>
    )
}


export default Main