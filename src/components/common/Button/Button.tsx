import './Button.css'

interface Props {
  label: string;
  onClick(): void;
}

const Button: React.FC<Props> = ({label}: Props): JSX.Element => <Button label={label} onClick={() => {}}></Button>

export default Button;