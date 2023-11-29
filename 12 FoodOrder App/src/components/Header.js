import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Typography from '@mui/material/Typography';


function ElevationScroll({ children, window }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Header = ({ children, window, onMenuButtonClick, onCartButtonClick, cartContent }) => {
    return (
        <>
            <ElevationScroll children={children} window={window}>
                <AppBar sx={{ py: 2 }} position="sticky">
                    <Toolbar>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                            ReactSushi
                        </Typography>
                        <Button onClick={() => { onMenuButtonClick(false) }}>Home</Button>
                        <Button sx={{ bgcolor: "red" }} onClick={() => { onMenuButtonClick(true) }}>Menu</Button>
                        <Box component="div">
                            <Button onClick={onCartButtonClick}>
                                <ShoppingCartIcon />
                                Your Cart {cartContent.length > 0 && cartContent.length}
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

        </>
    )
}


export default Header

