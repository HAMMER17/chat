import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";

function Favorite({ items = [], deleteLike }) {
  return (
    <div className='card'>
      {items.map((el, id) => {
        return <div key={id} className='cards'>
          <FavoriteIcon onClick={() => deleteLike(el.id)} color='error' />
          <h1>{el.title}</h1>
          <img src={el.img} alt='card' width={100} height={100} />
          <h3>{el.price}<span>$</span></h3>
        </div>
      })}
    </div>
  )
}

export default Favorite
