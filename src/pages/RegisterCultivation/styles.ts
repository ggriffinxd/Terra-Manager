import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 88vh;
  width: 100%;
  background-size: cover;
  object-fit: cover;
  background-image: ${(props) => props.theme.backgrounds.mainBackground};
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 88%;
  width: 95%;
  padding: 1%;
  background-color: ${(props) => props.theme.colorsBase.gray3};
  border-radius: 15px;
`;

export const ContainerCultivations = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  height: 100%;
  width: 90%;
  border-radius: 15px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colorsBase.gray4};
  box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.43);
  transition: transform 0.3s ease, filter 0.3s ease;
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
    cursor: pointer;
  }
  .image-styled {
    width: 94%; 
    transition: transform 0.3s ease, filter 0.3s ease;
    &:hover {
    transform: scale(1.03);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-right: auto;
  font-size: 20px;
  font-weight: 600;
  padding: 20px;
  padding-bottom: 30px;
`;