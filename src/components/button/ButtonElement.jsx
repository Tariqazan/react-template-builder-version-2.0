import React, { useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Col, FormControl, Row, InputGroup, Button, Form } from 'react-bootstrap';
import Drop from '../Drop';

import OutsideClick from '../OutsideClick';

import { useDetectClickOutside } from 'react-detect-click-outside';
import { ItemTypes } from '../../ItemTypes';

function ButtonElement({ id, text, index, moveCard }) {
    const sortRef = useRef(null)
    const boxRef = useRef(null)
    const boxOutsideClick = OutsideClick(boxRef)

    const [show, setShow] = useState(false)
    const [remove, setRemove] = useState(true)
    const [style, setStyle] = useState(null)

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    const [background, setBackground] = useState(null)
    const [textcolor, setTextColor] = useState(null)
    const [href, setHref] = useState("/#")
    const [blank, setBlank] = useState("")

    const [padding, setPadding] = useState(0)
    const [paddingTop, setPaddingTop] = useState(0)
    const [paddingBottom, setPaddingBottom] = useState(0)
    const [paddingLeft, setPaddingLeft] = useState(0)
    const [paddingRight, setPaddingRight] = useState(0)

    const [border, setBorder] = useState(0)
    const [borderTop, setBorderTop] = useState(0)
    const [borderBottom, setBorderBottom] = useState(0)
    const [borderLeft, setBorderLeft] = useState(0)
    const [borderRight, setBorderRight] = useState(0)

    const [borderColor, setBorderColor] = useState(0)
    const [borderTopColor, setBorderTopColor] = useState(0)
    const [borderBottomColor, setBorderBottomColor] = useState(0)
    const [borderLeftColor, setBorderLeftColor] = useState(0)
    const [borderRightColor, setBorderRightColor] = useState(0)

    const [borderstyle, setBorderStyle] = useState("solid")

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
            {remove ?
                <div ref={sortRef} style={{
                    opacity,
                    'backgroundColor': background,
                    'padding': padding,
                    'paddingTop': paddingTop,
                    'paddingBottom': paddingBottom,
                    'paddingLeft': paddingLeft,
                    'paddingRight': paddingRight,
                }} onClick={handleOpen} data-handler-id={handlerId}>
                    <a href={href} target={blank} style={{
                        'borderWidth': border,
                        'borderTopWidth': borderTop,
                        'borderBottomWidth': borderBottom,
                        'borderLeftWidth': borderLeft,
                        'borderRightWidth': borderRight,
                        'borderColor': borderColor,
                        'borderTopColor': borderTopColor,
                        'borderBottomColor': borderBottomColor,
                        'borderLeftColor': borderLeftColor,
                        'borderRightColor': borderRightColor,
                        'borderStyle': borderstyle,
                    }}><span ref={boxRef} contentEditable="true" style={{ 'backgroundColor': 'transparent', 'color': textcolor, }}>button text{boxOutsideClick ? <></> : <>
                        <div class='rich-editor'>
                            <EditButton cmd="strikeThrough" />
                            <EditButton cmd="underline" />
                            <EditButton cmd="italic" />
                            <EditButton cmd="bold" />
                            <EditButton cmd="justifyRight" name="right" />
                            <EditButton cmd="justifyCenter" name="center" />
                            <EditButton cmd="justifyLeft" name="left" />
                            <select className='sanitize-btn' onChange={(e) => {
                                document.execCommand("fontName", false, e.target.value)
                            }}>
                                <option value="Roboto">Roboto</option>
                                <option value="Arial">Arial</option>
                                <option value="Hubballi">Hubballi</option>
                            </select>
                        </div>
                    </>}</span></a>
                </div> : <Drop></Drop>}
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
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
                            <FormControl type='text' placeholder='url' onChange={(e) => {
                                setHref(e.target.value)
                            }}></FormControl>
                        </InputGroup>

                        <select className='form-control' onChange={(e) => {
                            if (e.target.value === '1') {
                                setBlank("_blank")
                            }
                            else {
                                setBlank(null)
                            }
                        }}>
                            <option selected>choose an option</option>
                            <option value="1">new tab</option>
                            <option value="2">same tab</option>
                        </select>
                        <Row className='my-2'>
                            <Col md={6}>
                                <label htmlFor="">Background</label>
                                <input type="color" className='form-control' value={background} onChange={(e) => {
                                    setBackground(e.target.value)
                                }} />
                            </Col>
                            <Col md={6}>
                                <label htmlFor="">Text Color</label>
                                <input type="color" className='form-control' value={textcolor} onChange={(e) => {
                                    setTextColor(e.target.value)
                                }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Label>Padding</Form.Label>
                                <FormControl type="number" onChange={(e) => setPadding(e.target.value + "px")}></FormControl>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Padding Top</Form.Label>
                                <FormControl type="number" onChange={(e) => setPaddingTop(e.target.value + "px")}></FormControl>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Padding Bottom</Form.Label>
                                <FormControl type="number" onChange={(e) => setPaddingBottom(e.target.value + "px")}></FormControl>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Padding Left</Form.Label>
                                <FormControl type="number" onChange={(e) => setPaddingLeft(e.target.value + "px")}></FormControl>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Padding Right</Form.Label>
                                <FormControl type="number" onChange={(e) => setPaddingRight(e.target.value + "px")}></FormControl>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <label htmlFor="">Border Style</label>
                            <select className='form-control' onChange={(e) => setBorderStyle(e.target.value)}>
                                <option value="solid" selected>Solid</option>
                                <option value="dashed">Dashed</option>
                                <option value="dotted">Dotted</option>
                            </select>
                            <Col md={12}>
                                <Form.Label>Border</Form.Label>
                                <FormControl type='number' onChange={(e) => setBorder(e.target.value + "px")}></FormControl>
                                <FormControl type='color' onChange={(e) => setBorderColor(e.target.value)}></FormControl>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Border Top</Form.Label>
                                <FormControl type='number' onChange={(e) => setBorderTop(e.target.value + "px")}></FormControl>
                                <FormControl type='color' onChange={(e) => setBorderTopColor(e.target.value)}></FormControl>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Border Bottom</Form.Label>
                                <FormControl type='number' onChange={(e) => setBorderBottom(e.target.value + "px")}></FormControl>
                                <FormControl type='color' onChange={(e) => setBorderBottomColor(e.target.value)}></FormControl>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Border Left</Form.Label>
                                <FormControl type='number' onChange={(e) => setBorderLeft(e.target.value + "px")}></FormControl>
                                <FormControl type='color' onChange={(e) => setBorderLeftColor(e.target.value)}></FormControl>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Border Right</Form.Label>
                                <FormControl type='number' onChange={(e) => setBorderRight(e.target.value + "px")}></FormControl>
                                <FormControl type='color' onChange={(e) => setBorderRightColor(e.target.value)}></FormControl>
                            </Col>
                        </Row>
                    </div>
                </div> : <></>}
        </div>
    )
}

export default ButtonElement;



function EditButton(props) {
    return (
        <button className='sanitize-btn'
            key={props.cmd}
            onMouseDown={evt => {
                evt.preventDefault(); // Avoids loosing focus from the editable area
                document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
            }}
        >
            {props.name || props.cmd}
        </button>
    );
}