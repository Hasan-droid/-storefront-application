import React from 'react'
import{connect}from 'react-redux';
import { inactive , active } from '../store/store';
import products, {getProducts} from '../store/products'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { addToCart , removeFromCart } from '../store/cart';
import { increaseQuntity } from '../store/products';
import './SimpleCart.css'
 function CartViewer(props) {
    return (
<div className="Simplecart">

{console.log("props.cart//SimpleCart" ,props.cart.selectedItems)}
      {
          props.cart.selectedItems?.map((item,idx)=>{
              {console.log('item//: ' , item.name)}
             return <List dense={false}>

                                <ListItem>

                                    <ListItemText
                                        style={{ marginRight: '25px', color: 'black' }}
                                        primary={item.name}
                                    />

                                    <IconButton onClick={() =>{ props.removeFromCart(item.id),props.increaseQuntity(item.id)}} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            </List>
            
          })
      }
   

</div>
     
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
   removeFromCart,
   increaseQuntity
}

export default connect(mapStateToProps , mapDispatchToProps)(CartViewer)
