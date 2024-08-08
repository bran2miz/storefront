import { Button, Dialog, DialogActions, DialogTitle, DialogContent, Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cartSlice from "../../store/cart";
import React from "react";
import { updateProduct } from "../../store/products";
import { deleteItemsInCart } from "../../store/cart";
import { Link } from "react-router-dom";

const CartModal = () => {
    const dispatch = useDispatch();
    const viewCart = useSelector(state => state.cart.viewCart);
    const cartItems = useSelector(state => state.cart.cart);

    // Ensure prices are treated as numbers for the total calculation
    const total = cartItems.reduce((accumulator, selectedProduct) => {
        return accumulator + parseFloat(selectedProduct.price) * (parseInt(selectedProduct.quantity) || 1);
    }, 0);

    console.log(cartItems);

    const handleClose = () => {
        dispatch(cartSlice.actions.viewCart(false));
    }

    useEffect(() => {
        dispatch(deleteItemsInCart());
    }, [dispatch]);

    const deleteItem = (selectedProduct) => {
        dispatch(cartSlice.actions.deleteItemInCart({ cartItemId: selectedProduct.cartItemId }));
        // Ensure the stock is updated correctly
        dispatch(updateProduct({ product: selectedProduct, amount: +1 })); // Assuming you want to return the stock when deleting an item
    }

    return (
        <Dialog open={viewCart} data-testid="cart-dialog">
            <DialogTitle>CART</DialogTitle>
            <DialogContent>
                {cartItems.map((selectedProduct, idx) => (
                    <React.Fragment key={idx}>
                        <ListItem>
                            <ListItemAvatar>
                                {/* <Avatar alt={selectedProduct.name} src={`http://source.unsplash.com/random?${selectedProduct.name}`} /> */}
                                <Avatar alt={selectedProduct.name} src={`https://i.natgeofe.com/n/0652a07e-42ed-4f3d-b2ea-0538de0c5ba3/seattle-travel.jpg?w=2048&h=1358`} />
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
                <Link to={"/checkout"}>
                    <Button variant="outlined" color="success" fullWidth>Checkout</Button>
                </Link>
                <Button onClick={handleClose} variant="outlined" color="success">Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CartModal;
