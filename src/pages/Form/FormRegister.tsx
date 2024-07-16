import LabelInputRadioYesNo from "../../components/LabelInputRadioYesNo/LabelInputRadioYesNo";
import * as S from "./styles";

const FormRegister: React.FC = () => {
  return (
    <S.FormContainer>
      <S.LabelInput>
        <LabelInputRadioYesNo
          title="Sua fazenda contém análise de solo?"
          labelYes="Sim"
          labelNot="Não"
        />
      </S.LabelInput>
    </S.FormContainer>
  );
};

export default FormRegister;
