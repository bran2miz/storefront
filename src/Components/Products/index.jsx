// State should be a list of all products.
// Each product should have a category association, name, description, price, inventory count.

// import React from 'react';
// import ProductModal from "./modal";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import Product from "./product";
import {getProducts} from '../../store/products';
import { useEffect } from "react";

// map through beastdata and pass individual beasts to beast components
const ProductsList = () => {
    const dispatch = useDispatch();
    // useSelector is a method that takes in state pick off the item we want
    const productData = useSelector(state => {
        // name of slice is beast use it in beast.js and then create initialState with the beastData inside with reference to the "name" of the slice (name: "beast")
        return state.products.productData
    });
    console.log(productData);

    useEffect(()=> {
        dispatch(getProducts());
    }, [dispatch])

    const productCategory = useSelector(state => state.category.activeCategory)
    return (
        <div>
        <Grid container spacing={2} marginTop={"16px"}>
        {productData.filter(p => productCategory === "All" || productCategory === null || p.category === productCategory?.name).map(product => 
            <Product key={product.name} product={product} />
        
        )
        }
    </Grid>
    </div>
    )
}

export default ProductsList;