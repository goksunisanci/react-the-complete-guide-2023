import TextField from '@mui/material/TextField'
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useState } from "react"
import uuid from 'react-uuid';



const Task = ({ taskList, projectId, addTask, deleteTask }) => {
    const [taskTitle, setTaskTitle] = useState("")

    const filterTaskList = (tasks, projectId) => {
        return tasks.filter((task) => task.projectId === projectId)
    }

    const handleTaskSubmit = (event) => {
        event.preventDefault()
        const task = {
            projectId: projectId,
            id: uuid(),
            title: taskTitle
        }
        addTask(task)
        setTaskTitle("")
    }

    const handleDeleteTask = (taskId) => {
        deleteTask(taskId)
    }

    const filteredTaskList = filterTaskList(taskList, projectId)
    return (
        <Box>
            <Divider variant="fullwidth" sx={{ fontSize: 25 }}>Tasks</Divider>
            <Box component="form" onSubmit={handleTaskSubmit}>
                <TextField
                    required
                    autoComplete="off"
                    fullWidth
                    label="Task"
                    variant="filled"
                    margin="normal"
                    value={taskTitle}
                    onChange={(event) => { setTaskTitle(event.target.value) }}
                    InputProps={{
                        endAdornment: (
                            <>
                                <Divider variant="middle" orientation="vertical" flexItem />
                                <Button variant="text" type="submit" sx={{ flexShrink: 0, ml:1}}>Add Task</Button>
                            </>
                        )
                    }} />
            </Box>
            {filteredTaskList.length === 0 &&
                <p>this project does not have any tasks yet.</p>}
            {filteredTaskList.length > 0 &&
                <div>
                    <List>
                        {
                            filteredTaskList.map((task) => {
                                return (
                                    <ListItem key={task.id}>
                                        <ListItemText>{task.title}</ListItemText>
                                        <Button variant="text" onClick={() => handleDeleteTask(task.id)}>Clear</Button>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </div>
            }
        </Box>
    )
}

export default Task