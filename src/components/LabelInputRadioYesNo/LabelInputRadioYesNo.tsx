import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ChangeEvent, useState } from "react";
import * as S from "./styles";
import { AttachFile } from "@mui/icons-material";

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
  const [isSelectedNotReport, setIsSelectedNotReport] =
    useState<boolean>(false);
  const [isSelectedInputManualy, setIsSelectedInputManualy] =
    useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  function selectedInputYes() {
    setIsSelectedInput(true);
    setIsSelectedNotReport(false);
  }

  function selectedInputNot() {
    setIsSelectedInput(false);
    setIsSelectedInputManualy(false);
    setFile(null);
    setIsSelectedNotReport(true);
  }

  function selectedInputManualyYes() {
    setIsSelectedInputManualy(true);
    setFile(null);
  }

  function selectedInputManualyNot() {
    setIsSelectedInputManualy(false);
  }

  const handleRemoveFile = () => {
    setFile(null);
    setIsSelectedInputManualy(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
    if (selectedFile) {
      setIsSelectedInputManualy(false);
    }
  };

  function hideForm() {
    setSharedState(!sharedState);
  }

  return (
    <S.InputsContent>
      <h1 id="title">{title}</h1>
      <div>
        <div>
          <input
            type="radio"
            name="farmOverView"
            id="yes"
            onChange={selectedInputYes}
          />
          <label htmlFor="yes">{labelYes}</label> <br />
        </div>
        <div>
          <input
            type="radio"
            name="farmOverView"
            id="no"
            onChange={selectedInputNot}
          />
          <label htmlFor="no">{labelNot}</label>
        </div>

        {isSelectedInput && (
          <>
            <div
              style={{
                height: "1.5px",
                background: "#000",
                margin: "10px 0 -10px",
              }}
            ></div>
            <div>
              <h1 id="title">Escolha um tipo de preenchimento</h1>
            </div>

            <div>
              <input
                type="radio"
                id="manualyOp"
                onChange={selectedInputManualyYes}
                checked={isSelectedInputManualy}
                disabled={file ? true : false}
              />
              <label htmlFor="manualyOp">Preenchimento Manual</label>
              {isSelectedInputManualy && (
                <p
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    marginLeft: "8px",
                  }}
                  color="danger"
                  onClick={selectedInputManualyNot}
                >
                  Remover Opção
                </p>
              )}
            </div>
            <div>
              <input
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
                onChange={handleFileChange}
                disabled={isSelectedInputManualy ? true : false}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="outlined"
                  component="span"
                  style={{ marginLeft: "-10px" }}
                  size="small"
                  startIcon={<AttachFile />}
                  disabled={isSelectedInputManualy ? true : false}
                >
                  {file ? file.name : "Insira um arquivo!"}
                </Button>
              </label>

              {file && (
                <p
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    marginLeft: "8px",
                  }}
                  color="danger"
                  onClick={handleRemoveFile}
                >
                  Remover Arquivo
                </p>
              )}
            </div>
          </>
        )}
      </div>
      <Button
        variant="contained"
        size="large"
        endIcon={<SendIcon />}
        onClick={hideForm}
        disabled={
          file || isSelectedInputManualy || isSelectedNotReport ? false : true
        }
        fullWidth
      >
        Continuar
      </Button>
    </S.InputsContent>
  );
};

export default LabelInputRadioYesNo;
