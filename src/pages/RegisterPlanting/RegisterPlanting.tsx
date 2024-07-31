import { useState } from "react";
import LabelInputRadioYesNo from "../../components/LabelInputRadioYesNo/LabelInputRadioYesNo";
import * as S from "./styles";
import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
} from "@mui/material";

const marks = [
  {
    value: 7,
    label: "Neutro",
  },
  {
    value: 0,
    label: "Ácido",
  },
  {
    value: 14,
    label: "Básico",
  },
];

const RegisterPlanting: React.FC = () => {
  const [sharedState, setSharedState] = useState<boolean>(false);
  const [isPotassiumQuantity, setIsPotassiumQuantity] = useState<boolean>(true);
  const [isPhosphorQuantity, setIsPhosphorQuantity] = useState<boolean>(true);
  const [potassiumValue, setPotassiumValue] = useState<string>("");
  const [phosphorValue, setPhosphorValue] = useState<string>("");
  const [isFormNPKHidden, setIsFormNPKHidden] = useState<boolean>(true);
  const [groundHaValue, setGroundHaValue] = useState<string>("");
  const [typeGround, setTypeGround] = useState<string>("");

  const handleChangeTypeGround = (event: SelectChangeEvent) => {
    setTypeGround(event.target.value as string);
  };

  function setFormNPKOpen() {
    setIsFormNPKHidden(true);
  }
  function setFormNPKClose() {
    setIsFormNPKHidden(false);
  }
  function setContentPotassium() {
    setIsPotassiumQuantity(false);
  }
  function notContentPotassium() {
    setIsPotassiumQuantity(true);
    setPotassiumValue("");
  }
  function setContentPhosphor() {
    setIsPhosphorQuantity(false);
  }
  function notContentPhosphor() {
    setIsPhosphorQuantity(true);
    setPhosphorValue("");
  }

  return (
    <>
      {isFormNPKHidden ? (
        <S.FormContainerMediumWidth>
          <S.LabelInput>
            {!sharedState && (
              <LabelInputRadioYesNo
                title="Sua fazenda contém análise de solo?"
                labelYes="Sim"
                labelNot="Não"
                sharedState={sharedState}
                setSharedState={setSharedState}
              />
            )}
            {sharedState && (
              <div>
                <h1 id="title">Análise de NPK</h1>
                <S.DivLabelInput>
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
                </S.DivLabelInput>
                <S.DivLabelInput>
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
                </S.DivLabelInput>
                <div>
                  <label htmlFor="quantityPotassium">
                    Quantidade de fósforo
                  </label>
                  <br />
                  <input
                    type="number"
                    name="quantityPotassium"
                    id="inputNumber"
                    placeholder="Habilite a opção sim para digitar o valor"
                    disabled={isPhosphorQuantity}
                    value={phosphorValue}
                    onChange={(ev) => setPhosphorValue(ev.target.value)}
                  />
                </div>
                <S.DivLabelInput>
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
                </S.DivLabelInput>
                <div>
                  <label htmlFor="quantityPotassium">
                    Quantidade de potássio
                  </label>
                  <br />
                  <input
                    type="number"
                    name="quantityPotassium"
                    id="inputNumber"
                    placeholder="Habilite a opção sim para digitar o valor"
                    value={potassiumValue}
                    onChange={(ev) => setPotassiumValue(ev.target.value)}
                    disabled={isPotassiumQuantity}
                  />
                </div>
                <S.DivLabelInput>
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    fullWidth
                    onClick={setFormNPKClose}
                  >
                    Confirmar
                  </Button>
                  <Button
                    fullWidth
                    onClick={() => setSharedState(!sharedState)}
                  >
                    Voltar
                  </Button>
                </S.DivLabelInput>
              </div>
            )}
          </S.LabelInput>
        </S.FormContainerMediumWidth>
      ) : (
        <S.FormContainerLargeWidth>
          <S.LabelInput>
            <S.GridPlacement>
              <S.GridCard>
                <TextField
                  id="outlined-basic"
                  label="Quantidade de fósforo"
                  sx={{ overflowX: "." }}
                  value={phosphorValue}
                  disabled
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Quantidade de potássio"
                  sx={{ overflowX: "." }}
                  value={potassiumValue}
                  disabled
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label={`Bactérias do tipo:`}
                  sx={{ overflowX: "." }}
                  value={phosphorValue}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Área do plantio"
                  sx={{ overflowX: "." }}
                  value={groundHaValue}
                  onChange={(ev) => setGroundHaValue(ev.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">Hectares</InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                />
                <label htmlFor="groundPH">Ph do solo</label>
                <Slider
                  min={0}
                  max={14}
                  valueLabelDisplay="auto"
                  defaultValue={7}
                  marks={marks}
                  style={{ width: "80%" }}
                  name="groundPH"
                />
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{
                    display: "flex",
                    gap: "1.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label>Contém irrigação?</label>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="Não"
                  />
                </RadioGroup>
              </S.GridCard>

              <S.GridCard style={{ marginTop: "-20px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de solo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeGround}
                    label="Tipo de solo"
                    onChange={handleChangeTypeGround}
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de solo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeGround}
                    label="Tipo de solo"
                    onChange={handleChangeTypeGround}
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de solo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeGround}
                    label="Tipo de solo"
                    onChange={handleChangeTypeGround}
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de solo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeGround}
                    label="Tipo de solo"
                    onChange={handleChangeTypeGround}
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de solo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeGround}
                    label="Tipo de solo"
                    onChange={handleChangeTypeGround}
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de solo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeGround}
                    label="Tipo de solo"
                    onChange={handleChangeTypeGround}
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
              </S.GridCard>

              <div>Coluna 3</div>
            </S.GridPlacement>
            <Button fullWidth onClick={setFormNPKOpen}>
              Voltar
            </Button>
          </S.LabelInput>
        </S.FormContainerLargeWidth>
      )}
    </>
  );
};

export default RegisterPlanting;
