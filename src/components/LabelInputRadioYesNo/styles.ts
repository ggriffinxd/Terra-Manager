import styled from "styled-components";

export const InputsContent = styled.div`
  h1 {
    margin: 20px 0;
  }
  input,
  label {
    cursor: pointer;
  }
  input ~ label {
    margin: 10px 10px;
  }
  div > div {
    display: flex;
    align-items: center;
    position: relative; /* Adicionado para permitir o uso do botão posicionado absolutamente */
    width: 100%;
  }
`;
