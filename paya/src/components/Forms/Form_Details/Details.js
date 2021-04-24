import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Form, Button, Row, Col, ToggleButtonGroup, ToggleButton, ButtonGroup }   from 'react-bootstrap';
import style from '../Form_SendMoney/SendMoney.module.css';


const Details = (props) => {
  const history = useHistory();
  const redirect = () => {
    alert("hurray!");
    history.push("/")
  }


  return (
    <div className={`${"container"}`}>
      <div className={`${"row justify-content-center my-5"} `}>
          <div className={`${style["send-money"]}`}>
            <h3> Your payment details </h3>
            <Form>
              <Form.Group>
                <Form.Label>IBAN</Form.Label>
                <Form.Control type="email" placeholder="Your IBAN" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>CVC</Form.Label>
                  <Form.Control type="number" placeholder="XXX"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Expiration date</Form.Label>
                  <Form.Control type="date" placeholder="11/23"/>
                </Form.Group>
              </Form.Row>

              <div className={`${"row justify-content-center my-3"}`}>
                <Button className={`${style["btn"]}`} type="submit" onClick={() => {alert("Transaction complete!"); history.push("/")} }>Continue</Button>
              </div>
            </Form>
          </div>
      </div>
    </div>
  )
}

export default Details;
