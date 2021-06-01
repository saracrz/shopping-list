import './Input.css'

interface InputProps {
  value: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({value,placeholder}) => (
  <Input placeholder={placeholder} value={value}>
    <input className='input' />
  </Input>
);

export default Input;