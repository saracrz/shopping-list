import './Input.css'
import Button from '../Button/Button'

const Input = (): JSX.Element => {
  return(
    <div className='Wrapper'>
      <input type='text' placeholder='Hola' className='Input'></input>
      <Button/>
    </div>
  )
}

export default Input;