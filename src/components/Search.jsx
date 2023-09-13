import { useContext } from "react";
import Article from "./Article";
import * as React from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Search() {
    const [select, setSelect] = React.useState('');
    const [KeyWord, setKeyWord] = React.useState('');
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const onSubmit = (data) => {
    if(data.KeyWord.length >0 )
    {setKeyWord(data.KeyWord);}
else
{setKeyWord("default"); data.KeyWord = "default";}
    console.log(data, select);
    navigate(`/RunSearch/${select}/${data.KeyWord}`)

  };
 return (<>
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
        <h1 style={{ marginTop: "50px" }}>Search</h1>
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="SelectTopic"
          onChange={handleChange}
        >
          <MenuItem value={'Economic'}>Economic</MenuItem>
          <MenuItem value={'Israel'}>Israel</MenuItem>
          <MenuItem value={'General'}>General</MenuItem>
          <MenuItem value={'Sport'}>Sport</MenuItem>
          <MenuItem value={'Gaming'}>Gaming</MenuItem>
          <MenuItem value={'All'}>All</MenuItem>
        </Select>
      </FormControl>
      <TextField
              required
              id="KeyWord"
              label="Key Word"
              defaultValue={KeyWord? KeyWord:''}
              {...register("KeyWord")}
            />
             <button type="submit">Submit</button>
             </div>
    </Box>
      </div>
      </>
 )
}
export default Search;