import {Button, Modal, Card, CardContent, CardMedia, Typography, CardActions} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../store/products';
import cartSlice from "../../store/cart";
import { Link } from "react-router-dom";

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

const ProductModal = () => {
const product = useSelector(state => state.products.selectedProduct);
const dispatch = useDispatch();


const handleClose = () => {
    //dispatch an action to update the selected beast
    // it's like setting state! but we ask the store to do it instead
    dispatch(productSlice.actions.showProduct(undefined));
    // dispatch is an instance of the useDispatch method from react-redux.
    // use it on the slice's action's(within the slice's reducers) and pass thhe payload(what the future beast would be).

    // when you click it will pass in the payload to the showBeast, and set the state of selectedBeast from undefined to whatever the payload is. 
}

const handleAddItem = (product) => {
    dispatch(cartSlice.actions.addToCart(product))
    dispatch(productSlice.actions.reduceQuantity(product))
}

  return (
    <Modal
    open={product !== undefined}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
   {product ? (<Card sx={{style}}>
      <CardContent>
        <Link to={'/details'} style={{textDecoration:'none'}}>
      {/* <CardMedia sx={{height: 220}} image={`http://source.unsplash.com/random?${product?.name}`} title={product?.name} /> */}
      <CardMedia sx={{height: 220}} image={`https://i.natgeofe.com/n/0652a07e-42ed-4f3d-b2ea-0538de0c5ba3/seattle-travel.jpg?w=2048&h=1358`} title={product?.name} />
      </Link>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product?.category}
        </Typography>
      </CardContent>
      <CardActions>
      {product.unavailable ? <Button disabled={product.unavailable}>Out of Stock</Button>: (<Button size="small" onClick={()=> handleAddItem(product)} variant="outlined" color="success" disabled={product.inStock === 0}>Add to Cart</Button>)}
      <Button size="small" onClick={handleClose} variant='outlined' color='success'>Close</Button>
      </CardActions>
    </Card>) : <></>
}
  </Modal>
  )
}

export default ProductModal;