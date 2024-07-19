import { useState } from "react";
import LabelInputRadioYesNo from "../../components/LabelInputRadioYesNo/LabelInputRadioYesNo";
import * as S from "./styles";

const FormRegister: React.FC = () => {
  const [sharedState, setSharedState] = useState<boolean>(false);
  return (
    <S.FormContainer>
      <S.LabelInput>
        {sharedState ? null : (
          <LabelInputRadioYesNo
            title="Sua fazenda contém análise de solo?"
            labelYes="Sim"
            labelNot="Não"
            sharedState={sharedState}
            setSharedState={setSharedState}
          />
        )}
      </S.LabelInput>
    </S.FormContainer>
  );
};

export default FormRegister;
