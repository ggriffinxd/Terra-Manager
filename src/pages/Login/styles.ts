import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 88vh;
  background-size: cover;
  object-fit: cover;
  background-image: ${(props) => props.theme.backgrounds.mainBackground};
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  width: 65vw;
  max-width: 400px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colorsBase.gray2};
  padding: 24px;
  box-shadow: 0 4px 9px -4px rgba(0, 0, 0, 0.25);
  gap: 24px;

  @media (min-width: 640px) {
    width: 55vw;
  }

  @media (min-width: 768px) {
    width: 45vw;
  }

  @media (min-width: 1024px) {
    width: 30vw;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 48px;
  font-weight: 400;
`;

export const TabsContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  margin-right: 20px;
  align-items: flex-start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 30px;
  .p {
    font-style: normal;
  }
`;
