import React, { useState } from 'react';
import { Form, Button, Row, Col, ToggleButtonGroup, ToggleButton, ButtonGroup }   from 'react-bootstrap';
import { ReactComponent as SVG } from '../../../assets/images/paya_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom';
import { faPassport, faCar, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import style from './SendMoney.module.css';

const SendMoney = (props) => {
  const history = useHistory();
  const linkDestination = () => {
    props.history.push("/destination");
  }
  
  return (
    <div className={`${"container"}`}>
      <div className={`${"row justify-content-center"} `}>
          <div className={`${style["send-money"]}`}>
            <h3> Send Money </h3>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Currency</Form.Label>
                <Form.Control as="select">
                  <option>πͺπΊ EURT - EUR</option>
                  <option>πΊπΈ USDT - USD</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Amount </Form.Label>
                <Form.Control type="number" placeholder="Enter your amount" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Receive in currency</Form.Label>
                <Form.Control as="select">
                  <option>π²π© MDLT - MDL</option>
                  <option>πΊπΈ USDT - USD</option>
                </Form.Control>
              </Form.Group>

              <div className={`${"row justify-content-center"}`}>
                <Button className={`${style["btn"]}`} type="submit" onClick={() => history.push("/destination")} >Continue</Button>
              </div>
            </Form>
          </div>
      </div>
    </div>
  )
}

export default SendMoney;
