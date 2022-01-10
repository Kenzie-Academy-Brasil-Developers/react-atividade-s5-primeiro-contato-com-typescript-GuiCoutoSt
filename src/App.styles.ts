import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    font-weight: 600;
  }

  button {
    font-family: "Poppins", sans-serif;
    padding: 10px;
    border: 2px solid #010101;
    border-radius: 4px;
    font-weight: 900;
    background-color: #010101;
    color: #fff;
  }

  button:hover {
    background-color: #fff;
    color: #010101;
    transition: 0.3s;
    cursor: pointer;
  }

  button:not(:hover) {
    transition: 0.3s;
  }
`;

export default Container;
