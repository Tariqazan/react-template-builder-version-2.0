import React, { useState } from 'react';
import { Row, Col, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import Drop from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';


function HeadingElement() {
    const [remove, setRemove] = useState(true)

    const [show, setShow] = useState(false)
    const [justifyContent, setjustifyContent] = useState("flex-start")
    const [color, setColor] = useState("black")
    const [fontsize, setFontSize] = useState("1.5rem")


    // responsive
    const [responsive, setResponsive] = useState(false)
    const [responsiveclassName, setResponsiveClassName] = useState("")

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)
    const ref = useDetectClickOutside({ onTriggered: handleClose });

    const [style, setStyle] = useState([{
        justifyContent: justifyContent,
        color: color,
        fontsize: fontsize
    }])

    const [undo, setUndo] = useState([])
    const [redo, setRedo] = useState([])

    const undoStyle = {
        justifyContent: justifyContent,
        color: color,
        fontsize: fontsize
    }


    return (
        <div ref={ref} className={responsiveclassName}>
            {remove ?
                <div className='d-flex' style={{ 'justifyContent': style[0].justifyContent, 'color': style[0].color }} onClick={handleOpen}>
                    <p className='text-break' contentEditable="true" suppressContentEditableWarning style={{ 'fontSize': style[0].fontsize, }}>heading</p>
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
                        <Button onClick={() => {
                            let undoArr = [...undo]
                            setStyle(undoArr)
                        }}>Undo</Button>
                        <Button onClick={() => {
                            let redoArr = [...redo]
                            setStyle(redoArr)
                        }}>Redo</Button>
                        <Row className='my-2'>
                            <Col md={3}><Button onClick={() => {
                                setFontSize("2.5rem")
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].fontsize = "2.5rem"
                                setStyle(arr)
                                setRedo(arr)
                                console.log(undoStyle)
                            }}>H1</Button></Col>
                            <Col md={3}><Button onClick={() => {
                                setFontSize("2rem")
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].fontsize = "2rem"
                                setStyle(arr)
                                setRedo(arr)
                                console.log(undoStyle)
                            }}>H2</Button></Col>
                            <Col md={3}><Button onClick={() => {
                                setFontSize("1.75rem")
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].fontsize = "1.75rem"
                                setStyle(arr)
                                setRedo(arr)
                            }}>H3</Button></Col>
                            <Col md={3}><Button onClick={() => {
                                setFontSize("1.5rem")
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].fontsize = "1.5rem"
                                setStyle(arr)
                                setRedo(arr)
                            }}>H4</Button></Col>
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
                                    setUndo([undoStyle])
                                    let arr = [...style]
                                    arr[0].fontsize = e.target.value + "px"
                                    setStyle(arr)
                                    setRedo(arr)
                                }}></FormControl>
                            </InputGroup>
                        </Row>
                        <Row className="my-2">
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
                                <FormControl type='color' onChange={(e) => {
                                    setColor(e.target.value)
                                    setUndo([undoStyle])
                                    let arr = [...style]
                                    arr[0].color = e.target.value
                                    setStyle(arr)
                                    setRedo(arr)
                                }}></FormControl>
                            </InputGroup>
                        </Row>
                        <Row className="my-2">
                            <Col md={4}><Button onClick={(e) => {
                                setjustifyContent("flex-start")
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].justifyContent = "flex-start"
                                setStyle(arr)
                                setRedo(arr)
                            }}>Left</Button></Col>
                            <Col md={4}><Button onClick={(e) => {
                                setjustifyContent("center")
                                setUndo([undoStyle])
                                let arr = [...style]
                                arr[0].justifyContent = "center"
                                setStyle(arr)
                                setRedo(arr)
                            }}>Center</Button></Col>
                            <Col md={4}><Button onClick={(e) => {
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

export default HeadingElement;

