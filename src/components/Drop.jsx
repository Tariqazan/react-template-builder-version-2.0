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
                {Drop.map((element) => (
                    <>
                        {
                            element.id === 1 ?
                                <ColumnElement /> : <></>
                        }
                        {
                            element.id === 2 ?
                                <ButtonElement /> : <></>
                        }
                        {
                            element.id === 3 ?
                                <CarouselElement /> : <></>
                        }
                        {
                            element.id === 4 ?
                                <DividerElement /> : <></>
                        }
                        {
                            element.id === 5 ?
                                <HeadingElement /> : <></>
                        }
                        {
                            element.id === 6 ?
                                <HTMLElement /> : <></>
                        }
                        {
                            element.id === 7 ?
                                <ImageElement /> : <></>
                        }
                        {
                            element.id === 8 ?
                                <MenuElement /> : <></>
                        }
                        {
                            element.id === 9 ?
                                <SocialElement /> : <></>
                        }
                        {
                            element.id === 10 ?
                                <TextElement /> : <></>
                        }
                        {
                            element.id === 11 ?
                                <TimerElement /> : <></>
                        }
                        {
                            element.id === 12 ?
                                <VideoElement /> : <></>
                        }
                    </>
                ))}
            </> :
                <Row>
                    <Col md={12}><p className="p-2 text-center">Drop Here</p></Col>
                </Row>}
        </div>
    )
}

export default Drop;