import { useState } from "react"
import SideBar from "./components/SideBar"
import ProjectForm from "./components/ProjectForm"
import Project from "./components/Project"
import Box from "@mui/material/Box"
import img from "./assets/no-projects.png"
import Button from "@mui/material/Button"
import { blueGrey } from "@mui/material/colors"
import { createTheme, ThemeProvider } from "@mui/material/styles"


const theme = createTheme({
  palette: {
    primary: {
      light: blueGrey[600],
      main: blueGrey[800],
      dark: blueGrey[900],
      contrastText: '#fff'
    }
  }
})

theme.typography.h4 = {
  fontSize: theme.typography.h4.fontSize,
  [theme.breakpoints.down("xl")]: {
    fontSize: theme.typography.h5.fontSize,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.h6.fontSize,
  }
};

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "80%",
  width: "80%"
}


const App = () => {
  const [projectList, setProjectList] = useState([])
  const [taskList, setTaskList] = useState([])
  const [isProjectFormActive, setIsProjectFormActive] = useState(false)
  const [isProjectActive, setIsProjectActive] = useState(false)
  const [project, setProject] = useState({})


  const handleToggleProjectForm = (isActive) => {
    setIsProjectFormActive(isActive)
    setIsProjectActive(false)
  }


  const handleAddProject = (data) => {
    setProjectList((prevList) => [...prevList, data])
    setIsProjectFormActive(false)
    setIsProjectActive(false)
  }

  const handleOpenProject = (id) => {
    setIsProjectActive(true)
    setIsProjectFormActive(false)
    setProject(projectList.find((project) => project.id === id))
  }

  const handleDeleteProject = (projectId) => {
    setProjectList((prevList) => {
      return prevList.filter((project) => project.id !== projectId)
    })
    setIsProjectActive(false)
  }

  const handleAddTask = (task) => {
    setTaskList((prevList) => [...prevList, task]
    )
  }

  const handleDeleteTaks = (taskId) => {
    setTaskList((prevList) => {
      return prevList.filter((task) => task.id !== taskId)
    })
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SideBar toggleProjectForm={handleToggleProjectForm} projectList={projectList} openProject={handleOpenProject}></SideBar>
        <Box sx={style}>
          {isProjectFormActive &&
            <ProjectForm toggleProjectForm={handleToggleProjectForm} addProject={handleAddProject}></ProjectForm>
          }
          {isProjectActive &&
            <Project project={project} deleteProject={handleDeleteProject} taskList={taskList} addTask={handleAddTask} deleteTask={handleDeleteTaks}></Project>
          }
          {!isProjectFormActive && !isProjectActive &&
            <>
              <Box sx={{
                height: 100,
                width: 100
              }} component="img" src={img} />
              <h3>No Project Selected</h3>
              <p>Select a project or get started with new one</p>
              <Button variant="contained" onClick={() => handleToggleProjectForm(true)}>Create new Project</Button>
            </>
          }
        </Box>
      </ThemeProvider >
    </>
  )
}

export default App