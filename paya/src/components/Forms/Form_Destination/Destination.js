import React, { useState } from 'react';
import { Form, Button, Row, Col, ToggleButtonGroup, ToggleButton, ButtonGroup }   from 'react-bootstrap';
import { ReactComponent as SVG } from '../../../assets/images/paya_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useHistory } from 'react-router-dom';
import { faPassport, faCar, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import style from '../Form_SendMoney/SendMoney.module.css';


const Destination = (props) => {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Identity Card', value: '1', svg: faAddressCard },
    { name: 'Passport', value: '2', svg: faPassport},
    { name: 'Driving license', value: '3', svg: faCar},
  ];

  const history = useHistory();
  const linkDestination = () => {
    props.history.push("/destination")
  }

  return (
    <div className={`${"container"}`}>
      <div className={`${"row justify-content-center my-5"} `}>
          <div className={`${style["send-money"]}`}>
            <h3> Destination </h3>
            <Form>
              <Form.Group>
                <Form.Label>Their email (Optional)</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Their name" />
              </Form.Group>

              <Form.Group>
                <Form.Label>IBAN</Form.Label>
                <Form.Control type="Text" placeholder="Their IBAN" />
              </Form.Group>

              <div className={`${"row justify-content-center"}`}>
                <Button className={`${style["btn"]}`} onClick={() =>  history.push("/verification")} type="submit">Continue</Button>
              </div>
            </Form>
          </div>
      </div>
    </div>
  )
}

export default Destination;
