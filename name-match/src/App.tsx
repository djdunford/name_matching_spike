import React, {useEffect, useState} from 'react';
import './App.css';
import {ratio} from "fuzzball";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function InputBoxes(props: any) {

  let [value, setValue] = useState("");
  let [updatedValue, setUpdatedValue] = useState("");

  const onFormSubmit = () => {
    setUpdatedValue(value)
  }

  useEffect(() => {
    setValue(props.value)
  }, [props.value]);

  const onValueValueChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <Box component="form" sx={{
      '& .MuiTextField-root': {m: 1, width: '25ch'},
    }}>
      <Grid container spacing={2}>
        <Grid item>
          <TextField fullWidth label={"CIC Given Names"} onChange={onValueValueChange} autoComplete={"off"}/>
        </Grid>
        <Grid item>
          <TextField fullWidth label={"CIC Family Names"} autoComplete={"off"}/>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={onFormSubmit}>
            Submit
          </Button>
        </Grid>
        <Grid item>
          Fuzzball Ratio:
          {
            ratio("Fred Flintstone", updatedValue)
          }
        </Grid>
      </Grid>
    </Box>
  );
}

const App = () => {
  return (
    <div className="App">
      <InputBoxes/>
    </div>
  );
}

export default App;
