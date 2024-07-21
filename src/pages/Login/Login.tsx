import React from "react";
import * as S from "./styles";
import { TextField, Checkbox, FormControlLabel, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
          <TextField style={{ borderColor: "#fffff" }} size="small" fullWidth label="email" id="email" />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
            style={{ display: "flex", justifyContent: "center" }}
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
              label="Password"
            />
          </FormControl>
          <S.CheckboxContainer>
            <FormControlLabel control={<Checkbox />} label="Relembrar" />
          </S.CheckboxContainer>
        </S.LoginForm>
      </S.Container>
    </>
  );
}

export default Login;
