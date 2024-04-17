import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { useDispatch, } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import productSlice from "../../store/products";
import cartSlice from "../../store/cart";

const Product = ({ product }) => {
    // define dispatch
    const dispatch = useDispatch();

    const cart = useSelector((state)=> state.cart.cart);

    const handleShowDetails = () => {
        console.log(product);
        //dispatch an action to update the selected beast
        // it's like setting state! but we ask the store to do it instead
        dispatch(productSlice.actions.showProduct(product));
        // dispatch is an instance of the useDispatch method from react-redux.
        // use it on the slice's action's(within the slice's reducers) and pass thhe payload(what the future beast would be).

        // when you click it will pass in the payload to the showBeast, and set the state of selectedBeast from undefined to whatever the payload is. 
    }

    return (
        <Grid item xs={3}>
            <Card data-testid="product-card">
                <CardMedia sx={{height: 220}} image={product.image_url} title={product.name} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`Category: ${product.category}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* {product.unavailable ? <Button disabled={product.unavailable}>Out of Stock</Button>: (<Button size="small" onClick={()=> handleAddItem(product)} variant="outlined" color="success" disabled={product.inStock === 0}>Add to Cart</Button>)} */}
                    <Button size="small" onClick={handleShowDetails}>Select</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;