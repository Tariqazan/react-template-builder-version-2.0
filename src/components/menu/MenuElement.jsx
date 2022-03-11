import React, { useState, useRef } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Drop from '../Drop';
import { useDetectClickOutside } from 'react-detect-click-outside';

function MenuElement() {
    const [show, setShow] = useState(false);

    const [id, setID] = useState(1)
    const [menu, setMenu] = useState(false);
    const [menuitem, setMenuItem] = useState([]);
    const [menuoption, setMenuOption] = useState([]);

    const [remove, setRemove] = useState(true)
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const ref = useDetectClickOutside({ onTriggered: handleClose });
    return (
        <div ref={ref}>
            {show ?
                <div className='sidenav'>
                    <Button onClick={handleClose}>X</Button>
                    <div>
                        <Button variant="close" onClick={(e) => {
                            setShow(false)
                            setRemove(false)
                        }}></Button>
                        {menuoption}
                        <Button variant='secondary' onClick={(e) => {
                            setID(id + 1)
                            setMenu(true)
                            setMenuItem(menuitem.concat(<li className="menu-link" id={'menuitem' + id}><a id={'menulink' + id} href="#">Page</a></li>))
                            setMenuOption(menuoption.concat(
                                <>
                                    <Button className={id} id={id} variant='danger' style={{ 'float': 'right' }} onClick={(e) => {
                                        document.getElementById(e.target.id).style.display="none"
                                        document.getElementById("menuitem" + e.target.classList[0]).remove()
                                        document.getElementById("menuoption" + e.target.classList[0]).remove()
                                    }}>X</Button>
                                    <div id={'menuoption' + id}>
                                        <InputGroup className="my-2">
                                            <InputGroup.Text id="basic-addon1">Text</InputGroup.Text>
                                            <FormControl type='text' className={id} onChange={(e) => {
                                                document.getElementById("menulink" + e.target.classList[0]).innerHTML = e.target.value
                                            }}></FormControl>
                                        </InputGroup>
                                        <InputGroup className="my-2">
                                            <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
                                            <FormControl type='text' className={id} onChange={(e) => {
                                                document.getElementById("menulink" + e.target.classList[0]).href = e.target.value
                                            }}></FormControl>
                                        </InputGroup>
                                        <hr />
                                    </div>
                                </>
                            ))
                        }}>Add New Item</Button>
                    </div>
                </div> : <></>}

            {remove ? <>{menu ? <ul onClick={handleOpen}>{menuitem}</ul> : <div onClick={handleOpen}>Add New Item</div>}</> : <Drop></Drop>}
        </div>
    )
}

export default MenuElement