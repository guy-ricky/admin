import React, {useEffect} from 'react'
import {Container, Card, CardMedia, CardContent, CardActions} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/product/productSlice';

const Products = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container className='mt-16 md:mt-2 items-center mx-auto my-8'>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid key={product._id} xs={12} sm={4}>
            <Card className="w-64 h-[100%]" elevation={24}>
              <CardMedia component="img" height="40"  alt={product.title} />
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1
}}>
                <h1 className='text-md font-bold'>{product.title}</h1>
                <h1 className='text-xs'>{product.category}</h1>
                <h1 className='text-md font-semibold'>{`Kshs. ${product.price}`}</h1>
              </CardContent>
              <CardActions className='flex items-center'>
                <button
                  className="bg-blue-600 p-2 rounded-lg w-full text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  Edit
                </button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products