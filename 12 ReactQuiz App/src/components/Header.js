import quizLogo from "../assets/quiz-logo.jpg"
import { Box } from "@mui/material"


const headerStyle = {
    display: "flex",
    justifyContent : "center",
    maxHeight:320,
    width:"100%",
    bgcolor: "rgba(0,0,0,1)"
}
const Header = () => {
    return (
        <Box sx={headerStyle} pt={5}>
            <Box component="img" src={quizLogo} alt="" height={"auto"} maxWidth={400} />
        </Box>
    )
}

export default Header