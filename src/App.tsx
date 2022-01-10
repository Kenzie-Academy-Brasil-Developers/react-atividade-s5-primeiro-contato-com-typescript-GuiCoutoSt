import { GlobalStyle } from "./styles/global";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./App.styles";

import { useState } from "react";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");

  const handleSubmit = () => {
    setUsers([...users, { name: name, age: age, hobby: hobby }]);
  };

  return (
    <Container>
      <h1>Who Are You? 📝</h1>
      <Input
        value={name}
        label="Name"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        value={age}
        type="number"
        label="Age"
        placeholder="Your age"
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <Input
        value={hobby}
        label="Hobby"
        placeholder="Your hobby"
        onChange={(e) => setHobby(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <div>
        {users.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            age={user.age}
            hobby={user.hobby}
          />
        ))}
      </div>
      <GlobalStyle />
    </Container>
  );
}

export default App;
