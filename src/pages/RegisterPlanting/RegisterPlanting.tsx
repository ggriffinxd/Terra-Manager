import { useState } from "react";
import LabelInputRadioYesNo from "../../components/LabelInputRadioYesNo/LabelInputRadioYesNo";
import * as S from "./styles";
import { Add, ArrowForward } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
  Chip,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

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
  const [typeMachine, setTypeMachine] = useState<string[]>([]);
  const [typePesticide, setTypePesticide] = useState<string[]>([]);
  const [nitrogenType, setNitrogenType] = useState<string>("");
  const [machineValueHour, setMachineValueHour] = useState<string>("");
  const [valueOfDateInitial, setValueOfDateInitial] = useState<Dayjs | null>(
    null
  );
  const [valueOfDateFinally, setValueOfDateFinally] = useState<Dayjs | null>(
    null
  );
  const optionsOfMachines = [
    "Tratores",
    "Pulverizadores",
    "Adubadoras",
    "Semeadoras",
    "Colhedoras",
    "Arados",
  ];
  const optionsOfPesticide = [
    "Inseticidas",
    "Herbicidas",
    "Fungicidas",
    "Acaricidas",
  ];

  const handleChangeMachines = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setTypeMachine(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangePesticides = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setTypePesticide(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeTypeGround = (event: SelectChangeEvent) => {
    setTypeGround(event.target.value as string);
  };

  const handleNitrogenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNitrogenType(event.target.value);
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
                  <input
                    type="radio"
                    name="nitrogen"
                    id="inoc"
                    value="inoc"
                    checked={nitrogenType === "inoc"}
                    onChange={handleNitrogenChange}
                  />
                  <label htmlFor="inoc">Inoc</label>
                  <input
                    type="radio"
                    name="nitrogen"
                    id="coInoc"
                    value="coInoc"
                    checked={nitrogenType === "coInoc"}
                    onChange={handleNitrogenChange}
                  />
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
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Add
                  fontSize="large"
                  sx={{
                    color: "#fff",
                    backgroundColor: "#000",
                    border: "1px #000 solid",
                    borderRadius: "100%",
                    marginRight: ".6rem",
                  }}
                />
                <h1>Adicione os dados do cultivo de soja</h1>
              </div>
              <div style={{ position: "relative" }}>
                <img
                  src="/Soy.png"
                  alt="Soja"
                  style={{
                    position: "absolute",
                    width: "100px",
                    top: "-60px", // Ajuste conforme necessário para flutuar acima da div
                    right: "-40px", // Mantém a imagem à direita da div
                  }}
                />
              </div>
            </div>
            <S.GridPlacement>
              <S.GridCard>
                <TextField
                  id="outlined-basic"
                  type="number"
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de solo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeGround}
                    label="Tipo de solo t"
                    onChange={handleChangeTypeGround}
                  >
                    <MenuItem value={10}>Arenoso</MenuItem>
                    <MenuItem value={20}>Média</MenuItem>
                    <MenuItem value={30}>Argiloso</MenuItem>
                    <MenuItem value={40}>Muito argiloso</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="multiple-select-label-machines">
                    Maquinários
                  </InputLabel>
                  <Select
                    labelId="multiple-select-label-machines"
                    id="multiple-select"
                    multiple
                    label="Maquinários m"
                    value={typeMachine}
                    onChange={handleChangeMachines}
                    renderValue={(selected) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "5px",
                          overflow: ".",
                          maxWidth: "100%",
                        }}
                      >
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            variant="outlined"
                            sx={{
                              height: "20px",
                              marginTop: "5px",
                              fontSize: "14px",
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  >
                    {optionsOfMachines.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Checkbox checked={typeMachine.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="multiple-select-id-pesticide">
                    Pesticidas
                  </InputLabel>
                  <Select
                    labelId="multiple-select-id-pesticide"
                    id="multiple-select"
                    multiple
                    label="Pesticidas p"
                    value={typePesticide}
                    onChange={handleChangePesticides}
                    renderValue={(selected) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "5px",
                          overflow: ".",
                          maxWidth: "100%",
                        }}
                      >
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            variant="outlined"
                            sx={{
                              height: "20px",
                              marginTop: "5px",
                              fontSize: "14px",
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  >
                    {optionsOfPesticide.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Checkbox
                          checked={typePesticide.indexOf(option) > -1}
                        />
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label="Preço do maquinário"
                  sx={{ overflowX: "." }}
                  value={machineValueHour}
                  onChange={(ev) => setMachineValueHour(ev.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        Valor por hora
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                />

                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{
                    display: "flex",
                    gap: "1.5rem",
                    justifyContent: "center",
                    margin: "7px",
                    alignItems: "center",
                  }}
                >
                  <InputLabel id="demo-row-radio-buttons-group-label">
                    Contém irrigação?
                  </InputLabel>
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

              <S.GridCard>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label="Quantidade de Pesticidas"
                  sx={{ overflowX: "." }}
                  value={machineValueHour}
                  onChange={(ev) => setMachineValueHour(ev.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">kg's</InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  type="number"
                  label="Quantidade de sementes"
                  sx={{ overflowX: "." }}
                  value={machineValueHour}
                  onChange={(ev) => setMachineValueHour(ev.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">kg's</InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Incidencias comuns de pragas"
                  sx={{ overflowX: "." }}
                  value={"Ervas daninha"}
                  onChange={(ev) => setMachineValueHour(ev.target.value)}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Observações"
                  sx={{ overflowX: "." }}
                  value={""}
                  onChange={(ev) => setMachineValueHour(ev.target.value)}
                  variant="outlined"
                  fullWidth
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Início do plantio"
                    value={valueOfDateInitial}
                    onChange={(newValueDate: Dayjs | null) => {
                      setValueOfDateInitial(newValueDate);
                      if (newValueDate) {
                        setValueOfDateFinally(
                          newValueDate.add(3, "months").add(16, "days")
                        );
                      }
                    }}
                    slotProps={{ textField: { variant: "outlined" } }}
                    format="DD/MM/YY"
                    sx={{
                      width: "100%",
                    }}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Colheita do plantio"
                    value={valueOfDateFinally}
                    disabled
                    slotProps={{ textField: { variant: "outlined" } }}
                    format="DD/MM/YY"
                    sx={{
                      width: "100%",
                    }}
                  />
                </LocalizationProvider>
              </S.GridCard>
              <S.GridCard
                style={{
                  marginTop: "-20px",
                }}
              >
                <h4>NPK PART</h4>
                <TextField
                  id="outlined-basic"
                  label="Quantidade de fósforo"
                  sx={{ overflowX: "." }}
                  value={phosphorValue ? phosphorValue : "Não possui"}
                  disabled
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Quantidade de potássio"
                  sx={{ overflowX: "." }}
                  value={potassiumValue ? potassiumValue : "Não possui"}
                  disabled
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label={`Bactérias do tipo:`}
                  sx={{ overflowX: "." }}
                  value={
                    nitrogenType
                      ? nitrogenType === "inoc"
                        ? "Inoc"
                        : nitrogenType === "coInoc"
                        ? "Co-Inoc"
                        : ""
                      : "Não possui"
                  }
                  disabled
                  variant="outlined"
                  fullWidth
                />
                <label htmlFor="groundPH">Ph do solo</label>
                <Slider
                  min={0}
                  max={14}
                  step={0.1}
                  valueLabelDisplay="auto"
                  defaultValue={7}
                  marks={marks}
                  style={{ width: "80%", marginTop: "-20px" }}
                  name="groundPH"
                />
              </S.GridCard>
            </S.GridPlacement>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "40%",
                  height: "4rem",
                }}
                onClick={setFormNPKOpen}
              >
                Voltar
              </Button>
              <Button
                color="success"
                variant="contained"
                sx={{
                  width: "60%",
                  height: "4rem",
                }}
                onClick={setFormNPKOpen}
              >
                Confirmar
              </Button>
            </div>
          </S.LabelInput>
        </S.FormContainerLargeWidth>
      )}
    </>
  );
};

export default RegisterPlanting;
