import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { useDispatch, } from "react-redux";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import productSlice from "../../store/products";

const Product = ({ product }) => {
    // define dispatch
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log(productSlice);
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
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClick}>Select</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;