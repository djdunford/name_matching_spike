import React, {useState} from 'react';
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


function InputBoxes() {

  let [value, setValue] = useState("");
  let [submittedValue, setSubmittedValue] = useState("");

  const onClick = () => {
    setSubmittedValue(value)
  }

  const onValueChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <Box component="form" sx={{
      '& .MuiTextField-root': {m: 1, width: '25ch'},
    }}>
      <Grid container spacing={2}>
        <Grid item>
          <TextField fullWidth label={"CIC Given Names"} onChange={onValueChange} autoComplete={"off"}/>
        </Grid>
        <Grid item>
          <TextField fullWidth label={"CIC Family Names"} autoComplete={"off"}/>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={onClick}>
            Submit
          </Button>
        </Grid>
        <Grid item>
          Fuzzball Ratio:
          {
            ratio("Fred Flintstone", submittedValue)
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
