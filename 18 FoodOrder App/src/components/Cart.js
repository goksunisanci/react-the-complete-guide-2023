import { useState, useEffect, useContext } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography"

import MealAmountButtons from './MealAmounButtons';
import CheckOut from './CheckOut';
import { CartContext } from '../store/shopping-cart-context';


const Cart = () => {
    const { items } = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState(0)
    const [openCartModal, setOpenCartModal] = useState(false)

    const handleOpenCartModal = () => { setOpenCartModal(true) }
    const handleCloseCartModal = () => { setOpenCartModal(false) }


    useEffect(() => {
        const calculateTotalPrice = () => {
            let total = 0
            items.map(item => total += item.count * parseFloat(item.price))
            setTotalPrice(total)
        }
        calculateTotalPrice()
    }, [items])

    return (
        <>
            <Button onClick={handleOpenCartModal} sx={{mx:5, fontSize: 20}}>
                {items.length === 0 ? "Cart" : `Cart (${items.length})`}
            </Button>
            <Dialog
                open={openCartModal}
                onClose={handleCloseCartModal}
                fullWidth={true}
            >
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    Your Cart
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseCartModal}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    {items.length === 0 && <Typography variant="body1" color="black">Cart is empty.</Typography>}
                    <List>
                        {items.length > 0 && items.map(item => {
                            return (
                                <ListItem key={item.id}>
                                    <ListItemText>{`${item.name} - ${item.count} x ${item.price}`}</ListItemText>
                                    <MealAmountButtons item={item} />
                                </ListItem>
                            )
                        })}
                        <ListItem sx={{ textAlign: "right" }}>
                            <ListItemText>${totalPrice}</ListItemText>
                        </ListItem>
                    </List>
                </DialogContent >
                <DialogActions>
                    <CheckOut totalPrice={totalPrice} onCloseCartModal={handleCloseCartModal}/>
                </DialogActions>
            </Dialog >
        </>
    )
}


export default Cart