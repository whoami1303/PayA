import React, { useState } from 'react';
import { Form, Button, Row, Col, ToggleButtonGroup, ToggleButton, ButtonGroup }   from 'react-bootstrap';
import { ReactComponent as SVG } from '../../../assets/images/paya_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPassport, faCar, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import style from './SendMoney.module.css';

const SendMoney = (props) => {

  return (
    <div className={`${"container"}`}>
      <div className={`${"row justify-content-center"} `}>
          <div className={`${style["send-money"]}`}>
            <h3> Send Money </h3>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Currency</Form.Label>
                <Form.Control as="select">
                  <option>🇪🇺 EURT - EUR</option>
                  <option>🇺🇸 USDT - USD</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Amount </Form.Label>
                <Form.Control type="number" placeholder="Enter your amount" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Receive in currency</Form.Label>
                <Form.Control as="select">
                  <option>🇲🇩 MDLT - MDL</option>
                  <option>🇺🇸 USDT - USD</option>
                </Form.Control>
              </Form.Group>

              <div className={`${"row justify-content-center"}`}>
                <Button className={`${style["btn"]}`} type="submit" >Continue</Button>
              </div>
            </Form>
          </div>
      </div>
    </div>
  )
}

export default SendMoney;
