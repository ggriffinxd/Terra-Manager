import styled from "styled-components";

export const DivLabelInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Sem aspas em torno de valores numéricos */
  flex-wrap: wrap;

  margin: 20px 0;
`;
export const GridCard = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const GridPlacement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Define 3 colunas com larguras iguais */
  gap: 20px; /* Espaçamento entre as colunas */
`;

export const LabelInput = styled.div`
  padding: 20px; /* Adicione um padding para espaçamento interno */
  background-color: #ffffff; /* Cor de fundo opcional */
  border-radius: 8px; /* Borda arredondada opcional */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra opcional */

  /* Estilos para o inputNumber */
  #inputNumber {
    font-size: 16px;
    border-radius: 5px;
    padding: 10px 10px;
    background-color: #e3e1e1;
    border: none;
    width: 100%; /* O input deve ocupar toda a largura da div */
    transition: background-color 0.2s ease; /* Transição específica para background-color */
    :enabled {
      background-color: #e3e1e1;
    }
    :disabled {
      color: #fff;
      background-color: #a8a7a7;
    }
  }

  #title {
    font-size: 26px;
    font-weight: 600;
  }

  label {
    font-size: 20px;
    text-align: center;
  }

  input[type="radio"] {
    width: 18px;
    height: 18px;
    transition: 0.3s;
  }
`;

export const FormContainerMediumWidth = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px; /* Define um máximo de largura para a div pai */
  width: 100%; /* Garante que a div ocupe toda a largura disponível */
  margin: 20px auto; /* Centraliza a div pai na horizontal */

  /* Estilos para o LabelInput dentro da FormContainer */
  & > ${LabelInput} {
    width: 100%; /* Ocupa toda a largura da div pai */
  }
`;
export const FormContainerLargeWidth = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 95vw; /* Define um máximo de largura para a div pai */
  width: 100%; /* Garante que a div ocupe toda a largura disponível */
  margin: 20px auto; /* Centraliza a div pai na horizontal */

  /* Estilos para o LabelInput dentro da FormContainer */
  & > ${LabelInput} {
    width: 100%; /* Ocupa toda a largura da div pai */
  }
`;
