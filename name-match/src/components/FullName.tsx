import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export function FullName({componentName, setValue}: any) {

  const onFullNameChange = (e: any) => {
    setValue(e.target.value.trim());
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
          <TextField fullWidth label={"Full Name"} onChange={onFullNameChange} autoComplete={"off"}/>
        </Grid>
      </Grid>
    </Box>
  )
}