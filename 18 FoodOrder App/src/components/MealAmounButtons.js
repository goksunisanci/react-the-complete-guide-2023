import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context';

const MealAmountButtons = ({ item }) => {
    const {increaseItemInCart, decreaseItemInCart } = useContext(CartContext)


    return (
        <ButtonGroup variant="contained" aria-label="outlined button group">
            <Button onClick={() => decreaseItemInCart(item.id)}>-1</Button>
            <Button>{item.count}</Button>
            <Button onClick={() => increaseItemInCart(item.id)}>+1</Button>
        </ButtonGroup>
    )
}

export default MealAmountButtons