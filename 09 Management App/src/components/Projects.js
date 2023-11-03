import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';

const Projects = ({ projectList, openProject }) => {
    const [selectedItemId, setSelectedItemId] = useState("")

    const handleOpenProject = (id) => {
        openProject(id)
        setSelectedItemId(id)
    }

    return (
        <List sx={{ width: "100%", mt:5}}>
            {
                projectList.map((project) => {
                    return (
                        <ListItem key={project.id} disablePadding sx={{pl:2}} >
                            <ListItemButton sx={{ color: "#fff"}}
                                selected={selectedItemId === project.id}
                                onClick={() => { handleOpenProject(project.id) }}>
                                <ListItemText>{project.title}</ListItemText>
                            </ListItemButton >
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default Projects