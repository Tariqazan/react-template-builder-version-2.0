import React, { useState, useRef } from 'react';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import Drop from '../Drop';

function HeadingElement() {
    const [remove, setRemove] = useState(true)

    const [show, setShow] = useState(false)
    const [justifyContent, setjustifyContent] = useState("")
    const [color, setColor] = useState("")
    const [fontsize, setFontSize] = useState("16px")


    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)
    return (
        <>
            {remove ?
                <div style={{ 'display': 'flex', 'justifyContent': justifyContent, 'color': color }} onClick={handleOpen}>
                    <p contentEditable="true" style={{ 'width': '100%', 'fontSize': fontsize, }}>heading</p>
                </div> : <Drop></Drop>}

            {show ?
                <div className='sidenav'>
                    <div>
                        <div><Button onClick={handleClose}>X</Button></div>
                    </div>
                    <div>
                        <Button variant="close" onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}></Button>
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
                </div> : <></>}
        </>
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