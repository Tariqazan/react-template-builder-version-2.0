import React, { useState } from 'react';

import { Elements } from '../Elements';
import { ItemTypes } from '../ItemTypes';

import { useDrop } from 'react-dnd';

import { Row, Col } from 'react-bootstrap';


function Drop() {
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
        const itemID = Date.now()
        const elements = Elements.filter((element) => id === element.id)
        setDrop((Drop) => [...Drop, { itemID: itemID, item: elements[0].item }])
    }

    const action = isOver & canDrop;
    let color = 'black'
    let borderBottom = 'none'

    if (action) {
        color = 'red'
        borderBottom = '1px solid black'
    }

    return (
        <div ref={drop} style={{ color, borderBottom }}>
            {hasdropped ? <>
                {Drop.map((element, index) => (
                    <div key={index} style={{ 'width': '100%' }}>
                        {element.item}
                    </div>
                ))}
            </> :
                <Row>
                    <Col md={12}><p className="p-2 text-center">Drop Here</p></Col>
                </Row>}
        </div >
    )
}

export default Drop;