import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from "react"
import uuid from 'react-uuid';



const ProjectForm = ({ toggleProjectForm, addProject }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState()

    const resetFormValues = () => {
        setTitle("")
        setDescription("")
        setDueDate(null)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const uniqueId = uuid()
        const data = {
            id: uniqueId,
            title: title,
            description: description,
            dueDate: dueDate
        }
        addProject(data)
        resetFormValues()
    }

    return (
        <Box component="form" onSubmit={formSubmitHandler} sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
        }}>
            <Box sx={{ mb: 6 }}>
                <Button variant="text" onClick={() => { toggleProjectForm(false) }}>Cancel</Button>
                <Button variant="contained" type="submit">Save</Button>
            </Box>
            <TextField
                required
                fullWidth
                autoComplete="off"
                label="Title"
                variant="filled"
                margin="normal"
                value={title}
                onChange={(event) => { setTitle(event.target.value) }}
            />
            <TextField
                fullWidth
                autoComplete="off"
                label="Description"
                variant="filled"
                row={3}
                margin="normal"
                value={description}
                onChange={(event) => { setDescription(event.target.value) }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Due Date"
                    slotProps={{ textField: { fullWidth: true, variant: 'filled', margin: "normal" } }}
                    value={dueDate}
                    onChange={(value) => { setDueDate(value) }} />
            </LocalizationProvider>
        </Box >
    )
}

export default ProjectForm