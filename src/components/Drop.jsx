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
        setDrop((Drop) => [...Drop, elements[0]])
    }

    const action = isOver & canDrop;
    let color = 'black'

    if (action) {
        color = 'red'
    }

    return (
        <div ref={drop} style={{ color }}>
            {hasdropped ? <>
                {Drop.map((element) => {
                    if (element.text === "Columns") {
                        return (
                            <ColumnElement />
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
    )
}

export default Drop;