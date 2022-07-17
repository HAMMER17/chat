
import React from 'react'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Avatar, Badge, IconButton } from '@mui/material';

function Header(props) {
  return (
    <div className='header'>
      <h1>internet-shop</h1>

      <IconButton className='button' color='inherit' aria-label="add to shopping cart">
        <h6 style={{ margin: 15 }}>моя корзина</h6>
        <Badge badgeContent={7} color="secondary" ><AddShoppingCart onClick={props.onClickCard} /></Badge>
        <Avatar src='../images/I.jpeg' style={{ margin: 30 }}></Avatar>
      </IconButton>
    </div>
  )
}

export default Header
