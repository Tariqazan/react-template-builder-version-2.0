import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import Drop from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';

function MenuElement() {
    const [show, setShow] = useState(false);
    const [itemlist, setItemList] = useState([{
        'id': 0,
        'menu': 'page',
        'option': <>
            <input type='text' className='form-control' placeholder='Text' onChange={(e) =>
                document.getElementById(0).innerHTML = e.target.value
            } /><input type='text' className='form-control' placeholder='URL' onChange={(e) =>
                document.getElementById(0).href = e.target.value
            } />
        </>
    }])
    const [id, setID] = useState(1)
    const [background, setBackground] = useState('')
    const [textcolor, setTextColor] = useState('')
    const [remove, setRemove] = useState(true)
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const ref = useDetectClickOutside({ onTriggered: handleClose });

    const handleRemoveItem = (e) => {
        const item = e.target.getAttribute("item")
        setItemList(itemlist.filter(items => items.id != item));
    };

    // responsive
    const [responsive, setResponsive] = useState(false)
    const [responsiveclassName, setResponsiveClassName] = useState("")
    return (
        <div ref={ref} className={responsiveclassName}>
            {remove ? <ul className='d-flex' style={{ 'backgroundColor': background }} onClick={handleOpen}>{itemlist.map((i) => (
                <li key={i.id} className='px-3'><a href="/#" id={i.id} style={{ 'color': textcolor }}>{i.menu}</a></li>
            ))}</ul> : <Drop></Drop>}
            {show ?
                <div className="sidenav">
                    <Button onClick={handleClose}>X</Button>
                    <Button variant="danger" onClick={(e) => {
                        setShow(false)
                        setRemove(false)
                    }}>Remove</Button>
                    <label htmlFor="">Background</label>
                    <FormControl type='color' onChange={(e) => {
                        setBackground(e.target.value)
                    }}></FormControl>
                    <label htmlFor="">Text</label>
                    <FormControl type='color' onChange={(e) => {
                        setTextColor(e.target.value)
                    }}></FormControl>
                    <Button onClick={() => {
                        setID(id + 1)
                        setItemList((itemlist) => [...itemlist, {
                            'id': id + 1, 'menu': 'page', 'option': <>
                                <input type='text' className='form-control' placeholder='Text' onChange={(e) =>
                                    document.getElementById(id + 1).innerHTML = e.target.value
                                } /><input type='text' className='form-control' placeholder='URL' onChange={(e) =>
                                    document.getElementById(id + 1).href = e.target.value
                                } />
                            </>
                        }])
                    }}>Add Menu</Button>
                    {itemlist.map((i) => (
                        <div key={i.id}>
                            <button className='btn btn-outline-danger m-auto' item={i.id} onClick={handleRemoveItem}>
                                x
                            </button>
                            {i.option}
                        </div>
                    ))}
                    <Form.Check
                        type="switch"
                        label="Hide on MobileView"
                        defaultChecked={responsive}
                        onChange={() => {
                            if (responsive === false) {
                                setResponsive(true)
                                setResponsiveClassName("hide-mobile")
                            }
                            else {
                                setResponsive(false)
                                setResponsiveClassName("")
                            }
                        }}
                    />
                </div> : <></>}
        </div>
    )
}

export default MenuElement;