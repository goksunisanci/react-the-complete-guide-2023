import { useState, useContext } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

import { CartContext } from '../store/shopping-cart-context';
import { URL } from '../constant';
import SubmitOrder from './SubmitOrder';


const CheckOut = ({ totalPrice, onCloseCartModal }) => {
    const { items, clearCart } = useContext(CartContext)

    const [openCheckOutModal, setOpenCheckOutModal] = useState(false)
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)

    const [orderCustomerInfo, setOrderCustomerInfo] = useState({
        name: "",
        email: "",
        street: "",
        "postal-code": 0,
        city: ""
    })

    const handleOpenCheckOutModal = () => { setOpenCheckOutModal(true) }
    const handleCloseCheckOutModal = () => { setOpenCheckOutModal(false) }

    const handleSubmitOrder = async () => {
        const body = {
            order: {
                items: items,
                customer: orderCustomerInfo
            }
        }

        const response = await fetch(`${URL}/orders`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })


        if (response.ok) {
            setIsSubmitModalOpen(true)
        }

    }

    const handleFormChange = (event, id) => {
        setOrderCustomerInfo(prevFormInfo => {
            return ({ ...prevFormInfo, [id]: event.target.value })
        })
    }

    const handleCloseSubmitModal = () => {
        setIsSubmitModalOpen(false)
        setOpenCheckOutModal(false)
        onCloseCartModal()
        clearCart()
    }

    return (
        <>
            <Button variant="contained" onClick={handleOpenCheckOutModal}>
                Check Out
            </Button>

            <Dialog
                open={openCheckOutModal}
                onClose={handleCloseCheckOutModal}
                fullWidth={true}
            >
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    CheckOut
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseCheckOutModal}
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
                    <DialogContentText>
                        Total Amount: ${totalPrice}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Full Name"
                        type="string"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleFormChange(event, "name")}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleFormChange(event, "email")}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="street"
                        label="Street"
                        type="string"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleFormChange(event, "street")}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="postalCode"
                        label="Postal Code"
                        type="integer"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleFormChange(event, "postal-code")}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="city"
                        label="City"
                        type="string"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleFormChange(event, "city")}
                    />
                </DialogContent >
                <DialogActions>
                    <Button variant="contained" onClick={handleSubmitOrder}>
                        Submit Order
                    </Button>
                </DialogActions>
            </Dialog >
            <SubmitOrder open={isSubmitModalOpen} onCloseSubmitModal={handleCloseSubmitModal}></SubmitOrder>
        </>
    )

}

export default CheckOut