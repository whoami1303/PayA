import React, { useState } from 'react';
import { Form, Button, Row, Col, ToggleButtonGroup, ToggleButton, ButtonGroup }   from 'react-bootstrap';
import { ReactComponent as SVG } from '../../../assets/images/paya_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useHistory } from 'react-router-dom';
import { faPassport, faCar, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import style from '../Form_SendMoney/SendMoney.module.css';

const Verification = (props) => {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Identity Card', value: '1', svg: faAddressCard },
    { name: 'Passport', value: '2', svg: faPassport},
    { name: 'Driving license', value: '3', svg: faCar},
  ];

  const history = useHistory();
  return (
    <div className={`${"container"}`}>


      <div className={`${"row justify-content-center my-5"} `}>
          <div className={`${style["send-money"]}`}>
            <h3> Identity Verification </h3>
            <Form>
              <Form.Group controlId="">
                <Form.Label>Destination Bank</Form.Label>
                <Form.Control as="select">
                  <option>🇲🇩 MAIB</option>
                  <option>🇲🇩 Victoria Bank</option>
                  <option>🇲🇩 Mobias Bank</option>
                  <option>🇲🇩 FinConBank</option>
                </Form.Control>
              </Form.Group>

              <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    className={`${style["identity-button"]} ${"mx-3 py-4 "}`}
                    type="radio"
                    variant="light"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                      <FontAwesomeIcon icon={radio.svg}  className={`${style["identity-icon"]}` }/>
                      <br/>
                      {radio.name}


                  </ToggleButton>
                ))}
              </ButtonGroup>

              <Form.Group>
                <Form.File id="" label="FRONT side of your document" />
              </Form.Group>

              <Form.Group>
                <Form.File id="" label="BACK side of your document" />
              </Form.Group>

              <div className={`${"row justify-content-center my-3"}`}>
                <Button className={`${style["btn"]}`} onClick={() => history.push("/details")} type="submit">Continue</Button>
              </div>
            </Form>
          </div>
      </div>
    </div>
  )
}

export default Verification;
