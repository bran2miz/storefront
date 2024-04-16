// Categories
// State should contain a list of categories as well as the active category.
// Each category should have a normalized name, display name, and a description.
// Create an action that will trigger the reducer to change the active category.
// Update the active category in the reducer when this action is dispatched.

import { FormControl,InputLabel,MenuItem,Select } from "@mui/material";
// import { useState } from "react";
import categorySlice from "../../store/active-category";
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {

    const category = useSelector(state => state.category.activeCategory);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        // setHorns(e.target.value);
        dispatch(categorySlice.actions.setActiveCategory(e.target.value))
    }
    return (
        <div style={{width: "250px"}}>
            <FormControl fullWidth>
                <InputLabel id="num-of-horns-label">Horns</InputLabel>
                <Select
                    labelId="num-of-horns-label"
                    id="num-of-horns"
                    value={category || "all"}
                    label="Category"
                    onChange={handleChange}
                >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"electronics"}>Electronics</MenuItem>
                    <MenuItem value={"clothing"}>Clothing</MenuItem>
                    <MenuItem value={"food"}>Food</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Categories;