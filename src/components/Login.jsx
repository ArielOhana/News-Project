import { NewsContext } from "./App";
import { useContext } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { user, setUser } = useContext(NewsContext);
  const navigate = useNavigate()
  const onSubmit = (data) => {
    setUser(data);
    navigate("/Home")
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          margin: 0,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
       
      </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div style={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center'}}>
          <h1 style={{ marginTop: "50px" }}>Login</h1>
            <TextField
              required
              id="FirstName"
              label="First Name"
              defaultValue={user.FirstName? user.FirstName:''}
              {...register("FirstName")}
            />
            <TextField
              required
              id="LastName"
              label="Last Name"
              defaultValue={user.LastName? user.LastName:''}

              {...register("LastName")}
            />
            <TextField
              required
              id="Email"
              label="Email"
              defaultValue={user.Email? user.Email:''}

              {...register("Email")}
            />
            <TextField
              required
              id="Password"
              label="Password"
              type="password"
              autoComplete="current-password"
              defaultValue={user.Password? user.Password:''}

              {...register("Password")}
            />
          </div>
          <button type="submit">Submit</button>
        </Box>
    </>
  );
}
export default Login;
