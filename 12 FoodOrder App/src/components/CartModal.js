import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect, useState } from 'react';


const CartModal = ({ open, close, content, decreaseAmount, increaseAmount }) => {
    const [totalCharge, setTotalCharge] = useState(0)
    const totalChargeText = `$${totalCharge}`

    const calculateTotalCharge = (cartContent) => {
        if (cartContent.length > 0) {
            const totalCharge = cartContent.map((sushi) => sushi.price * sushi.countInCart).reduce((a, b) => a + b)
            setTotalCharge(totalCharge)
        }
    }

    useEffect(() => {
        calculateTotalCharge(content)
    }, [content])
    return (
        <Dialog fullWidth
            maxWidth="sm"
            open={open}
            onClose={close}>
            <DialogTitle>Your Cart</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={close}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers sx={{py:0}}>
                <List>
                    {content.map(sushi => {
                        const sushiPriceText = `$${sushi.price}`
                        return (
                            <ListItem key={sushi.productId} secondaryAction={
                                <ButtonGroup variant="outlined" aria-label="text button group">
                                    <Button onClick={() => decreaseAmount(sushi.categoryId, sushi.productId)}>-</Button>
                                    <Button>{sushi.countInCart}</Button>
                                    <Button onClick={() => increaseAmount(sushi.categoryId, sushi.productId)}>+</Button>
                                </ButtonGroup>
                            }>
                                <ListItemText primary={sushi.name} secondary={sushiPriceText} />
                            </ListItem>
                        )
                    })}
                    <Divider />
                    <ListItem secondaryAction={
                        <Button variant="outlined">Order</Button>
                    }>
                        <ListItemText primary="Total Amount" secondary={totalChargeText} primaryTypographyProps={{ fontWeight: "bold" }} secondaryTypographyProps={{ fontWeight: "bold" }} />

                    </ListItem>
                </List>
            </DialogContent >
        </Dialog>
    )
}


export default CartModal