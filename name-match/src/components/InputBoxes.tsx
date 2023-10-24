import React, {useState} from "react";
import Box from "@mui/material/Box";
import {GivenAndFamilyNames} from "./GivenAndFamilyNames";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {ratio} from "fuzzball";
import {FullName} from "./FullName";

export function InputBoxes() {

  let [cicValue, setCicValue] = useState("");
  let [bavValue, setBavValue] = useState("");
  let [submittedValue, setSubmittedValue] = useState("");

  const onClick = () => {
    console.log("Setting submitted value:", {cicValue});
    setSubmittedValue(cicValue)
  }

  return (
    <Box>
      <GivenAndFamilyNames componentName={"CIC"} setValue={setCicValue}/>
      <FullName componentName={"BAV"} setValue={setBavValue}/>
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