import React, {useState} from "react";
import Box from "@mui/material/Box";
import {GivenAndFamilyNames} from "./GivenAndFamilyNames";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {ratio} from "fuzzball";

export function InputBoxes() {

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