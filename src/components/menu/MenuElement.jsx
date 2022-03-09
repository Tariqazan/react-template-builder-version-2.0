import React, { useState, useRef } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Drop from '../Drop';

function MenuElement() {
    const [show, setShow] = useState(false);

    const [id, setID] = useState(1)
    const [menu, setMenu] = useState(false);
    const [menuitem, setMenuItem] = useState([]);
    const [menuoption, setMenuOption] = useState([]);

    const [remove, setRemove] = useState(true)
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
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
                        {menuoption}
                        <Button variant='secondary' onClick={(e) => {
                            setID(id + 1)
                            setMenu(true)
                            setMenuItem(menuitem.concat(<li class="menu-link" id={'menuitem' + id}><a id={'menulink' + id} href="#">Page</a></li>))
                            setMenuOption(menuoption.concat(
                                <div id={'menuoption' + id}>
                                    <Button className={id} variant='danger' style={{ 'float': 'right' }} onClick={(e) => {
                                        document.getElementById("menuitem" + e.target.classList[0]).remove()
                                        document.getElementById("menuoption" + e.target.classList[0]).remove()
                                    }}>X</Button>
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
                            ))
                        }}>Add New Item</Button>
                    </div>
                </div> : <></>}

            {remove ? <>{menu ? <ul onClick={handleOpen}>{menuitem}</ul> : <div onClick={handleOpen}>Add New Item</div>}</> : <Drop></Drop>}
        </>
    )
}

export default MenuElement