import {Modal,Card, CardContent, Typography} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../store/products';

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

  return (
    <Modal
    open={product !== undefined}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
   {product ? (<Card sx={{style}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product?.category}
        </Typography>
      </CardContent>
    </Card>) : <></>
}
  </Modal>
  )
}

export default ProductModal;