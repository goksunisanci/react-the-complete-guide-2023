import { useState, useEffect } from "react";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

import { URL } from "./constant";
import MealCard from "./components/MealCard";
import Header from "./components/Header";
import { CartContext } from "./store/shopping-cart-context";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b71c1c"
    }
  }
})


function App() {
  const [loadedMeals, setLoadedMeals] = useState([])
  const [shoppingCart, setShoppingCart] = useState({
    items: []
  })

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`${URL}/meals`)
      const meals = await response.json()
      setLoadedMeals(meals)
    }
    fetchMeals()
  }, [])

  const handleAddItemToCart = (mealId) => {
    setShoppingCart(prevShoppingCart => {
      const meal = loadedMeals.find(meal => meal.id === mealId)
      const newItem = { ...meal, count: 1 }
      const newItems = [...prevShoppingCart.items, newItem]

      return (
        { ...prevShoppingCart, items: newItems }
      )
    })
  }

  const handleIncreaseItemInCart = (itemId) => {
    setShoppingCart(prevShoppingCart => {
      const newItems = prevShoppingCart.items.map(meal => {
        return (
          meal.id === itemId ? { ...meal, count: meal.count + 1 } : meal
        )
      })

      return (
        { ...prevShoppingCart, items: newItems }
      )
    })
  }


  const handleDecreaseItemInCart = (itemId) => {
    const newItems = []
    let item
    setShoppingCart(prevShoppingCart => {
      prevShoppingCart.items.forEach(meal => {
        if (meal.id === itemId) {
          item = { ...meal, count: meal.count - 1 }
        } else {
          item = meal
        }

        if (item.count !== 0) {
          newItems.push(item)
        }
      })

      return (
        { ...prevShoppingCart, items: newItems }
      )
    })
  }

  const handleClearCart = () => {
    setShoppingCart({
      items: []
    })
  }


  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    increaseItemInCart: handleIncreaseItemInCart,
    decreaseItemInCart: handleDecreaseItemInCart,
    clearCart: handleClearCart
  }

  return (
    <CartContext.Provider value={ctxValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header></Header>
        <Box component="main">
          <Grid container spacing={2}>
            {loadedMeals.map(meal => <Grid item key={meal.id}> <MealCard meal={meal} /></Grid>)}
          </Grid>
        </Box>
      </ThemeProvider>
    </CartContext.Provider>
  )
}

export default App;
