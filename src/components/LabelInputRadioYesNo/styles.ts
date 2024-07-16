import styled from "styled-components";

export const InputsContent = styled.div`
  div > div {
    display: flex;
    align-items: center;
    position: relative; /* Adicionado para permitir o uso do botão posicionado absolutamente */

    button {
      box-sizing: border-box;
      position: absolute;
      right: 0; /* Ajuste conforme necessário para posicionar o botão */
      visibility: hidden; /* Esconde o botão inicialmente */
    }
  }

  div > div.selected button {
    visibility: visible; /* Torna o botão visível quando a classe 'selected' é adicionada */
  }
  div > * {
    cursor: pointer;
  }
`;