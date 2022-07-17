
import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import './index.css';
// import product from '../src/products/Product'
import Basket from './components/Basket';
import Input from './components/Input';
import axios from 'axios';


function App() {

  const [cardOpen, setCardOpen] = React.useState(false)
  const [cardItems, setCardItems] = React.useState([])
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    axios.get('https://62d2e401afb0b03fc5ad3c39.mockapi.io/items')
      .then(res => setItems(res.data));
    axios.get('https://62d2e401afb0b03fc5ad3c39.mockapi.io/cards')
      .then(res => setCardItems(res.data));
  }, [])

  const toAddCard = (obj) => {
    axios.post('https://62d2e401afb0b03fc5ad3c39.mockapi.io/cards', obj)
    setCardItems(prev => [...prev, obj])
  }
  const delCard = (id) => {
    axios.delete(`https://62d2e401afb0b03fc5ad3c39.mockapi.io/cards/${id}`)
    setCardItems((prev) => prev.filter(el => el.id !== id))
    console.log(id)
  }
  return (

    <>
      <Header onClickCard={() => setCardOpen(true)} />

      {cardOpen ? <Basket deleteCard={delCard} items={cardItems} onClickClose={() => setCardOpen(false)} /> : null}
      <Input />
      <img src="../images/shop.jpeg" alt="shop" width={500} height={300} className='shop' />
      <div className="card">
        {items.map(elem => {
          return <Card
            key={elem.id}
            love={elem.love}
            title={elem.title}
            img={elem.img}
            price={elem.price}
            onPlus={toAddCard}
          />
        })}

      </div>
    </>
  );
}

export default App;
