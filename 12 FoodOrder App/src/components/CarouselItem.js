import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CarouselItem = ({ item }) => {
    return (
        <Paper sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box component="img" src={item.leftUrl} height={800} />
            <Box component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 3 }}>
                <Typography variant="h5" mb={10} mt={5} sx={{ fontFamily: 'Montserrat' }}>{item.name}</Typography>
                <Typography align="center" sx={{ fontFamily: 'Montserrat', fontWeight:"200"}}>{item.introduction}</Typography>
            </Box>
            <Box component="img" src={item.rightUrl} height={800} />
        </Paper>
    )
}

export default CarouselItem