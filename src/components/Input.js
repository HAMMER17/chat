import React from 'react'
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';

function Input() {
  const [val, setVal] = React.useState('')
  function text(e) {
    setVal(e.target.value)
  }
  return (
    <div className='input' style={{ marginLeft: 50, padding: 10 }}>
      <TextField onChange={text} id="standard-basic" label="поиск..." variant="standard" value={val} />
      <ClearIcon style={{ cursor: 'pointer' }} onClick={() => setVal('')} />

      <h2 style={{ marginTop: 20 }}>clock: {val} </h2>
    </div>
  )
}

export default Input

