import React, { useState } from 'react';
import { Col, FormControl, Row, InputGroup, Button, Form } from 'react-bootstrap';
import Drop from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';

function DividerElement() {
    const [show, setShow] = useState(false)

    // responsive
    const [responsive, setResponsive] = useState(false)
    const [responsiveclassName, setResponsiveClassName] = useState("")

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    const [remove, setRemove] = useState(true)
    const [width, setWidth] = useState("50%")
    const [color, setColor] = useState("black")
    const [height, setHeight] = useState("1px")
    const [justifyContent, setjustifyContent] = useState("center")
    const [borderStyle, setBorderStyle] = useState("solid")

    const ref = useDetectClickOutside({ onTriggered: handleClose });

    const [style, setStyle] = useState([{
        justifyContent: justifyContent,
        width: width,
        borderTopStyle: borderStyle,
        borderTopColor: color,
        borderWidth: height
    }])

    const [undo, setUndo] = useState([])
    const [redo, setRedo] = useState([])

    const undoStyle = {
        justifyContent: justifyContent,
        width: width,
        borderTopStyle: borderStyle,
        borderTopColor: color,
        borderWidth: height
    }

    return (
        <div ref={ref} className={responsiveclassName}>
            {
                remove ?
                    <div className='py-3' style={{ 'display': 'flex', 'justifyContent': style[0].justifyContent }} onClick={handleOpen}>
                        <div style={{ 'width': style[0].width, 'borderTopStyle': style[0].borderTopStyle, 'borderTopColor': style[0].borderTopColor, 'borderWidth': style[0].borderWidth }}></div>
                    </div> : <Drop></Drop>
            }
            {show ?
                <div className='sidenav'>
                    <Button onClick={handleClose}>X</Button>
                    <div>
                        <Button variant="danger" onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}>Remove</Button>
                        <Button onClick={() => {
                            let undoArr = [...undo]
                            setStyle(undoArr)
                        }}>Undo</Button>
                        <Button onClick={() => {
                            let redoArr = [...redo]
                            setStyle(redoArr)
                        }}>Redo</Button>
                        <InputGroup className='my-2'>
                            <InputGroup.Text id="basic-addon1">Width</InputGroup.Text>
                            <FormControl type='range' onChange={(e) => {
                                setWidth(e.target.value + "%")
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].width = e.target.value + "%"
                                setStyle(arr)
                                setRedo(arr)
                            }}></FormControl>
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text id="basic-addon1">Style</InputGroup.Text>
                            <select className='form-control' onChange={(e) => {
                                setBorderStyle(e.target.value)
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].borderTopStyle = e.target.value
                                setStyle(arr)
                                setRedo(arr)
                            }}>
                                <option value="solid" selected>Solid</option>
                                <option value="dashed">Dashed</option>
                                <option value="dotted">Dotted</option>
                            </select>
                        </InputGroup>
                        <InputGroup className="my-2">
                            <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
                            <FormControl type='color' onChange={(e) => {
                                setColor(e.target.value)
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].borderTopColor = e.target.value
                                setStyle(arr)
                                setRedo(arr)
                            }}></FormControl>
                        </InputGroup>
                        <InputGroup className="my-2">
                            <InputGroup.Text id="basic-addon1">Height</InputGroup.Text>
                            <FormControl type='number' onChange={(e) => {
                                setHeight(e.target.value + "px")
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].borderWidth = e.target.value + "px"
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

export default DividerElement;


