import React, { useState } from 'react';

import { Elements } from '../Elements';
import Drag from './Drag';
import { ItemTypes } from '../ItemTypes';

import { useDrop } from 'react-dnd';

import { Row, Col } from 'react-bootstrap';
import html2canvas from "html2canvas";

import ColumnElement from './columns/ColumnElement';
import ButtonElement from './button/ButtonElement';
import CarouselElement from './carousel/CarouselElement';
import DividerElement from './divider/DividerElement';
import HeadingElement from './heading/HeadingElement';
import HTMLElement from './html/HTMLElement';
import ImageElement from './image/ImageElement';
import VideoElement from './video/VideoElement';
import TextElement from './text/TextElement';
import MenuElement from './menu/MenuElement';
import TimerElement from './timer/TimerElement';
import SocialElement from './social/SocialElement';

function DragDrop() {
    const [Drop, setDrop] = useState([])
    const [hasdropped, setHasDropped] = useState(false)

    const [html, setHTML] = useState('')
    const [displayhtmlcode, setDisplayHTMLCode] = useState('none')
    const [mobileStyle, setMobileStyle] = useState('none')

    const [{ isOver, canDrop, isOverCurrent }, drop] = useDrop(() => ({
        accept: ItemTypes.DraggedElement,
        drop(item, monitor) {
            const didDrop = monitor.didDrop()
            if (didDrop) {
                return
            }
            setHasDropped(true)
            addElementDropped(item.id)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
            canDrop: monitor.canDrop()
        })
    }))

    const addElementDropped = (id) => {
        const elements = Elements.filter((element) => id === element.id)
        setDrop((Drop) => [...Drop, elements[0]])
    }

    const action = isOver & canDrop;

    let color = 'black'

    if (action) {
        color = 'red'
    }

    const mobileView = (e) => {
        const style = `<style>*{max-width:320px;word-wrap:break-word;}img{width:100%;}.action-div {display: none;}.nav-link{text-decoration:none;margin: 20px 10px;color:black}.timer-div {display: flex;justify-content: center;}.icon-div {justify-content: center;}</style>`
        const html = document.getElementById("dropzone").innerHTML
        if (mobileStyle === "none") {
            setMobileStyle("inline-block")
        }
        else {
            setMobileStyle("none")
        }
        setHTML(style + html)
    }
    const htmlCode = (e) => {
        const style = `<style>*{max-width:320px;word-wrap:break-word;}img{width:100%;}.action-div {display: none;}.nav-link{text-decoration:none;margin: 20px 10px;color:black}.timer-div {display: flex;justify-content: center;}.icon-div {justify-content: center;}</style>`
        const html = document.getElementById("dropzone").innerHTML
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
                    <div ref={drop} id="dropzone" style={{ color }}>
                        {hasdropped ? <>
                            {Drop.map((element) => {
                                if (element.text === "Columns") {
                                    return (
                                        <ColumnElement></ColumnElement>
                                    )
                                }
                                else if (element.text === "Button") {
                                    return (
                                        <ButtonElement></ButtonElement>
                                    )
                                }
                                else if (element.text === "Carousel") {
                                    return (
                                        <CarouselElement></CarouselElement>
                                    )
                                }
                                else if (element.text === "Divider") {
                                    return (
                                        <DividerElement></DividerElement>
                                    )
                                }
                                else if (element.text === "Heading") {
                                    return (
                                        <HeadingElement></HeadingElement>
                                    )
                                }
                                else if (element.text === "HTML") {
                                    return (
                                        <HTMLElement></HTMLElement>
                                    )
                                }
                                else if (element.text === "Image") {
                                    return (
                                        <ImageElement></ImageElement>
                                    )
                                }
                                else if (element.text === "Text") {
                                    return (
                                        <TextElement></TextElement>
                                    )
                                }
                                else if (element.text === "Timer") {
                                    return (
                                        <TimerElement></TimerElement>
                                    )
                                }
                                else if (element.text === "Video") {
                                    return (
                                        <VideoElement></VideoElement>
                                    )
                                }
                                else if (element.text === "Social") {
                                    return (
                                        <SocialElement></SocialElement>
                                    )
                                }
                                else if (element.text === "Menu") {
                                    return (
                                        <MenuElement></MenuElement>
                                    )
                                }
                            })}
                        </> :
                            <Row>
                                <Col md={12}><p className="p-2 text-center">Drop Here</p></Col>
                            </Row>}
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