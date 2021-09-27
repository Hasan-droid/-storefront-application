import React from 'react'
import{connect}from 'react-redux';
import { inactive , active  } from '../store/store';
import { Paper, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions, CardMedia } from '@material-ui/core'
import products, {getProducts , decreaseQuntity} from '../store/products'
import { addToCart ,decrese } from '../store/cart';
 function ProductsViewer(props) {
    return (

        <>
            <Paper className="paper" elevation={1}>
                <Grid spacing={4} container justify="center" >
                    {console.log('props//products' , props.cart)}
                    {props.products.productsList.map((product, index) => {
                        {console.log("product//map: ",product)}
                        if (product.category === props.activatedCategory) {

                            return (
                                <Grid item key={index}>
                                    <Card>
                                        <CardHeader title={product.name} />
                                        <CardMedia
                                    
                                            image={product.image}
                                            style={{ height: 0, paddingTop: '50%' }}
                                            title='title'
                                        />
                                        <CardContent>
                                            <Typography variant="p" component="p"> price: ${product.price} inStock: {product.inStock}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="outlined" onClick={()=>{props.addToCart(product),props.decreaseQuntity(product._id)}}> Add to Cart </Button>
                                            <Button variant="outlined"> View Details </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        } else {
                            return null;
                        }
                    })}
                </Grid>
            </Paper>
        </>
     
    )
}

const mapStateToProps=(state)=>{
    return {
        products:state.productsReducer, 
        activatedCategory:state.catogries.activatedCategory,
        cart:state.cartReducer
    }
}

const mapDispatchToProps={
   inactive , 
   active,
   getProducts, 
   addToCart,
   decrese,
   decreaseQuntity
}

export default connect(mapStateToProps , mapDispatchToProps)(ProductsViewer)
