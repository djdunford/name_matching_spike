import React, {useEffect, useState} from 'react';
import './App.css';
import {ratio} from "fuzzball";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";

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
          <Container fluid>
            <Row>
              <Col>
                <FloatingLabel label="CIC Given Names">
                  <Form.Control type="text" name="cicGivenNames" onChange={onValueValueChange}/>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label="CIC Family Names">
                  <Form.Control type="text" name="cicFamilyNames"/>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                Fuzzball Ratio:
                {
                  ratio("Fred Flintstone", updatedValue)
                }
              </Col>
            </Row>
          </Container>
        </Form>
      </header>
    </div>
  );
}

export default App;
