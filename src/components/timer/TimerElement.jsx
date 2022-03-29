import React, { useState } from 'react';
import { Button, Form, Col, FormControl, Row } from 'react-bootstrap';
import Drop from '../Drop';
import CountdownTimer from './CountDownTimer';

import { useDetectClickOutside } from 'react-detect-click-outside';
function TimerElement() {
    const [show, setShow] = useState(false)


    const [remove, setRemove] = useState(true)

    const [background, setBackground] = useState('')
    const [color, setColor] = useState('')

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    const NOW_IN_MS = new Date().getTime();

    const [endtime, setEndTime] = useState(null)

    const [diffDate, setdiffDate] = useState(null)
    const ref = useDetectClickOutside({ onTriggered: handleClose });

    // responsive
    const [responsive, setResponsive] = useState(false)
    const [responsiveclassName, setResponsiveClassName] = useState("")

    const [style, setStyle] = useState([{
        background: background,
        color: color,
    }])

    const [undo, setUndo] = useState([])
    const [redo, setRedo] = useState([])

    const undoStyle = {
        background: background,
        color: color,
    }


    return (
        <div ref={ref} className={responsiveclassName}>
            {remove ? <div style={{ 'backgroundColor': background, 'color': color }} onClick={handleOpen}><CountdownTimer targetDate={diffDate}></CountdownTimer></div> : <Drop></Drop>}
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
                        <label htmlFor="">End Time</label>
                        <FormControl value={endtime} readOnly></FormControl>
                        <FormControl type="date" onChange={(e) => {
                            let date = new Date(e.target.value)
                            setEndTime(date)
                            let day = date.getDate()
                            let diff_days = parseInt(day) - parseInt(new Date().getDate())
                            setdiffDate(NOW_IN_MS + diff_days * 24 * 60 * 60 * 1000)
                        }}></FormControl>
                        <Row>
                            <Col md={6}>
                                <label htmlFor="">Background</label>
                                <FormControl type='color' value={background} onChange={(e) => {
                                    setBackground(e.target.value)
                                    setUndo([undoStyle])
                                    let arr = [...style]
                                    arr[0].background = e.target.value
                                    setStyle(arr)
                                    setRedo(arr)
                                }}></FormControl>
                            </Col>
                            <Col md={6}>
                                <label htmlFor="">Color</label>
                                <FormControl type="color" value={color} onChange={(e) => {
                                    setColor(e.target.value)
                                    setUndo([undoStyle])
                                    let arr = [...style]
                                    arr[0].color = e.target.value
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
                    </div>
                </div> : <></>}</div>
    )
}

export default TimerElement;


