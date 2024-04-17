// import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../../store/cart';

const SimpleCart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.cart);// Use the whole cart array

    const cartItemsCount = cartItems.length; // Calculate count directly from the cart array

    const handleClick = () => {
        dispatch(cartSlice.actions.viewCart(true))
    }
  return (
    <>
        <IconButton color="success" onClick={handleClick}>
            <ShoppingCartIcon />
            ({cartItemsCount}) 
            {/* // Display the dynamically calculated count */}
        </IconButton>
    </>
  )
}

export default SimpleCart;