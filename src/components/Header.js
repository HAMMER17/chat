
import React from 'react'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Avatar, Badge, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function Header({ onClickCard }) {

  return (
    <div className='header'>
      <h1>internet-shop</h1>
      <div className='link'>
        <Link to={'/'}>
          <h3 className='h3'>главная</h3>
        </Link>
        <Link to={'/favorite'}>
          <h3 className='h3'><FavoriteIcon /></h3>

        </Link>
      </div>
      <IconButton className='button' color='inherit' aria-label="add to shopping cart">
        <h6 style={{ margin: 15 }}>моя корзина</h6>
        <Badge badgeContent={7} color="secondary" ><AddShoppingCart onClick={onClickCard} /></Badge>
        <Avatar src='../images/I.jpeg' style={{ margin: 30 }}></Avatar>
      </IconButton>
    </div>
  )
}

export default Header
