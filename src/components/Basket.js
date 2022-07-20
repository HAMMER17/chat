import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import React from 'react'
import '../style/basket.css'

export default function Basket({ onClickClose, deleteCard, items = [] }) {

  let result = 0

  return (
    <>
      <div className='basket'>
        <div className='div'>
          <h1>корзина</h1>
          <span className='span'> <CancelIcon onClick={onClickClose} /></span>
        </div>
        {/* <div className='card'> */}

        {items.map((elem, id) => {
          result += +(elem.price)
          // result.push(`${elem.price}`)
          return <div className="cards" key={id}>
            <CancelIcon color='error' style={{ marginRight: 150, cursor: 'pointer' }} onClick={() => deleteCard(elem.id)} />

            {elem.title}
            <img src={elem.img} alt="img" width={100} height={100} />
            <p>{elem.price}<span>$</span></p>
          </div>
        })}

        <h5 className='h5'>итого</h5>
        <h3>{result}<span>$</span></h3>
        <Button variant='contained' color='success' endIcon={<SendIcon />}>
          <Link to={'/pay'}>оплата</Link>
        </Button>

      </div>

      {/* </div> */}
    </>
  )
}
