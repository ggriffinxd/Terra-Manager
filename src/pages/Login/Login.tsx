import React from "react";
import * as S from "./styles";
import { TextField, Checkbox, FormControlLabel, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <S.Container>
        <S.LoginForm>
          <S.Title>Entrar</S.Title>
          <TextField size="small" fullWidth label="email" id="email" />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password"
              sx={{
                marginTop: '-6px',
                '&.MuiInputLabel-shrink': {
                  marginTop: '0px',
                },
              }}
            >senha</InputLabel>
            <OutlinedInput
              style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
              size="small"
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="senha"
            />
          </FormControl>
          <S.CheckboxContainer>
            <FormControlLabel control={<Checkbox />} label="Relembrar" />
            <Link style={{ color: `${theme.colors.seventh}`, textDecoration: "none" }} to="/register">Esqueceu a senha?</Link>
          </S.CheckboxContainer>
          <Button variant="contained">Acessar</Button>
          <span style={{ display: "flex", justifyContent: "center" }} >Não tem uma conta?
            <Link style={{ color: `${theme.colors.seventh}`, textDecoration: "none" }} to="/register">Registre-se</Link> </span>
        </S.LoginForm>
      </S.Container>
    </>
  );
}

export default Login;
