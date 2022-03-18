import React, { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import Drop from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';

function HTMLElement() {
    const sortRef = useRef(null)
    const [show, setShow] = useState(false)

    const [remove, setRemove] = useState(true)
    const [html_value, setHtmlValue] = useState("<strong>Hello World</strong>")

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    const ref = useDetectClickOutside({ onTriggered: handleClose });

    // responsive
    const [responsive, setResponsive] = useState(false)
    const [responsiveclassName, setResponsiveClassName] = useState("")
    return (
        <div ref={ref} className={responsiveclassName}>
            {remove ? <div ref={sortRef} dangerouslySetInnerHTML={{ __html: html_value }} onClick={handleOpen} onBlur={handleClose}></div> : <Drop></Drop>}
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
                        <textarea className='form-control' cols="30" rows="10" onChange={(e) => {
                            setHtmlValue(e.target.value)
                        }}>{html_value}</textarea>
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
                </div> : <></>}
        </div>
    )
}

export default HTMLElement