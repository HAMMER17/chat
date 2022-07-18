
import React from 'react';
// import Card from './components/Card';
import Header from './components/Header';
import './index.css';
// import product from '../src/products/Product'
import Basket from './components/Basket';
// import Input from './components/Input';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorite from './components/Favorite';
import Home from './components/Home';


function App() {

  const [cardOpen, setCardOpen] = React.useState(false)
  const [cardItems, setCardItems] = React.useState([])
  const [items, setItems] = React.useState([])
  const [favor, setFavor] = React.useState([])

  React.useEffect(() => {
    axios.get('https://62d2e401afb0b03fc5ad3c39.mockapi.io/items')
      .then(res => setItems(res.data));
    axios.get('https://62d2e401afb0b03fc5ad3c39.mockapi.io/cards')
      .then(res => setCardItems(res.data));
    axios.get('https://62d2e401afb0b03fc5ad3c39.mockapi.io/favor')
      .then(res => setFavor(res.data))
  }, [])

  const toAddCard = (obj) => {
    axios.post('https://62d2e401afb0b03fc5ad3c39.mockapi.io/cards', obj)
    setCardItems(prev => [...prev, obj])
  }
  const addFavorite = (obj) => {
    axios.post('https://62d2e401afb0b03fc5ad3c39.mockapi.io/favor', obj)
    setFavor(prev => [...prev, obj])
    console.log(obj)
  }
  const delCard = (id) => {
    axios.delete(`https://62d2e401afb0b03fc5ad3c39.mockapi.io/cards/${id}`)
    setCardItems((prev) => prev.filter(el => el.id !== id))
    console.log(id)
  }
  return (

    <>
      <Router>
        <Header onClickCard={() => setCardOpen(true)} />
        {cardOpen ? <Basket deleteCard={delCard} items={cardItems} onClickClose={() => setCardOpen(false)} /> : null}
        <Routes>

          <Route path='/favorite' element={<Favorite items={favor} />} />

          <Route path='/' element={<Home
            items={items}
            toAddCard={toAddCard}
            setCardItems={setCardItems}
            setItems={setItems}
            cardOpen={cardOpen}
            cardItems={cardItems}
            addFavorite={addFavorite}
          />} />

        </Routes>
      </Router>


      {/* <img src="../images/shop.jpeg" alt="shop" width={500} height={300} className='shop' />
      <Input /> */}
      {/* <div className="card">
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

      </div> */}
    </>
  );
}

export default App;
