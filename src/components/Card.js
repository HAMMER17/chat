import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { Icon } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import product from '../products/Product';


function Card({ title, img, price, love, sale, onPlus, onFavor }) {
  const [col, setCol] = React.useState(false)
  const [sal, setSale] = React.useState(false)

  function onClickPlus() {
    onPlus({ title, img, price })
    setSale(!sal)
    alert('товар добавлен')
  }
  function onClickFavor() {
    onFavor({ title, img, price })
    setCol(!col)
  }
  return (

    <div className='cards'>
      <span onClick={onClickFavor} style={{ color: col ? 'red' : 'black' }}><FavoriteIcon />{love}</span>
      <h2>{title}</h2>
      <img src={img} width={100} height={100} alt="img" />
      <h5>{price}<span>$</span></h5>
      {/* <Icon color={sale ? "success" : "error"} aria-label="add to shopping cart" onClick={sales}> */}
      <span onClick={onClickPlus} style={{ color: sal ? 'green' : 'black' }}><AddCircleIcon />{sale}</span>
      {/* </Icon> */}

      {/* <i className="bi bi-x-circle primary" style={{ color: sale ? 'red' : 'blue' }} onClick={sales}></i> */}

    </div>

  )
}

export default Card
