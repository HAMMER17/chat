import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";

function Favorite({ items = [], favoritest }) {
  return (
    <div className='card'>
      {items.map((el, id) => {
        return <div key={id} className='cards'>
          <FavoriteIcon onClick={favoritest} />
          <h1>{el.title}</h1>
          <img src={el.img} alt='card' width={100} height={100} />
          <h3>{el.price}</h3>
        </div>
      })}
    </div>
  )
}

export default Favorite
