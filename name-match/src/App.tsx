import React, {useEffect, useState} from 'react';
import './App.css';
import {ratio} from "fuzzball";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props: any) => {

  let [value, setValue] = useState("");
  let [updatedValue, setUpdatedValue] = useState("");

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
    setUpdatedValue(value)
  }

  const onValueValueChange = (e: any) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    setValue(props.value)
  }, [props.value]);

  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={onFormSubmit}>
          <Form.Group className="mb-3" controlId="namesInput.Input1">
            <Form.Label>Family names</Form.Label>
            <Form.Control type="text" name="input1" onChange={onValueValueChange}/>
          </Form.Group>
          <Button type="submit">
            Submit
          </Button>
          <Form.Group className="mb-3">
            <Form.Label>Output:</Form.Label>
            <Form.Control readOnly type="text" name="answer"/>
          </Form.Group>
        </Form>
        Fuzzball Ratio:
        {
          ratio("Fred Flintstone", updatedValue)
        }
      </header>
    </div>
  );
}

export default App;
