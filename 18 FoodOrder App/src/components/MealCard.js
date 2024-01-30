import { useContext } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { CartContext } from '../store/shopping-cart-context';
import { URL } from '../constant';
import MealAmountButtons from './MealAmounButtons';


const MealCard = ({ meal }) => {  // meal is an object
    const { items, addItemToCart} = useContext(CartContext)

    const renderCartAction = () => {
        const itemInCart = items.find(item => item.id === meal.id)
        if (!itemInCart) {
            return (
                <Button variant="contained" onClick={() => addItemToCart(meal.id)}>Add to Cart</Button>
            )
        } else {
            return (
                <MealAmountButtons item={itemInCart} />
            )
        }
    }


    return (
        <Card sx={{ width: 320, height: 600 }}>
            <CardMedia sx={{ height: 300, width: 320 }}
                image={`${URL}/${meal.image}`}
                title={meal.name}
            />
            <CardContent>
                <Box fullwidth sx={{ height: 50, textAlign: "center" }}>
                    <Typography variant="h5">
                        {meal.name}
                    </Typography>
                </Box>
                <Box fullwidth sx={{ height: 50, textAlign: "center" }}>
                    <Chip label={`$${meal.price}`} />
                </Box>
                <Box fullwidth sx={{ height: 100, textAlign: "center" }} >
                    <Typography>
                        {meal.description}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                {renderCartAction()}
            </CardActions>
        </Card>
    )
}


export default MealCard