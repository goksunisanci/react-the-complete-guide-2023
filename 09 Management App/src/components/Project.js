import Task from "./Task";
import Button from "@mui/material/Button"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import { format } from "date-fns";




const Project = ({ project, deleteProject, taskList, addTask, deleteTask }) => {

    const handleDeleteProject = () => {
        deleteProject(project.id)
    }

    return (
        <Box sx={{ width: "80%", height:"100%"}}>
            <Box  sx={{minHeight: "20%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h3">{project.title}</Typography>
                    <Button variant="text" onClick={handleDeleteProject}>Delete</Button>
                </Box>
                <Typography variant="caption">{format(project.dueDate, "d MMMM yyyy")}</Typography>
                <Typography paragraph sx={{ mt: 8 }}>{project.description}</Typography>
            </Box>
            <Task taskList={taskList} projectId={project.id} addTask={addTask} deleteTask={deleteTask}></Task>
        </Box>
    )
}


export default Project