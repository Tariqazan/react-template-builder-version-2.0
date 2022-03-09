import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

function Drag({ id, text }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.DraggedElement,
        item: { id: id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    let opacity = isDragging ? 0.5 : 1;

    return (
        <div ref={drag} className='text-center border py-3' style={{ opacity }}>{text}</div>
    )
}

export default Drag;