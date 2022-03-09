import React, { useState,useRef } from "react";
import { Offcanvas, Button } from 'react-bootstrap';
import Drop from '../Drop';

function VideoElement() {
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


    return (
        <>
            {show ?
                <div className='sidenav'>
                    <div>
                        <div><Button onClick={handleClose}>X</Button></div>
                    </div>
                    <div>
                        <Button variant="close" onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}></Button>
                        <input type="file" className="form-control" onChange={handleChange} accept="video/*" />
                    </div>
                </div> : <></>}
            {remove ?
                (
                    <>
                        <div className="item-border" onClick={handleOpen}>
                            <video src={video} style={videostyle} controls></video>
                        </div>
                    </>
                )
                :
                (
                    <>
                        <Drop></Drop>
                    </>
                )
            }
        </>
    )
}

export default VideoElement;