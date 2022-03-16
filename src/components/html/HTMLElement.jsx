import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import Drop from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes';

function HTMLElement({ id, text, index, moveCard }) {
    const sortRef = useRef(null)
    const [show, setShow] = useState(false)

    const [remove, setRemove] = useState(true)
    const [html_value, setHtmlValue] = useState("<strong>Hello World</strong>")

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    const ref = useDetectClickOutside({ onTriggered: handleClose });


    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(sortRef));
    return (
        <div ref={ref}>
            {remove ? <div ref={sortRef} dangerouslySetInnerHTML={{ __html: html_value }} onClick={handleOpen} onBlur={handleClose}></div> : <Drop></Drop>}
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
                        <textarea className='form-control' cols="30" rows="10" onChange={(e) => {
                            setHtmlValue(e.target.value)
                        }}>{html_value}</textarea>
                    </div>
                </div> : <></>}
        </div>
    )
}

export default HTMLElement