import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import Drop from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';

function HTMLElement() {
    const [show, setShow] = useState(false)

    const [remove, setRemove] = useState(true)
    const [html_value, setHtmlValue] = useState("<strong>Hello World</strong>")

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    const ref = useDetectClickOutside({ onTriggered: handleClose });
    return (
        <div ref={ref}>
            {remove ? <div dangerouslySetInnerHTML={{ __html: html_value }} onClick={handleOpen} onBlur={handleClose}></div> : <Drop></Drop>}
            {show ?
                <div className='sidenav'>
                    <div>
                        <div><Button onClick={handleClose}>X</Button></div>
                    </div>
                    <div>
                        <Button variant="close" onClick={() => {
                            setRemove(false)
                            setShow(false)
                        }}></Button>
                        <textarea className='form-control' cols="30" rows="10" onChange={(e) => {
                            setHtmlValue(e.target.value)
                        }}>{html_value}</textarea>
                    </div>
                </div> : <></>}
        </div>
    )
}

export default HTMLElement