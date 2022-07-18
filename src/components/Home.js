import React from 'react'
import Card from './Card'
import Input from './Input'
function Home({ items, toAddCard, addFavorite }) {
  return (
    <>
      <img src="../images/shop.jpeg" alt="shop" width={500} height={300} className='shop' />
      <Input />
      <div className="card">
        {items.map(elem => {
          return <Card
            key={elem.id}
            love={elem.love}
            title={elem.title}
            img={elem.img}
            price={elem.price}
            onPlus={toAddCard}
            onFavor={addFavorite}
          />
        })}

      </div>
    </>
  )
}

export default Home
