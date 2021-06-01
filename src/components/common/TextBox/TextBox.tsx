import React, { useState} from 'react';
import { Input } from '../Input';
import { Button } from '../Button'



const TextBox: React.FC = () => {
  const [state, setState] = useState([])

  const handleClick = () => {
    setState([]);
    console.log('Click')
  }

  return (
    <div className='wrapper'>
      <Input value='' placeholder='Item' />
      <Button onClick={handleClick} label='Add item'/>
    </div>
  )
}

export default TextBox;