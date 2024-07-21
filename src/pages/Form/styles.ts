import styled from "styled-components";

export const FormContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelInput = styled.div`
  margin-top: -3rem;
  #inputNumber {
    font-size: 16px;
    border-radius: 5px;
    padding: 10px 0;
    :enabled {
      background-color: #fafafa;
    }
    :disabled {
      background-color: #a8a8a8;
    }
    width: 100%;
    border: none;
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

  div {
    margin: 20px 0;
  }
`;
