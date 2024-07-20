import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 88vh;
  background-size: cover;
  background-color: black;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  width: 65vw;
  max-width: 400px;
  border-radius: 10px;
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
  justify-content: start;
  align-items: center;
  .p {
    font-style: normal;
  }
`;

export const RememberMeLabel = styled.label`
  display: inline-block;
  padding-left: 8px;
  cursor: pointer;
`;

export const ForgotPasswordLink = styled.a`
  color: #007bff;
  transition: color 0.15s ease-in-out;
  &:hover,
  &:focus {
    color: #0056b3;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  border-radius: 8px;
  background-color: #007bff;
  padding: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  box-shadow: 0 4px 9px -4px rgba(59, 113, 202, 0.25);
  transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover,
  &:focus {
    background-color: #0056b3;
    box-shadow: 0 8px 9px -4px rgba(59, 113, 202, 0.3),
      0 4px 18px 0 rgba(59, 113, 202, 0.2);
  }

  &:active {
    background-color: #004494;
    box-shadow: 0 8px 9px -4px rgba(59, 113, 202, 0.3),
      0 4px 18px 0 rgba(59, 113, 202, 0.2);
  }
`;

export const RegisterLink = styled.a`
  display: block;
  margin-top: 24px;
  text-align: center;
  color: #007bff;
  transition: color 0.15s ease-in-out;

  &:hover,
  &:focus {
    color: #0056b3;
  }
`;