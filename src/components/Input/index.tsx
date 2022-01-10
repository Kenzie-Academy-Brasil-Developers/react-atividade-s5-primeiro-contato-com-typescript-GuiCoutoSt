import Container from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <input placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;
