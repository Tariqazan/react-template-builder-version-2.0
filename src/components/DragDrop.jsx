import React, { useRef, useState } from 'react';

import { Elements } from '../Elements';
import Drag from './Drag';

import { Row, Col, Button } from 'react-bootstrap';
import html2canvas from "html2canvas";
import ColumnElement from './columns/ColumnElement';


function DragDrop() {
    const [html, setHTML] = useState('')
    const [displayhtmlcode, setDisplayHTMLCode] = useState('none')
    const [mobileStyle, setMobileStyle] = useState('none')


    const mobileView = (e) => {
        const style = `<style>*{max-width:320px;word-wrap:break-word;}img{width:100%;}.action-div {display: none;}.nav-link{text-decoration:none;margin: 20px 10px;color:black}.timer-div {display: flex;justify-content: center;}.icon-div {justify-content: center;}</style>`
        const html = dropzone.current.outerHTML
        if (mobileStyle === "none") {
            setMobileStyle("inline-block")
        }
        else {
            setMobileStyle("none")
        }
        setHTML(style + html)
    }

    const htmlCode = (e) => {
        const style = `<style>*{max-width:320px;word-wrap:break-word;}img{width:100%;}.sidenav{display:none;}.action-div {display: none;}.nav-link{text-decoration:none;margin: 20px 10px;color:black}.timer-div {display: flex;justify-content: center;}.icon-div {justify-content: center;}</style>`
        const html = dropzone.current.outerHTML
        setHTML(style + html)
        if (displayhtmlcode === "none") {
            setDisplayHTMLCode("inline-block")
        }
        else {
            setDisplayHTMLCode("none")
        }
    }

    const ScreenShot = (e) => {
        html2canvas(document.querySelector("#dropzone")).then(canvas => {
            document.getElementById('screenshot').appendChild(canvas)
        });
    }

    const dropzone = useRef(null)
    return (
        <>
            <button className="btn btn-primary" onClick={ScreenShot}>Capture</button>
            {displayhtmlcode === "none" ? (<button className="btn btn-primary" onClick={htmlCode}>Get HTML</button>) : (<button className="btn btn-primary" onClick={htmlCode}>X</button>)}
            {mobileStyle === "none" ? (<button className="btn btn-primary" onClick={mobileView}>Mobile View</button>) : (<button className="btn btn-primary" onClick={mobileView}>X</button>)}
            <div id="screenshot"></div>
            <code style={{ display: displayhtmlcode }}>
                <textarea className="text-dark" cols={150} rows={10} value={html} id="html"></textarea>
            </code>
            <div className="artboard phone-1 artboard-demo" style={{ 'display': mobileStyle }}>
                <iframe srcDoc={html} frameBorder="5" title="mobileview" width={320} height={500}></iframe>
            </div>
            <Row>
                <Col md={8}>
                    <div ref={dropzone} id='dropzone'>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                        <ColumnElement></ColumnElement>
                    </div>
                </Col>
                <Col md={4}>
                    <Row>
                        {Elements.map((element) => {
                            return (
                                <Col md={4}>
                                    <Drag id={element.id} text={element.text}></Drag>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row >
        </>
    )
}

export default DragDrop;