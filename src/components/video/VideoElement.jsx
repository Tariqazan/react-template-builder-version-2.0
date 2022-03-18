import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import DropElement from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes'

function VideoElement({ Drop, setDrop }) {
    const [remove, setRemove] = useState(true)
    const [show, setShow] = useState(false);


    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    const [video, setVideo] = useState("")
    const handleChange = (e) => {
        const objectURL = URL.createObjectURL(e.target.files[0])
        setVideo(objectURL);
    };


    const videostyle = {
        'width': '100%',
        'height': 'auto'
    }

    // responsive
    const [responsive, setResponsive] = useState(false)
    const [responsiveclassName, setResponsiveClassName] = useState("")

    const ref = useDetectClickOutside({ onTriggered: handleClose });

    return (
        <div ref={ref} className={responsiveclassName}>
            {remove ?
                (
                    <div className="item-border" onClick={handleOpen}>
                        <video src={video} style={videostyle} controls></video>
                    </div>
                )
                :
                (
                    <>
                        <DropElement></DropElement>
                    </>
                )
            }
            {show ?
                <div className='sidenav'>
                    <div>
                        <Button onClick={handleClose}>X</Button>
                    </div>
                    <div>
                        <Button variant="danger" onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}>Remove</Button>
                        <input type="file" className="form-control" onChange={handleChange} accept="video/*" />
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

export default VideoElement;