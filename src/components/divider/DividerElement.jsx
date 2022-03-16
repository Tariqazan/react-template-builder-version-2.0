import React, { useState, useEffect, useRef } from 'react';
import { Col, FormControl, Row, InputGroup, Button, Form } from 'react-bootstrap';

import Drop from '../Drop';

import { useDetectClickOutside } from 'react-detect-click-outside';
function DividerElement() {
    const [show, setShow] = useState(false)

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    const [remove, setRemove] = useState(true)
    const [width, setWidth] = useState("50%")
    const [color, setColor] = useState("")
    const [height, setHeight] = useState("1px")
    const [justifyContent, setjustifyContent] = useState("")
    const [borderStyle, setBorderStyle] = useState("solid")

    const ref = useDetectClickOutside({ onTriggered: handleClose });
    return (
        <div ref={ref}>
            {remove ?
                <div className='border py-3' style={{ 'display': 'flex', 'justifyContent': justifyContent }} onClick={handleOpen}>
                    <div style={{ 'width': width, 'borderTopStyle': borderStyle, 'borderTopColor': color, 'borderWidth': height }}></div>
                </div> : <Drop></Drop>}

            {show ?
                <div className='sidenav'>
                    <div>
                        <div><Button show={true}>X</Button></div>
                    </div>
                    <div>
                        <Button variant="danger" onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}>Remove</Button>
                        <InputGroup className='my-2'>
                            <InputGroup.Text id="basic-addon1">Width</InputGroup.Text>
                            <FormControl type='number' onChange={(e) => {
                                setWidth(e.target.value + "%")
                            }}></FormControl>
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text id="basic-addon1">Style</InputGroup.Text>
                            <select className='form-control' onChange={(e) => setBorderStyle(e.target.value)}>
                                <option value="solid" selected>Solid</option>
                                <option value="dashed">Dashed</option>
                                <option value="dotted">Dotted</option>
                            </select>
                        </InputGroup>
                        <InputGroup className="my-2">
                            <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
                            <FormControl type='color' onChange={(e) => {
                                setColor(e.target.value)
                            }}></FormControl>
                        </InputGroup>
                        <InputGroup className="my-2">
                            <InputGroup.Text id="basic-addon1">Height</InputGroup.Text>
                            <FormControl type='number' onChange={(e) => {
                                setHeight(e.target.value + "px")
                            }}></FormControl>
                        </InputGroup>
                        <Row className="my-2">
                            <Col md={4}><Button onClick={(e) => setjustifyContent("flex-start")}>Left</Button></Col>
                            <Col md={4}><Button onClick={(e) => setjustifyContent("center")}>Center</Button></Col>
                            <Col md={4}><Button onClick={(e) => setjustifyContent("flex-end")}>Right</Button></Col>
                        </Row>
                    </div>
                </div> : <></>}
        </div>
    )
}

export default DividerElement;


