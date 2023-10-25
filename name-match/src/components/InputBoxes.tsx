import React, { useState } from "react";
import Box from "@mui/material/Box";
import { GivenAndFamilyNames } from "./GivenAndFamilyNames";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ratio } from "fuzzball";
import { FullName } from "./FullName";

export function InputBoxes() {
  let [claimedName, setClaimedName] = useState("");
  let [credentialName, setCredentialName] = useState("");
  let [result, setResult] = useState<number | undefined>(0);

  const onClick = () => {
    setResult(ratio(credentialName, claimedName));
  };

  const onChangeClaimedName = (name: string) => {
    setResult(undefined);
    return setClaimedName(name);
  };

  const onChangeCredentialName = (name: string) => {
    setResult(undefined);
    return setCredentialName(name);
  };

  // const onChangedName = (name: string, setName: (name: string) => any) => {
  //   setResult(undefined);
  //   return setName(name);
  // };

  return (
    <Box>
      <GivenAndFamilyNames
        componentName={"CIC"}
        setValue={onChangeClaimedName}
      />
      <FullName componentName={"BAV"} setValue={onChangeCredentialName} />
      <Box>
        <Grid item>
          <Button variant="contained" onClick={onClick}>
            Submit
          </Button>
        </Grid>
        <Grid item>Fuzzball Ratio: {result}</Grid>
      </Box>
    </Box>
  );
}
