import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import { useDispatch} from 'react-redux';
import categorySlice from '../../store/active-category';

const Category = ({category}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(categorySlice.actions.setActiveCategory(category))
    }

  return (
    <div>
        <Grid gutterbottom>
            <Card>
                <CardMedia
                sx={{height: 220, width:220}}
                image={`http://source.unsplash.com/random?${category.name}`}
                title={category.name}
                />
                <CardContent>
                    <Typography component="div">{category.name}</Typography>
                    <Typography variant='body2' color="text.secondary">Click here to see all {category.name}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleClick} size="small" variant="outlined" color="success">{`Select ${category.name}`}</Button>
                </CardActions>
            </Card>
        </Grid>
    </div>
  )
}

export default Category;