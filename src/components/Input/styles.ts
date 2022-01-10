import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 0;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: 500;
  }

  input {
    padding: 10px;
    border: 2px solid #444;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
  }

  input:focus::placeholder {
    opacity: 0;
    transform: translateX(5px);
    transition: 0.3s;
  }

  input:not(:focus)::placeholder {
    transition: 0.3s;
  }
`;

export default Container;
