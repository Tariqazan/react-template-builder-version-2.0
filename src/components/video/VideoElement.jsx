import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import DropElement from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';

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

    const ref = useDetectClickOutside({ onTriggered: handleClose });
    return (
        <div ref={ref}>
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
                        <DropElement></DropElement>
                    </>
                )
            }
        </div>
    )
}

export default VideoElement;