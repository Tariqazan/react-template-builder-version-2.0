import React, { useState } from 'react';

import { Elements } from '../Elements';
import { ItemTypes } from '../ItemTypes';

import { useDrop } from 'react-dnd';

import { Row, Col } from 'react-bootstrap';

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


function Drop() {
    const [show, setShow] = useState(false)
    const [style, setStyle] = useState(null)

    const handleClose = () => setShow(false)
    const [Drop, setDrop] = useState([])
    const [hasdropped, setHasDropped] = useState(false)

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
        if (elements[0].text === "Button") {
            setDrop((Drop) => [...Drop, { item: <ButtonElement></ButtonElement> }])
        }
        else if (elements[0].text === "Columns") {
            setDrop((Drop) => [...Drop, { item: <ColumnElement></ColumnElement> }])
        }
        else if (elements[0].text === "Carousel") {
            setDrop((Drop) => [...Drop, { item: <CarouselElement></CarouselElement> }])
        }
        else if (elements[0].text === "Divider") {
            setDrop((Drop) => [...Drop, { item: <DividerElement></DividerElement> }])
        }
        else if (elements[0].text === "Heading") {
            setDrop((Drop) => [...Drop, { item: <HeadingElement></HeadingElement> }])
        }
        else if (elements[0].text === "HTML") {
            setDrop((Drop) => [...Drop, { item: <HTMLElement></HTMLElement> }])
        }
        else if (elements[0].text === "Image") {
            setDrop((Drop) => [...Drop, { item: <ImageElement></ImageElement> }])
        }
        else if (elements[0].text === "Menu") {
            setDrop((Drop) => [...Drop, { item: <MenuElement></MenuElement> }])
        }
        else if (elements[0].text === "Social") {
            setDrop((Drop) => [...Drop, { item: <SocialElement></SocialElement> }])
        }
        else if (elements[0].text === "Text") {
            setDrop((Drop) => [...Drop, { item: <TextElement></TextElement> }])
        }
        else if (elements[0].text === "Timer") {
            setDrop((Drop) => [...Drop, { item: <TimerElement></TimerElement> }])
        }
        else if (elements[0].text === "Video") {
            setDrop((Drop) => [...Drop, { item: <VideoElement></VideoElement> }])
        }
    }

    const action = isOver & canDrop;
    let color = 'black'

    if (action) {
        color = 'red'
    }

    return (
        <div ref={drop} style={{ color }}>
            <Row>
                {hasdropped ? <>
                    {Drop.map((element, index) => (
                        <>{element.item}</>
                    ))}
                </> :
                    <Row>
                        <Col md={12}><p className="p-2 text-center">Drop Here</p></Col>
                    </Row>}
            </Row>
        </div >
    )
}

export default Drop;