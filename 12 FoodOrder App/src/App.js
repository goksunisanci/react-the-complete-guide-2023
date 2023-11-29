import sushis from "./sushis"
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import CartModal from './components/CartModal';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff"
    }
  }
})


const App = (props) => {
  const [menuState, setMenuState] = useState(false)
  const [isOpenCartModal, setIsOpenCartModal] = useState(false)
  const [cartContent, setCartContent] = useState([])

  const handleAddToCart = (categoryId, productId, amount) => {
    let cartItem = cartContent.find(sushi => sushi.productId === productId)
    if (cartItem) {
      if (cartItem.countInCart + amount > 0) {
        setCartContent((prevContent) => {
          return (prevContent.map((sushi) => {
            if (sushi.productId === productId) {
              return { ...cartItem, countInCart: cartItem.countInCart + amount }
            } else {
              return sushi
            }
          })
          )
        })
      } else {
        setCartContent((prevContent) => {
          return prevContent.filter((sushi) => sushi.productId !== productId)
        })
      }
    } else {
      const addedSushi = sushis.find(category => category.categoryId === categoryId).products.find(sushi => sushi.productId === productId)
      const sushiOnCart = { ...addedSushi, countInCart: amount, categoryId: categoryId }
      setCartContent((prevContent) => {
        return [...prevContent, sushiOnCart]
      })
    }
  }

  const handleDecreaseAmount = (categoryId, productId) => {
    handleAddToCart(categoryId, productId, -1)
  }

  const handleIncreaseAmount = (categoryId, productId) => {
    handleAddToCart(categoryId, productId, +1)
  }

  const handleMenuButtonClick = (isMenuButtonClicked) => {
    setMenuState(isMenuButtonClicked)
  }

  const handleCartModalClose = () => {
    setIsOpenCartModal(false)
  }

  const handleCartButtonClick = () => {
    setIsOpenCartModal(true)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header
        children={props.children}
        window={props.window}
        onMenuButtonClick={handleMenuButtonClick}
        onCartButtonClick={handleCartButtonClick}
        cartContent={cartContent}
      >
      </Header>
      <CartModal content={cartContent} open={isOpenCartModal} close={handleCartModalClose} increaseAmount={handleIncreaseAmount} decreaseAmount={handleDecreaseAmount} />
      {!menuState && <Home />}
      {menuState && <Menu cartContent={cartContent} addToCart={handleAddToCart} increaseAmount={handleIncreaseAmount} decreaseAmount={handleDecreaseAmount} />}
    </ThemeProvider>
  )
}


export default App