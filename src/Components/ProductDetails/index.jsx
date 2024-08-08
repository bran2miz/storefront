import {Button, Card, CardContent, CardMedia, Typography, CardActions} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../store/products';
import cartSlice from "../../store/cart";
import { Link } from "react-router-dom";
import { updateProduct } from "../../store/products";
import Header from "../Header";
import CartModal from "../SimpleCart/modal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ProductDetails = () => {
const product = useSelector(state => state.products.selectedProduct);
const dispatch = useDispatch();

const handleAddItem = (product) => {
    dispatch(cartSlice.actions.addToCart(product))
    dispatch(updateProduct({product, amount: -1}))
    dispatch(productSlice.actions.reduceQuantity(product))
}

  return (
<div>
    <Header />
    <CartModal />
   {product ? (<Card sx={{style}}>
      

      {/* <CardMedia sx={{height: 220}} image={`http://source.unsplash.com/random?${product?.name}`} title={product?.name} /> */}
      <CardMedia sx={{height: 220}} image={`https://i.natgeofe.com/n/0652a07e-42ed-4f3d-b2ea-0538de0c5ba3/seattle-travel.jpg?w=2048&h=1358`} title={product?.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product?.inStock} in Stock
        </Typography>
      </CardContent>
      <CardActions>
      {product.unavailable ? <Button disabled={product.unavailable}>Out of Stock</Button>: (<Button size="small" onClick={()=> handleAddItem(product)} variant="outlined" color="success" disabled={product.inStock === 0}>Add to Cart</Button>)}
      <Link to="/" style={{textDecoration:'none'}}>
        <Typography style={{  color: 'green', 
            margin: '10px', 
            padding: '3px', 
            border: '1px solid green', 
            borderRadius: '5px'}}
            >Go Back</Typography>
      </Link>
      </CardActions>
    </Card>) : <></>
}
</div>
  )
}

export default ProductDetails;