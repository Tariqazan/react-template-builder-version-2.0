import React, { useEffect, useState } from 'react';
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

    const [presentStyle, setPresentStyle] = useState([{
        justifyContent: justifyContent,
        width: width,
        borderTopStyle: borderStyle,
        borderTopColor: color,
        borderWidth: height
    }])

    const [undo, setUndo] = useState([{
        justifyContent: justifyContent,
        width: width,
        borderTopStyle: borderStyle,
        borderTopColor: color,
        borderWidth: height
    }])
    const [redo, setRedo] = useState([{
        justifyContent: justifyContent,
        width: width,
        borderTopStyle: borderStyle,
        borderTopColor: color,
        borderWidth: height
    }])


    const updateWidth = index => e => {
        let undoArr = [...undo]
        undoArr[0].width = width
        setWidth(e.target.value + "%")
        setUndo(undoArr)
        let arr = [...presentStyle]
        arr[index].width = e.target.value + "%"
        setRedo(arr)
        setPresentStyle(arr)
    }


    const updateColor = index => e => {
        let undoArr = [...undo]
        undoArr[0].borderTopColor = color
        setColor(e.target.value)
        setUndo(undoArr)
        let arr = [...presentStyle]
        arr[index].borderTopColor = e.target.value
        setRedo(arr)
        setPresentStyle(arr)
    }


    const updateHeight = index => e => {
        let undoArr = [...undo]
        undoArr[0].borderWidth = height
        setHeight(e.target.value + "px")
        setUndo(undoArr)
        let arr = [...presentStyle]
        arr[index].borderWidth = e.target.value + "px"
        setRedo(arr)
        setPresentStyle(arr)
    }

    const updateJustifyContent = index => e => {
        let undoArr = [...undo]
        undoArr[0].justifyContent = justifyContent
        setjustifyContent(index)
        setUndo(undoArr)
        let arr = [...presentStyle]
        arr[0].justifyContent = index
        setRedo(arr)
        setPresentStyle(arr)
    }

    const updateBorderStyle = index => e => {
        let undoArr = [...undo]
        undoArr[0].borderTopStyle = borderStyle
        setBorderStyle(e.target.value)
        setUndo(undoArr)
        let arr = [...presentStyle]
        arr[index].borderTopStyle = e.target.value
        setRedo(arr)
        setPresentStyle(arr)
    }

    const handleUndo = () => {
        let arr = [...undo]
        setPresentStyle(arr)
    }

    const handleRedo = () => {
        let arr = [...redo]
        setPresentStyle(arr)
    }

    return (
        <div ref={ref} className={responsiveclassName}>
            {
                remove ?
                    <div className='py-3' style={{ 'display': 'flex', 'justifyContent': presentStyle[0].justifyContent }} onClick={handleOpen}>
                        <div style={{ 'width': presentStyle[0].width, 'borderTopStyle': presentStyle[0].borderTopStyle, 'borderTopColor': presentStyle[0].borderTopColor, 'borderWidth': presentStyle[0].borderWidth }}></div>
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
                        <Button onClick={handleUndo}>Undo</Button>
                        <Button onClick={handleRedo}>Redo</Button>
                        <InputGroup className='my-2'>
                            <InputGroup.Text id="basic-addon1">Width</InputGroup.Text>
                            <FormControl type='range' onChange={updateWidth(0)}></FormControl>
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text id="basic-addon1">Style</InputGroup.Text>
                            <select className='form-control' onChange={updateBorderStyle(0)}>
                                <option value="solid" selected>Solid</option>
                                <option value="dashed">Dashed</option>
                                <option value="dotted">Dotted</option>
                            </select>
                        </InputGroup>
                        <InputGroup className="my-2">
                            <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
                            <FormControl type='color' onChange={updateColor(0)}></FormControl>
                        </InputGroup>
                        <InputGroup className="my-2">
                            <InputGroup.Text id="basic-addon1">Height</InputGroup.Text>
                            <FormControl type='number' onChange={updateHeight(0)}></FormControl>
                        </InputGroup>
                        <Row className="my-2">
                            <Col md={4}><Button onClick={updateJustifyContent("flex-start")}>Left</Button></Col>
                            <Col md={4}><Button onClick={updateJustifyContent("center")}>Center</Button></Col>
                            <Col md={4}><Button onClick={updateJustifyContent("flex-end")}>Right</Button></Col>
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


