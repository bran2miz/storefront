import { Box, Button, Card, TextField, Typography, ListItem, ListItemText } from "@mui/material";
import { useSelector } from 'react-redux';
import Header from '../Header';
import { Link } from "react-router-dom";
import ShoppingCartModal from "./shoppingcartmodal";

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const total = cartItems.reduce((accumulator, item) => accumulator + item.price * (item.quantity || 1), 0);

    return (
        <div>
            <Header />
            <ShoppingCartModal />
            <Box sx={{ maxWidth: 600, m: "auto", p: 2, fontFamily: 'Arial' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Order Summary
                </Typography>
                <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
                    {cartItems.map((item, idx) => (
                        <ListItem key={idx} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' }}>
                            <ListItemText primary={item.name} secondary={item.description} />
                            <Typography variant="body2">${item.price.toFixed(2)}</Typography>
                        </ListItem>
                    ))}
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">Total:</Typography>
                        <Typography variant="h6">${total.toFixed(2)}</Typography>
                    </ListItem>
                </Card>
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: 'calc(50% - 16px)' } }} noValidate autoComplete='off'>
                    <Typography variant="h5" component="h3" gutterBottom>
                        Billing Address
                    </Typography>
                    <TextField required id="name" label="Full Name" defaultValue="" variant="standard" />
                    <TextField required id="address" label="Address" defaultValue="" variant="standard" />
                    <TextField required id="city" label="City" defaultValue="" variant="standard" />
                    <TextField required id="state" label="State" defaultValue="" variant="standard" />
                    <TextField required id="zip" label="Zip" defaultValue="" variant="standard" />
                    <Typography variant="h5" component="h3" gutterBottom>
                        Payment Details
                    </Typography>
                    <TextField required id="card-number" label="Credit Card #" defaultValue="" variant="standard" />
                    <TextField required id="exp-date" label="Expiration mm/dd/yyyy" defaultValue="" variant="standard" />
                    <TextField required id="cvv" label="CVV" type="password" variant="standard" />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Button type="submit" variant="contained" color="primary" sx={{ width: '100%', maxWidh: '300px' }}>
                            Place Your Order
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography sx={{ color: 'primary.main' }}>
                            Go Back
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </div>
    );
};

export default ShoppingCart;