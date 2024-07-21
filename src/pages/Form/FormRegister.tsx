import { useState } from "react";
import LabelInputRadioYesNo from "../../components/LabelInputRadioYesNo/LabelInputRadioYesNo";
import * as S from "./styles";
import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";

const FormRegister: React.FC = () => {
  const [sharedState, setSharedState] = useState<boolean>(false);
  const [isPotassiumQuantity, setIsPotassiumQuantity] = useState<boolean>(true);
  const [isPhosphorQuantity, setIsPhosphorQuantity] = useState<boolean>(true);
  function setContentPotassium() {
    setIsPotassiumQuantity(false);
  }
  function notContentPotassium() {
    setIsPotassiumQuantity(true);
  }
  function setContentPhosphor() {
    setIsPhosphorQuantity(false);
  }
  function notContentPhosphor() {
    setIsPhosphorQuantity(true);
  }

  return (
    <S.FormContainer>
      <S.LabelInput>
        {sharedState ? (
          <div>
            <h1 id="title">Análise de NPK</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label
                htmlFor="nitrogen"
                style={{ display: "flex", gap: ".4rem" }}
              >
                Nitrogênio (N): Bactérias <ArrowForward />
              </label>
              <input type="radio" name="nitrogen" id="inoc" />
              <label htmlFor="inoc">Inoc</label>
              <input type="radio" name="nitrogen" id="coInoc" />
              <label htmlFor="coInoc">Co-Inoc</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label htmlFor="phosphor">Fósforo (P):</label>
              <input
                type="radio"
                name="phosphor"
                id="yesPhosphor"
                onClick={setContentPhosphor}
              />
              <label htmlFor="yesPhosphor">Sim</label>
              <input
                type="radio"
                name="phosphor"
                id="notPhosphor"
                onClick={notContentPhosphor}
              />
              <label htmlFor="notPhosphor">Não</label>
            </div>
            <div>
              <label htmlFor="quantityPotassium">Quantidade de fósforo</label>
              <br />
              <input
                type="number"
                id="inputNumber"
                disabled={isPhosphorQuantity}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label htmlFor="potassium">Potássio (K):</label>
              <input
                type="radio"
                name="potassium"
                id="yesPotassium"
                onClick={setContentPotassium}
              />
              <label htmlFor="yesPotassium">Sim</label>
              <input
                type="radio"
                name="potassium"
                id="notPotassium"
                onClick={notContentPotassium}
              />
              <label htmlFor="notPotassium">Não</label>
            </div>
            <div>
              <label htmlFor="quantityPotassium">Quantidade de potássio</label>
              <br />
              <input
                type="number"
                id="inputNumber"
                disabled={isPotassiumQuantity}
              />
            </div>
            <Button
              variant="contained"
              color="success"
              size="large"
              fullWidth
              onClick={() => alert("aaaaa")}
            >
              Confirmar
            </Button>
          </div>
        ) : (
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
