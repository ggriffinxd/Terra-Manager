import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import * as S from "./styles";

interface LabelInputRadioYesNoProps {
  title: string;
  labelYes: string;
  labelNot: string;
  sharedState: boolean;
  setSharedState: React.Dispatch<React.SetStateAction<boolean>>;
}

const LabelInputRadioYesNo: React.FC<LabelInputRadioYesNoProps> = ({
  title,
  labelYes,
  labelNot,
  sharedState,
  setSharedState,
}) => {
  const [isSelectedInput, setIsSelectedInput] = useState<boolean>(false);

  function selectedInput() {
    setIsSelectedInput(true);
  }

  function hideForm() {
    setSharedState(!sharedState);
  }

  return (
    <S.InputsContent>
      <label htmlFor="farmOverView" id="title">
        {title}
      </label>
      <div>
        <div className={isSelectedInput ? "selected" : ""}>
          <input
            type="radio"
            name="farmOverView"
            id="yes"
            onChange={selectedInput}
          />
          <label htmlFor="yes">{labelYes}</label> <br />
        </div>
        <div className={isSelectedInput ? "selected" : ""}>
          <input
            type="radio"
            name="farmOverView"
            id="no"
            onChange={selectedInput}
          />
          <label htmlFor="no">{labelNot}</label>
          <Button variant="outlined" endIcon={<SendIcon />} onClick={hideForm}>
            Continuar
          </Button>
        </div>
      </div>
    </S.InputsContent>
  );
};

export default LabelInputRadioYesNo;
