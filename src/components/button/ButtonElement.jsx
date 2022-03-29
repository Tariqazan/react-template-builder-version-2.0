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
  const [textcolor, setTextColor] = useState("black")
  const [width, setWidth] = useState("20%")
  const [backgroundcolor, setBackgroundColor] = useState("transparent")
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

  const [style, setStyle] = useState([{
    textcolor: textcolor,
    width: width,
    backgroundcolor: backgroundcolor,
    justifyContent: justifyContent,
    padding: padding,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    borderWidth: borderWidth,
    borderWidthTop: borderWidthTop,
    borderWidthBottom: borderWidthBottom,
    borderWidthLeft: borderWidthLeft,
    borderWidthRight: borderWidthRight,
    borderStyle: borderStyle,
    borderStyleTop: borderStyleTop,
    borderStyleBottom: borderStyleBottom,
    borderStyleLeft: borderStyleLeft,
    borderStyleRight: borderStyleRight,
    borderColor: borderColor,
    borderColorTop: borderColorTop,
    borderColorBottom: borderColorBottom,
    borderColorLeft: borderColorLeft,
    borderColorRight: borderColorRight,
    borderRadius: borderRadius
  }])

  const [undo, setUndo] = useState([])
  const [redo, setRedo] = useState([])

  const undoStyle = {
    textcolor: textcolor,
    width: width,
    backgroundcolor: backgroundcolor,
    justifyContent: justifyContent,
    padding: padding,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    borderWidth: borderWidth,
    borderWidthTop: borderWidthTop,
    borderWidthBottom: borderWidthBottom,
    borderWidthLeft: borderWidthLeft,
    borderWidthRight: borderWidthRight,
    borderStyle: borderStyle,
    borderStyleTop: borderStyleTop,
    borderStyleBottom: borderStyleBottom,
    borderStyleLeft: borderStyleLeft,
    borderStyleRight: borderStyleRight,
    borderColor: borderColor,
    borderColorTop: borderColorTop,
    borderColorBottom: borderColorBottom,
    borderColorLeft: borderColorLeft,
    borderColorRight: borderColorRight,
    borderRadius: borderRadius
  }

  return (
    <div ref={ref} className={responsiveclassName}>
      {remove ?
        <div className="d-flex text-center" style={{ 'justifyContent': style[0].justifyContent }} onClick={handleOpen}>
          <a href={href}
            style={{
              'padding': style[0].padding, 'paddingBottom': style[0].paddingBottom,
              'paddingTop': style[0].paddingTop, 'paddingLeft': style[0].paddingLeft,
              'paddingRight': style[0].paddingRight, 'borderWidth': style[0].borderWidth,
              'borderBottomWidth': style[0].borderWidthBottom, 'borderTopWidth': style[0].borderWidthTop,
              'borderLeftWidth': style[0].borderWidthLeft, 'borderRightWidth': style[0].borderWidthRight,
              'borderStyle': style[0].borderStyle, 'borderBottomStyle': style[0].borderStyleBottom,
              'borderTopStyle': style[0].borderStyleTop, 'borderLeftStyle': style[0].borderStyleLeft,
              'borderRightStyle': style[0].borderStyleRight, 'borderColor': style[0].borderColor,
              'borderBottomColor': style[0].borderColorBottom, 'borderTopColor': style[0].borderColorTop,
              'borderLeftColor': style[0].borderColorLeft, 'borderRightColor': style[0].borderColorRight,
              'borderRadius': style[0].borderRadius, 'backgroundColor': style[0].backgroundcolor,
              'color': style[0].textcolor, 'width': style[0].width
            }}>
            <span className='text-break' contentEditable="true" suppressContentEditableWarning ref={boxRef}>Button Text
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
        <Button onClick={() => {
          let undoArr = [...undo]
          setStyle(undoArr)
        }}>Undo</Button>
        <Button onClick={() => {
          let redoArr = [...redo]
          setStyle(redoArr)
        }}>Redo</Button>
        <InputGroup className="my-2">
          <InputGroup.Text>URL</InputGroup.Text>
          <FormControl type='text' onChange={(e) => setHREF(e.target.value)}></FormControl>
        </InputGroup>
        <InputGroup className="my-2">
          <InputGroup.Text>Text Color</InputGroup.Text>
          <FormControl type='color' onChange={(e) => {
            setTextColor(e.target.value)
            setUndo([undoStyle])
            let arr = [...style]
            arr[0].textcolor = e.target.value
            setStyle(arr)
            setRedo(arr)
          }}></FormControl>
        </InputGroup>
        <InputGroup className="my-2">
          <InputGroup.Text>Background Color</InputGroup.Text>
          <FormControl type='color' onChange={(e) => {
            setBackgroundColor(e.target.value)
            setUndo([undoStyle])
            let arr = [...style]
            arr[0].backgroundcolor = e.target.value
            setStyle(arr)
            setRedo(arr)
          }}></FormControl>
        </InputGroup>
        <InputGroup className="my-2">
          <InputGroup.Text>Width</InputGroup.Text>
          <FormControl type='range' onChange={(e) => {
            setWidth(e.target.value + "%")
            setUndo([undoStyle])
            let arr = [...style]
            arr[0].width = e.target.value + "%"
            setStyle(arr)
            setRedo(arr)
          }}></FormControl>
        </InputGroup>
        <Row className="my-2">
          <Col md={4}><Button onClick={() => {
            setjustifyContent("flex-start")
            setUndo([undoStyle])
            let arr = [...style]
            arr[0].justifyContent = "flex-start"
            setStyle(arr)
            setRedo(arr)
          }}>Left</Button></Col>
          <Col md={4}><Button onClick={() => {
            setjustifyContent("center")
            setUndo([undoStyle])
            let arr = [...style]
            arr[0].justifyContent = "center"
            setStyle(arr)
            setRedo(arr)
          }}>Center</Button></Col>
          <Col md={4}><Button onClick={() => {
            setjustifyContent("flex-end")
            setUndo([undoStyle])
            let arr = [...style]
            arr[0].justifyContent = "flex-end"
            setStyle(arr)
            setRedo(arr)
          }}>Right</Button></Col>
        </Row>
        <InputGroup className="my-2">
          <InputGroup.Text>Padding</InputGroup.Text>
          <FormControl type='number' onChange={(e) => {
            setPadding(e.target.value + "px")
            setUndo([undoStyle])
            let arr = [...style]
            arr[0].padding = e.target.value + "px"
            setStyle(arr)
            setRedo(arr)
          }}></FormControl>
        </InputGroup>
        <Row className="my-2">
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text>Padding Right</InputGroup.Text>
              <FormControl type='number' onChange={(e) => {
                setPaddingRight(e.target.value + "px")
                setUndo([undoStyle])
                let arr = [...style]
                arr[0].paddingRight = e.target.value + "px"
                setStyle(arr)
                setRedo(arr)
              }}></FormControl>
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text>Padding Top</InputGroup.Text>
              <FormControl type='number' onChange={(e) => {
                setPaddingTop(e.target.value + "px")
                setUndo([undoStyle])
                let arr = [...style]
                arr[0].paddingTop = e.target.value + "px"
                setStyle(arr)
                setRedo(arr)
              }}></FormControl>
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text>Padding Bottom</InputGroup.Text>
              <FormControl type='number' onChange={(e) => {
                setPaddingBottom(e.target.value + "px")
                setUndo([undoStyle])
                let arr = [...style]
                arr[0].paddingBottom = e.target.value + "px"
                setStyle(arr)
                setRedo(arr)
              }}></FormControl>
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text>Padding Left</InputGroup.Text>
              <FormControl type='number' onChange={(e) => {
                setPaddingLeft(e.target.value + "px")
                setUndo([undoStyle])
                let arr = [...style]
                arr[0].paddingLeft = e.target.value + "px"
                setStyle(arr)
                setRedo(arr)
              }}></FormControl>
            </InputGroup>
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={12}>
            <label htmlFor="">Border</label>
            <FormControl type='number' onChange={(e) => {
              setBorderWidth(e.target.value + "px")
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderWidth = e.target.value + "px"
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
            <FormSelect onChange={(e) => {
              setBorderStyle(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderStyle = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => {
              setBorderColor(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderColor = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
          </Col>
          <Col md={6}>
            <label htmlFor="">Border Top</label>
            <FormControl type='number' onChange={(e) => {
              setBorderWidthTop(e.target.value + "px")
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderWidthTop = e.target.value + "px"
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
            <FormSelect onChange={(e) => {
              setBorderStyleTop(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderStyleTop = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => {
              setBorderColorTop(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderColorTop = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
          </Col>
          <Col md={6}>
            <label htmlFor="">Border Left</label>
            <FormControl type='number' onChange={(e) => {
              setBorderWidthLeft(e.target.value + "px")
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderWidthLeft = e.target.value + "px"
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
            <FormSelect onChange={(e) => {
              setBorderStyleLeft(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderStyleLeft = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => {
              setBorderColorLeft(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderColorLeft = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
          </Col>
          <Col md={6}>
            <label htmlFor="">Border Right</label>
            <FormControl type='number' onChange={(e) => {
              setBorderWidthRight(e.target.value + "px")
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderWidthRight = e.target.value + "px"
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
            <FormSelect onChange={(e) => {
              setBorderStyleRight(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderStyleRight = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => {
              setBorderColorRight(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderColorRight = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
          </Col>
          <Col md={6}>
            <label htmlFor="">Border Bottom</label>
            <FormControl type='number' onChange={(e) => {
              setBorderWidthBottom(e.target.value + "px")
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderWidthBottom = e.target.value + "px"
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
            <FormSelect onChange={(e) => {
              setBorderStyleBottom(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderStyleBottom = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </FormSelect>
            <FormControl type='color' onChange={(e) => {
              setBorderColorBottom(e.target.value)
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderColorBottom = e.target.value
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
          </Col>
        </Row>
        <Row className="my-2">
          <label htmlFor="">Border Radius</label>
          <Col md={12}>
            <FormControl type='number' onChange={(e) => {
              setBorderRadius(e.target.value + "px")
              setUndo([undoStyle])
              let arr = [...style]
              arr[0].borderRadius = e.target.value + "px"
              setStyle(arr)
              setRedo(arr)
            }}></FormControl>
          </Col>
        </Row>
        <Form.Check
          type="switch"
          label="Hide on MobileView"
          defaultChecked={responsive}
          onChange={() => {
            if (responsive === false) {
              setResponsive(true)
              setResponsiveClassName("hide-mobile")
            }
            else {
              setResponsive(false)
              setResponsiveClassName("")
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