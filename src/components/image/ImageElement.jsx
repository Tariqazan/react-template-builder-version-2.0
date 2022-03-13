import React, { useState, useRef } from "react";

import { Row, Col, Image, Offcanvas, FormControl, Button } from 'react-bootstrap';

import ImageEditor from '@toast-ui/react-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';
import Drop from "../Drop";
import { useDetectClickOutside } from 'react-detect-click-outside';


function ImageElement() {
    const [show, setShow] = useState(false)

    const [remove, setRemove] = useState(true)
    const [width, setWidth] = useState("100%")
    const [effect, setEffect] = useState(false)
    const [justifyContent, setjustifyContent] = useState("")


    const [effectdrawer, setEffectDrawer] = useState(false);

    const handleeffectdrawerOpen = () => {
        setEffectDrawer(true)
        setEffect(true)
    };
    const handleeffectdrawerClose = () => setEffectDrawer(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    const [picture, setPicture] = useState("");
    const handlechangeImage = (e) => {
        const objectURL = URL.createObjectURL(e.target.files[0])
        setPicture(objectURL)
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
                        <Button variant="close" onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}></Button>
                        <Button variant="info" className="my-3" onClick={handleeffectdrawerOpen}>
                            Add Effect
                        </Button>
                        <div className="">
                            <label htmlFor="">Width</label>
                            <FormControl type="range" onChange={(e) => setWidth(e.target.value + "%")}></FormControl>
                        </div>
                        <FormControl type="file" onChange={handlechangeImage} accept="image/*" />
                        <Row className="my-2">
                            <Col md={4}><Button onClick={(e) => setjustifyContent("flex-start")}>Left</Button></Col>
                            <Col md={4}><Button onClick={(e) => setjustifyContent("center")}>Center</Button></Col>
                            <Col md={4}><Button onClick={(e) => setjustifyContent("flex-end")}>Right</Button></Col>
                        </Row>
                    </div>
                </div> : <></>}
            {effect ? (<>
                <Offcanvas show={effectdrawer} onHide={handleeffectdrawerClose} placement="top" scroll={true} backdrop={true} style={{ 'height': '100vh' }}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Upload Image</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ImageEditor
                            includeUI={{
                                loadImage: {
                                    path: { picture },
                                    name: "SampleImage"
                                },
                                uisize: {
                                    width: "1000px",
                                    height: "700px"
                                }
                            }}
                        ></ImageEditor>
                    </Offcanvas.Body>
                </Offcanvas>
            </>) : (<></>)}
            {remove ? (
                <>
                    <div className="item-border" style={{ 'display': 'flex', 'justifyContent': justifyContent }} onClick={handleOpen}>
                        <Image src={picture} alt="img" style={{ 'width': width }}></Image>
                    </div>
                </>
            ) :
                (
                    <>
                        <Drop></Drop>
                    </>
                )}
        </div>
    )
}

export default ImageElement;