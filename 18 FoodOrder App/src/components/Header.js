import Typography from "@mui/material/Typography";
import logo from "./../assets/logo.jpg"
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';

import Cart from "./Cart";


const Header = () => {

    return (
                <AppBar sx={{display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center"}}>
                    <Avatar src={logo} sx={{ width: 100, height: 100, m:2 }} />
                    <Typography variant="h2" component="div" color="primary" sx={{ flexGrow: 1 }}>REACTFOOD</Typography>
                    <Cart></Cart>
                </AppBar>
    )
}

export default Header