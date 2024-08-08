import { Button, Dialog, DialogActions, DialogTitle, DialogContent, Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cartSlice, { deleteItemsInCart } from "../../store/cart";
import React from "react";
import { updateProduct } from "../../store/products";
import { Link } from "react-router-dom";

const ShoppingCartModal = () => {
    const dispatch = useDispatch();
    const viewCart = useSelector(state => state.cart.viewCart);
    const cartItems = useSelector(state => state.cart.cart);

    // Ensure prices are treated as numbers for the total calculation
    const total = cartItems.reduce((accumulator, selectedProduct) => {
        return accumulator + parseFloat(selectedProduct.price);
    }, 0);

    console.log(cartItems);

    const handleClose = () => {
        dispatch(cartSlice.actions.viewCart(false));
    }

    useEffect(() => {
        dispatch(deleteItemsInCart());
    }, [dispatch]);

    const deleteItem = (selectedProduct) => {
        dispatch(cartSlice.actions.deleteItemInCart({cartItemId: selectedProduct.cartItemId}));
        // Ensure the stock is updated correctly
        dispatch(updateProduct({product: selectedProduct, amount: +1})); // Assuming you want to return the stock when deleting an item
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
                                ${parseFloat(selectedProduct.price).toFixed(2)}
                                <Button variant="outlined" color="error" onClick={() => deleteItem(selectedProduct)}>X</Button> 
                            </Typography>
                        </ListItem>
                        <hr />
                    </React.Fragment>
                ))}
            </DialogContent>
            <Typography margin={"20px"}>Total: ${total.toFixed(2)}</Typography>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined" color="success">Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ShoppingCartModal;
