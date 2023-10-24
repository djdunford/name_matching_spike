import React, {useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export function GivenAndFamilyNames({componentName, setValue}: any) {

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