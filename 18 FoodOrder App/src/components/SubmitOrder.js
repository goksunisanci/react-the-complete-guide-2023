import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SubmitOrder = ({ open, onCloseSubmitModal }) => {
    return (
        <Dialog
            open={open}
            onClose={onCloseSubmitModal}
            fullWidth={true}
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>
                Success
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onCloseSubmitModal}
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
                <DialogContentText>Your order was submitted successfully.</DialogContentText>
                <DialogContentText>We will get back to you with more details via email within the next few minutes.</DialogContentText>
            </DialogContent >
            <DialogActions>
                <Button onClick={onCloseSubmitModal}>Okay</Button>
            </DialogActions>
        </Dialog >
    )
}


export default SubmitOrder