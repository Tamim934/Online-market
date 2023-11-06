import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../utils/token.js";
// import axiosRequest from "../../utils/axiosRequest";
import axios from "axios";

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Login = async () => {
    console.log(1);
    const obj = {
      email: userName,
      password: password,
    };
    try {
      const { data } = await axios.post("http://localhost:3000/api/login", obj);
      console.log(data);
      saveToken(data.accessToken);

      setPassword("");
      setUserName("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-40 dark:text-white w-[40%]  mx-auto">
      <div className=" justify-center grid gap-5 dark:bg-red-500 rounded-md  p-20">
        <div className="px-2">
          <p className="text-4xl">Log in to Exclusive</p>
          <p>Enter your details below</p>
        </div>
        <div>
          <TextField
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            sx={{ m: 1, width: "40ch" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
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
        </div>
        <div className=" flex  gap-20 px-2">
          <Button
            onClick={() => Login()}
            sx={{ height: "50px", width: "140px" }}
            color="error"
            variant="contained"
          >
            Log In
          </Button>
          <Button color="error">Forget Password?</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
