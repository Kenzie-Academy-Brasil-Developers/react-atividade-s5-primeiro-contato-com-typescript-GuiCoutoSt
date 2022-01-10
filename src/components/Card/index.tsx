import Container from "./styles";

interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <Container>
      <p>{name}</p>
      <p>{age}</p>
      <p>{hobby}</p>
    </Container>
  );
};

export default Card;
