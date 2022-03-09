import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, FormControl, Row } from 'react-bootstrap';
import Drop from '../Drop';
import CountdownTimer from './CountDownTimer';

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

    return (
        <>
            {remove ? <div style={{ 'backgroundColor': background, 'color': color }} onClick={handleOpen}><CountdownTimer targetDate={diffDate}></CountdownTimer></div> : <Drop></Drop>}
            {show ?
                <div className='sidenav'>
                    <div>
                        <div><Button onClick={handleClose}>X</Button></div>
                    </div>
                    <div>
                        <Button variant='close' onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}></Button>
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
                                <FormControl type='color' value={background} onChange={(e) => setBackground(e.target.value)}></FormControl>
                            </Col>
                            <Col md={6}>
                                <label htmlFor="">Color</label>
                                <FormControl type="color" value={color} onChange={(e) => setColor(e.target.value)}></FormControl>
                            </Col>
                        </Row>
                    </div>
                </div> : <></>}</>
    )
}

export default TimerElement;

