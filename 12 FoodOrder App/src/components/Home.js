import Box from '@mui/material/Box';
import CarouselItem from './CarouselItem';
import Carousel from 'react-material-ui-carousel'
import images from '../images';


const Home = () => {
    return (
        <Box sx={{ height: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Carousel sx={{ width: "80%" }}>
                {
                    images.map((image) => <CarouselItem key={image.name} item={image} />)
                }
            </Carousel>
        </Box>
    )
}



export default Home