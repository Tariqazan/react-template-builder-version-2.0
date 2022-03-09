import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import Drop from '../Drop';

function HTMLElement() {
    const [show, setShow] = useState(false)

    const [remove, setRemove] = useState(true)
    const [html, setHtml] = useState("<strong>Hello World</strong>")

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            {remove ? <div dangerouslySetInnerHTML={{ __html: html }} onClick={handleOpen} onBlur={handleClose}></div> : <Drop></Drop>}
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
                            setHtml(e.target.value)
                        }}>{html}</textarea>
                    </div>
                </div> : <></>}
        </>
    )
}

export default HTMLElement