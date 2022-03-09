import React, { useState, useRef } from 'react';

import ContentEditable from "react-contenteditable";

import { Row, Col, Button } from 'react-bootstrap';
import Drop from '../Drop';

import OutsideClick from '../OutsideClick';

function TextElement() {
    const [show, setShow] = useState(false);

    const boxRef = useRef(null)
    const outsideClick = OutsideClick(boxRef)

    const [remove, setRemove] = useState(true)

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    const [value, setValue] = useState('add content')

    return (
        <>
            {show ?
                <div className='sidenav'>
                    <div>
                        <div><Button onClick={handleClose}>X</Button></div>
                    </div>
                    <div>
                        <Button variant='close' onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}></Button>
                    </div>
                </div> : <></>}
            {remove ?
                (
                    <div ref={boxRef} class="text-div" onClick={handleOpen}>
                        <ContentEditable
                            html={value}
                            onChange={(e) => setValue(e.target.value)}
                            style={{ 'width': '100%' }}
                        />
                        {outsideClick ? <></> : <>
                            <div class='rich-editor'>
                                <EditButton cmd="undo" />
                                <input type="color" className='sanitize-btn' onChange={(e) => {
                                    document.execCommand("backColor", false, e.target.value)
                                }} />
                                <input type="color" className='sanitize-btn' onChange={(e) => {
                                    document.execCommand("foreColor", false, e.target.value)
                                }} />
                                <input type="file" className='sanitize-btn' accept='image/*' onChange={(e) => {
                                    const objectURL = URL.createObjectURL(e.target.files[0])
                                    document.execCommand("insertImage", false, objectURL)
                                }} />
                                <EditButton cmd="insertOrderedList" />
                                <EditButton cmd="insertUnorderedList" />
                                <EditButton cmd="strikeThrough" />
                                <EditButton cmd="underline" />
                                <EditButton cmd="redo" />
                                <EditButton cmd="insertLineBreak" />
                                <EditButton cmd="italic" />
                                <EditButton cmd="bold" />
                                <EditButton cmd="justifyRight" name="right" />
                                <EditButton cmd="justifyCenter" name="center" />
                                <EditButton cmd="justifyLeft" name="left" />
                                <select className='sanitize-btn' onChange={(e) => {
                                    document.execCommand("formatBlock", false, e.target.value)
                                }}>
                                    <option value="h1">h1</option>
                                    <option value="h2">h2</option>
                                    <option value="h3">h3</option>
                                    <option value="h4">h4</option>
                                    <option value="h5">h5</option>
                                    <option value="h6">h6</option>
                                </select>
                                <select className='sanitize-btn' onChange={(e) => {
                                    document.execCommand("fontName", false, e.target.value)
                                }}>
                                    <option value="Roboto">Roboto</option>
                                    <option value="Arial">Arial</option>
                                    <option value="Calibri">Calibri</option>
                                    <option value="Comic Sans MS">Comic Sans MS</option>
                                    <option value="Monospace">Monospace</option>
                                    <option value="Sans-Serif">Sans-Serif</option>
                                    <option value="arial black">Arial Black</option>
                                    <option value="book antiqua">Book Antiqua</option>
                                    <option value="courier new">Courier New</option>
                                    <option value="helvetica">Helvetica</option>
                                    <option value="impact">Impact</option>
                                </select>
                                <EditButton
                                    cmd="createLink"
                                    arg="https://www.google.com/"
                                    name="hyperlink"
                                />
                            </div>
                        </>}
                    </div>
                )
                :
                (
                    <>
                        <Drop></Drop>
                    </>
                )
            }
        </>
    )
}

export default TextElement;

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