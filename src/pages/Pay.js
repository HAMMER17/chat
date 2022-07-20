import React from 'react'
import '../style/pay.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Pay() {
  const [pay, setPay] = React.useState('')
  const [nam, setNam] = React.useState('')
  function addPay(e) {
    setPay(e.target.value)
  }
  function addName(e) {
    setNam(e.target.value)
  }
  return (
    <>
      <div className="left">
        <div className="cred">
          <h2 style={{ textAlign: 'center', padding: 20 }}>CreditCard</h2>
          <input className='input1' type="text" placeholder={'**** **** **** ****'} readOnly value={pay} />

          <input className='input2' type="text" placeholder={'last name'} readOnly value={nam} />
        </div>
        <button className='bt'>BUY</button>
      </div>
      <div className="right">
        <div className='center'>
          <div className='pay'>
            <h1 className='hpay'>Pay</h1>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '45ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Last Name" variant="standard" onChange={addName} value={nam} />
              <TextField id="standard-basic" label="Number" variant="standard" onChange={addPay} value={pay} />

            </Box>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pay
