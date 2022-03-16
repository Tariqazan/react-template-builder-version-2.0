import React, { useState, useRef } from 'react';
import { Button, Col, Form, FormControl, FormSelect, InputGroup, Row } from 'react-bootstrap';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Drop from '../Drop';
import OutsideClick from '../OutsideClick';

function ButtonElement({ setDropped, dropped }) {
  const boxRef = useRef(null)
  const boxOutsideClick = OutsideClick(boxRef)

  // responsive
  const [responsive, setResponsive] = useState(false)
  const [responsiveclassName, setResponsiveClassName] = useState("")

  // start css variable
  const [textcolor, setTextColor] = useState("")
  const [width, setWidth] = useState("")
  const [backgroundcolor, setBackgroundColor] = useState("")
  const [justifyContent, setjustifyContent] = useState("center")
  const [href, setHREF] = useState("/#")

  const [padding, setPadding] = useState("")
  const [paddingTop, setPaddingTop] = useState("")
  const [paddingBottom, setPaddingBottom] = useState("")
  const [paddingLeft, setPaddingLeft] = useState("")
  const [paddingRight, setPaddingRight] = useState("")

  const [borderWidth, setBorderWidth] = useState("1")
  const [borderWidthTop, setBorderWidthTop] = useState("1")
  const [borderWidthBottom, setBorderWidthBottom] = useState("1")
  const [borderWidthLeft, setBorderWidthLeft] = useState("1")
  const [borderWidthRight, setBorderWidthRight] = useState("1")

  const [borderStyle, setBorderStyle] = useState("solid")
  const [borderStyleTop, setBorderStyleTop] = useState("solid")
  const [borderStyleBottom, setBorderStyleBottom] = useState("solid")
  const [borderStyleLeft, setBorderStyleLeft] = useState("solid")
  const [borderStyleRight, setBorderStyleRight] = useState("solid")

  const [borderColor, setBorderColor] = useState("black")
  const [borderColorTop, setBorderColorTop] = useState("black")
  const [borderColorBottom, setBorderColorBottom] = useState("black")
  const [borderColorLeft, setBorderColorLeft] = useState("black")
  const [borderColorRight, setBorderColorRight] = useState("black")

  const [borderRadius, setBorderRadius] = useState("")

  // end css variable

  // sidebar
  const [show, setShow] = useState(false)
  const handleOpen = () => setShow(true)
  const handleClose = () => setShow(false)

  const [remove, setRemove] = useState(true)

  const ref = useDetectClickOutside({ onTriggered: handleClose });
  return (
    <div ref={ref} className={responsiveclassName}>
      {remove ?
        <div className="d-flex text-center" style={{ 'justifyContent': justifyContent }} onClick={handleOpen}>
          <a href={href}
            style={{
              'padding': padding, 'paddingBottom': paddingBottom,
              'paddingTop': paddingTop, 'paddingLeft': paddingLeft,
              'paddingRight': paddingRight, 'borderWidth': borderWidth,
              'borderBottomWidth': borderWidthBottom, 'borderTopWidth': borderWidthTop,
              'borderLeftWidth': borderWidthLeft, 'borderRightWidth': borderWidthRight,
              'borderStyle': borderStyle, 'borderBottomStyle': borderStyleBottom,
              'borderTopStyle': borderStyleTop, 'borderLeftStyle': borderStyleLeft,
              'borderRightStyle': borderStyleRight, 'borderColor': borderColor,
              'borderBottomColor': borderColorBottom, 'borderTopColor': borderColorTop,
              'borderLeftColor': borderColorLeft, 'borderRightColor': borderColorRight,
              'borderRadius': borderRadius, 'backgroundColor': backgroundcolor,
              'color': textcolor, 'width': width
            }}>
            <span contentEditable="true" ref={boxRef}>Button Text
              {boxOutsideClick ? <></> : <div className="bg-white">
                <select onChange={(e) => {
                  document.execCommand("fontName", false, e.target.value)
                }}>
                  <option value="andale mono">Andale Mono</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Arial">Arial</option>
                  <option value="Arial Black">Arial Black</option>
                  <option value="Hubballi">Hubballi</option>
                  <option value="Impact">Impact</option>
                </select>
                <select onChange={(e) => {
                  document.execCommand("fontSize", false, e.target.value)
                }}>
                  <option value="1">8px</option>
                  <option value="2">12px</option>
                  <option value="3">18px</option>
                  <option value="4">20px</option>
                  <option value="5">26px</option>
                  <option value="6">34px</option>
                  <option value="7">50px</option>
                </select>
                <EditButton cmd="strikeThrough" />
                <EditButton cmd="underline" />
                <EditButton cmd="italic" />
                <EditButton cmd="bold" />
              </div>}
            </span>
          </a>
        </div> : <Drop></Drop>}
      {show ? <div className="sidenav">
        <Button variant='close' onClick={handleClose}></Button>
        {/* <Button onClick={() => setDropped((dropped) => [...dropped, { 'name': "Button" }])}>Add New Button</Button> */}
        <Button variant='danger' onClick={() => {
          setRemove(false)
          setShow(false)
        }}>Remove</Button>
        <InputGroup className="my-2">
          <InputGroup.Text>URL</InputGroup.Text>
          <FormControl type='text' onChange={(e) => setHREF(e.target.value)}></FormControl>
        </InputGroup>
        <InputGroup className="my-2">
          <InputGroup.Text>Text Color</InputGroup.Text>
          <FormControl type='color' onChange={(e) => setTextColor(e.target.value)}></FormControl>
        </InputGroup>
        <InputGroup className="my-2">
          <InputGroup.Text>Background Color</InputGroup.Text>
          <FormControl type='color' onChange={(e) => setBackgroundColor(e.target.value)}></FormControl>
        </InputGroup>
        <InputGroup className="my-2">
          <InputGroup.Text>Width</InputGroup.Text>
          <FormControl type='range' onChange={(e) => setWidth(e.target.value + "%")}></FormControl>
        </InputGroup>
        <Row className="my-2">
          <Col md={4}><Button onClick={() => setjustifyContent("flex-start")}>Left</Button></Col>
          <Col md={4}><Button onClick={() => setjustifyContent("center")}>Center</Button></Col>
          <Col md={4}><Button onClick={() => setjustifyContent("flex-end")}>Right</Button></Col>
        </Row>
        <InputGroup className="my-2">
          <InputGroup.Text>Padding</InputGroup.Text>
          <FormControl type='number' onChange={(e) => setPadding(e.target.value + "px")}></FormControl>
        </InputGroup>
        <Row className="my-2">
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text>Padding Right</InputGroup.Text>
              <FormControl type='number' onChange={(e) => setPaddingRight(e.target.value + "px")}></FormControl>
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text>Padding Top</InputGroup.Text>
              <FormControl type='number' onChange={(e) => setPaddingTop(e.target.value + "px")}></FormControl>
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text>Padding Bottom</InputGroup.Text>
              <FormControl type='number' onChange={(e) => setPaddingBottom(e.target.value + "px")}></FormControl>
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text>Padding Left</InputGroup.Text>
              <FormControl type='number' onChange={(e) => setPaddingLeft(e.target.value + "px")}></FormControl>
            </InputGroup>
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={12}>
            <label htmlFor="">Border</label>
            <FormControl type='number' onChange={(e) => setBorderWidth(e.target.value + "px")}></FormControl>
            <FormSelect onChange={(e) => setBorderStyle(e.target.value)}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => setBorderColor(e.target.value)}></FormControl>
          </Col>
          <Col md={6}>
            <label htmlFor="">Border Top</label>
            <FormControl type='number' onChange={(e) => setBorderWidthTop(e.target.value + "px")}></FormControl>
            <FormSelect onChange={(e) => setBorderStyleTop(e.target.value)}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => setBorderColorTop(e.target.value)}></FormControl>
          </Col>
          <Col md={6}>
            <label htmlFor="">Border Left</label>
            <FormControl type='number' onChange={(e) => setBorderWidthLeft(e.target.value + "px")}></FormControl>
            <FormSelect onChange={(e) => setBorderStyleLeft(e.target.value)}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => setBorderColorLeft(e.target.value)}></FormControl>
          </Col>
          <Col md={6}>
            <label htmlFor="">Border Right</label>
            <FormControl type='number' onChange={(e) => setBorderWidthRight(e.target.value + "px")}></FormControl>
            <FormSelect onChange={(e) => setBorderStyleRight(e.target.value)}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => setBorderColorRight(e.target.value)}></FormControl>
          </Col>
          <Col md={6}>
            <label htmlFor="">Border Bottom</label>
            <FormControl type='number' onChange={(e) => setBorderWidthBottom(e.target.value + "px")}></FormControl>
            <FormSelect onChange={(e) => setBorderStyleBottom(e.target.value)}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => setBorderColorBottom(e.target.value)}></FormControl>
          </Col>
        </Row>
        <Row className="my-2">
          <label htmlFor="">Border Radius</label>
          <Col md={12}>
            <FormControl type='number' onChange={(e) => setBorderRadius(e.target.value + "px")}></FormControl>
          </Col>
        </Row>
        <Form.Check
          type="switch"
          label="Hide on MobileView"
          value={responsive}
          onChange={() => {
            if (responsive === true) {
              setResponsive(false)
              setResponsiveClassName("")
            } else {
              setResponsive(true)
              setResponsiveClassName("hide-mobile")
            }
          }}
        />
      </div> : <></>}
    </div>
  )
}

export default ButtonElement;


function EditButton(props) {
  return (
    <button className='sanitize-btn'
      key={props.cmd}
      onMouseDown={evt => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name || props.cmd}
    </button>
  );
}