import Projects from "./Projects"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import { blueGrey } from "@mui/material/colors"

const style = {
    display: "flex",
    flexDirection: "column",
    alignItems : "center",
    bgcolor : blueGrey[900],
    borderRadius : "0 30px 30px 0",
    width: "20%",
    height: "80%",
}

const SideBar = ({ toggleProjectForm, projectList, openProject }) => {
    
    return (
        <Box sx = {style}>
            <Typography variant="h4" sx = {{m: 3}}>YOUR PROJECTS</Typography>
            <Button variant="contained" onClick={() => toggleProjectForm(true)}>+ Add Project</Button>
            {projectList.length > 0 &&
                <Projects projectList={projectList} openProject={(id) => {openProject(id)}}></Projects>}
        </Box>
    )
}

export default SideBar