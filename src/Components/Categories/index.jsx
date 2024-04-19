import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { retrieveCategories } from '../../store/active-category';
import categorySlice from '../../store/active-category';

const Categories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);
    const activeCategory = useSelector(state => state.category.activeCategory);

    useEffect(() => {
        dispatch(retrieveCategories());
    }, [dispatch]);

    const handleChange = (event) => {
        dispatch(categorySlice.actions.setActiveCategory(event.target.value));
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="category-select-label">Categories</InputLabel>
            <Select
                labelId="category-select-label"
                id="category-select"
                value={activeCategory || ""}
                label="Category"
                onChange={handleChange}
            >
                <MenuItem value="">Select a category</MenuItem>
                <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"games"}>Electronics</MenuItem>
                    <MenuItem value={"clothes"}>Clothing</MenuItem>
                    <MenuItem value={"food"}>Food</MenuItem>
                    <MenuItem value={"weapons"}>Weapons</MenuItem>
                    <MenuItem value={"cosmetics"}>Cosmetics</MenuItem>
                    <MenuItem value={"cleaning"}>Cleaning</MenuItem>
                    <MenuItem value={"office"}>Office</MenuItem>

            </Select>
        </FormControl>
    );
};

export default Categories;