import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import Soy from "/Soy.png";

const RegisterCultivation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Panel>
        <S.Title>SELECIONE OS CULTIVOS PARA CADASTRAR:</S.Title>
        <S.ContainerCultivations>
          {/* >>>>>>>>>>> CRIAR COMPONENTE DO CIRCLE <<<<<<<<<<<*/}
          <S.Circle onClick={() => navigate("/registerplanting")}>
            <img className="image-styled" src={Soy}></img>
          </S.Circle>
        </S.ContainerCultivations>
      </S.Panel>
    </S.Container>
  );
};

export default RegisterCultivation;
