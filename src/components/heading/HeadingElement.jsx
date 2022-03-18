import React, { useState } from 'react';
import { Row, Col, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import Drop from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';

function HeadingElement() {
    const [remove, setRemove] = useState(true)

    const [show, setShow] = useState(false)
    const [justifyContent, setjustifyContent] = useState("")
    const [color, setColor] = useState("")
    const [fontsize, setFontSize] = useState("16px")


    // responsive
    const [responsive, setResponsive] = useState(false)
    const [responsiveclassName, setResponsiveClassName] = useState("")

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)
    const ref = useDetectClickOutside({ onTriggered: handleClose });
    return (
        <div ref={ref} className={responsiveclassName}>
            {remove ?
                <div className='d-flex' style={{ 'justifyContent': justifyContent, 'color': color }} onClick={handleOpen}>
                    <p className='text-break' contentEditable="true" suppressContentEditableWarning style={{ 'fontSize': fontsize, }}>heading</p>
                </div> : <Drop></Drop>}

            {show ?
                <div className='sidenav'>
                    <div>
                        <div><Button onClick={handleClose}>X</Button></div>
                    </div>
                    <div>
                        <Button variant="danger" onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}>Remove</Button>
                        <Row className='my-2'>
                            <Col md={3}><Button onClick={() => { setFontSize("2.5rem") }}>H1</Button></Col>
                            <Col md={3}><Button onClick={() => { setFontSize("2rem") }}>H2</Button></Col>
                            <Col md={3}><Button onClick={() => { setFontSize("1.75rem") }}>H3</Button></Col>
                            <Col md={3}><Button onClick={() => { setFontSize("1.5rem") }}>H4</Button></Col>
                        </Row>
                        <Row className="my-2">
                            <select className='form-control' onChange={(e) => {
                                document.execCommand("fontName", false, e.target.value)
                            }}>
                                <option value="Roboto">Roboto</option>
                                <option value="Arial">Arial</option>
                                <option value="Hubballi">Hubballi</option>
                            </select>
                        </Row>
                        <Row className="my-2">
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">Font Size</InputGroup.Text>
                                <FormControl type='number' onChange={(e) => {
                                    setFontSize(e.target.value + "px")
                                }}></FormControl>
                            </InputGroup>
                        </Row>
                        <Row className="my-2">
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
                                <FormControl type='color' onChange={(e) => {
                                    setColor(e.target.value)
                                }}></FormControl>
                            </InputGroup>
                        </Row>
                        <Row className="my-2">
                            <Col md={4}><Button onClick={(e) => setjustifyContent("flex-start")}>Left</Button></Col>
                            <Col md={4}><Button onClick={(e) => setjustifyContent("center")}>Center</Button></Col>
                            <Col md={4}><Button onClick={(e) => setjustifyContent("flex-end")}>Right</Button></Col>
                        </Row>
                    </div>
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

export default HeadingElement;



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