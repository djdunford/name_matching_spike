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

function GivenAndFamilyNames({componentName, setValue}: any) {

  let [givenNames, setGivenNames] = useState("");
  let [familyNames, setFamilyNames] = useState("");

  const onGivenNamesChange = (e: any) => {
    setValue((e.target.value + " " + familyNames).trim());
    setGivenNames(e.target.value);
  }

  const onFamilyNamesChange = (e: any) => {
    setValue((givenNames + " " + e.target.value).trim());
    setFamilyNames(e.target.value);
  }

  return (
    <Box component="form" border="3px solid" sx={{
      '& .MuiTextField-root': {m: 1, width: '25ch'},
    }}>
      <Grid item>
        <h3>{componentName}</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <TextField fullWidth label={"Given Names"} onChange={onGivenNamesChange} autoComplete={"off"}/>
        </Grid>
        <Grid item>
          <TextField fullWidth label={"Family Names"} onChange={onFamilyNamesChange} autoComplete={"off"}/>
        </Grid>
      </Grid>
    </Box>
  )
}

function InputBoxes() {

  let [cicValue, setCicValue] = useState("");
  let [bavValue, setBavValue] = useState("");
  let [hmrcValue, setHmrcValue] = useState("");
  let [kbvValue, setKbvValue] = useState("");
  let [submittedValue, setSubmittedValue] = useState("");

  const onClick = () => {
    console.log("Setting submitted value:", {cicValue});
    setSubmittedValue(cicValue)
  }

  return (
    <Box>
      <GivenAndFamilyNames componentName={"CIC"} setValue={setCicValue}/>
      <GivenAndFamilyNames componentName={"BAV"} setValue={setBavValue}/>
      <GivenAndFamilyNames componentName={"HMRC"} setValue={setHmrcValue}/>
      <GivenAndFamilyNames componentName={"KBV"} setValue={setKbvValue}/>
      <Box>
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
      </Box>
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
