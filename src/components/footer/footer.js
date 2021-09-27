import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { margin } from '@mui/system';

export default function Header() {
  return (
      <div style={{marginTop:'38%'}}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      
       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           nothing recived &copy;
          </Typography>
      
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
