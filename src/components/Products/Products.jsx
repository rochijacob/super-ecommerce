import React from "react";
//UI Components
import {Grid} from '@material-ui/core'
//Local Components
import {Product} from "./Product/Product";
//Styles
import useStyles from './productsStyles';

const Products = ({products, onAddToCart}) => {
    const classes = useStyles()
    return (
        <main>
            <div className={classes.toolbar} />
            <Grid container justifyContent='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} onAddToCart={() => onAddToCart(product.id, 1)}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
