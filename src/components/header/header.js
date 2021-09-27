import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { activateCart } from '../store/cart';
import { connect } from 'react-redux';


 function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            What ever store
          </Typography>
         <ShoppingCartIcon  color="inherit"/>
         {console.log("header//cart: ", props.cart)}
         <spam onClick={()=>props.activateCart()}>{props.cart.totalitems}</spam>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps=(state)=>{
 return { cart:state.cartReducer,
  products:state.productsReducer }
}

const mapDispachToProps={
  activateCart
}
export default connect(mapStateToProps , mapDispachToProps)(Header);
