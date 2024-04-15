// Categories
// State should contain a list of categories as well as the active category.
// Each category should have a normalized name, display name, and a description.
// Create an action that will trigger the reducer to change the active category.
// Update the active category in the reducer when this action is dispatched.

// import { FormControl,InputLabel,MenuItem,Select } from "@mui/material";
// // import { useState } from "react";
// import productSlice from '../../store/beast';
// import { useDispatch, useSelector } from 'react-redux';

// const Horns = () => {

//     const horns = useSelector(state => state.beast.numOfHorns);

//     const dispatch = useDispatch();

//     const handleChange = (e) => {
//         e.preventDefault();
//         // setHorns(e.target.value);
//         dispatch(beastSlice.actions.setHornCount(e.target.value))
//     }
//     return (
//         <div style={{width: "250px"}}>
//             <FormControl fullWidth>
//                 <InputLabel id="num-of-horns-label">Horns</InputLabel>
//                 <Select
//                     labelId="num-of-horns-label"
//                     id="num-of-horns"
//                     value={horns}
//                     label="Age"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"all"}>All</MenuItem>
//                     <MenuItem value={1}>One Horns</MenuItem>
//                     <MenuItem value={2}>Two Horns</MenuItem>
//                     <MenuItem value={3}>Three Horns</MenuItem>
//                     <MenuItem value={100}>One Hundred Horns</MenuItem>
//                 </Select>
//             </FormControl>
//         </div>
//     )
// }

// export default Horns