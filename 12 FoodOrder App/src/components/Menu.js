import sushis from "../sushis"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const BoxStyle = {
    bgcolor: "#424242",
    borderRadius: 5,
    width: "50%",
    padding: 2
}

const Menu = ({ cartContent, addToCart, decreaseAmount, increaseAmount }) => {
    const findSushiInCart = (sushi) => {
        return cartContent.find(sushiOnCart => sushiOnCart.productId === sushi.productId)
    }

    return (
        <Box sx={{ my: 30, display: "flex", justifyContent: "center" }}>
            <Box sx={BoxStyle}>
                {sushis.map((sushiGroup) => {
                    return (
                        <List>
                            <ListItem key={sushiGroup.categoryId} sx={{ bgcolor: "#455a64" }}>
                                <ListItemText primary={sushiGroup.category} />
                            </ListItem>
                            <List>
                                {sushiGroup.products.map((sushi) => {
                                    const sushiInCart = findSushiInCart(sushi)
                                    const sushiPriceText = `$${sushi.price}`
                                    return (
                                        <ListItem
                                            key={sushi.productId}
                                            secondaryAction={
                                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <ListItemText primary={sushiPriceText} sx={{ mr: 2 }} />
                                                    {!sushiInCart &&
                                                        <Button sx={{bgcolor: "#b71c1c"}}
                                                            onClick={() => { addToCart(sushiGroup.categoryId, sushi.productId, 1) }}>
                                                            Add to Cart
                                                        </Button>
                                                    }
                                                    {sushiInCart &&
                                                        <ButtonGroup variant="text" aria-label="text button group">
                                                            <Button onClick={() => decreaseAmount(sushiGroup.categoryId, sushi.productId)}>-</Button>
                                                            <Button>{sushiInCart.countInCart}</Button>
                                                            <Button onClick={() => increaseAmount(sushiGroup.categoryId, sushi.productId)}>+</Button>
                                                        </ButtonGroup>
                                                    }
                                                </Box>
                                            }>
                                            <ListItemText primary={sushi.name} secondary={sushi.ingredient} />

                                        </ListItem>
                                    )
                                })}
                            </List>
                        </List>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Menu