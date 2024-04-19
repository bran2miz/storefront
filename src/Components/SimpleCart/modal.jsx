import { Button,Dialog, DialogActions, DialogTitle, DialogContent, Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import cartSlice from "../../store/cart";
import React from "react";
import { updateProduct } from "../../store/products";
import {deleteItemsInCart} from "../../store/cart"

const CartModal = () => {
    const dispatch = useDispatch();
    const viewCart = useSelector(state => state.cart.viewCart);
    const cartItems = useSelector(state => state.cart.cart);
    const total = cartItems.reduce((accumulator, selectedProduct) => accumulator + selectedProduct.price, 0);
    console.log(cartItems);
    const handleClose = () => {
        dispatch(cartSlice.actions.viewCart(false))
    }

    useEffect(()=> {
        dispatch(deleteItemsInCart())
      }, [dispatch])


    const deleteItem = (selectedProduct) => {
        dispatch(cartSlice.actions.deleteItemInCart({cartItemId: selectedProduct.cartItemId}))
        // add the handleUpdateProduct here 
        console.log(selectedProduct.inStock);
        dispatch(updateProduct({product: selectedProduct, amount: + 0}))
    }

    return (
        <Dialog open={viewCart} data-testid="cart-dialog">
            <DialogTitle>CART</DialogTitle>
            <DialogContent>
                {cartItems.map((selectedProduct, idx) => (
                    <React.Fragment key={idx}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt={selectedProduct.name} src={`http://source.unsplash.com/random?${selectedProduct.name}`} />
                            </ListItemAvatar>
                            <ListItemText primary={selectedProduct.name} />
                            <Typography>
                                ${selectedProduct.price}
                                <Button variant="outlined" color="error" onClick={() => deleteItem(selectedProduct)}>X</Button> 
                            </Typography>
                            <hr />
                        </ListItem>
                    </React.Fragment>
                ))}
            </DialogContent>
        <Typography margin={"20px"}>Total: ${total}</Typography>
        <DialogActions>
            <Button variant="outlined" color="success" fullWidth>Checkout</Button>
            <Button onClick={handleClose} variant="outlined" color="success">Close</Button>
        </DialogActions>
    </Dialog>
  )
}

export default CartModal