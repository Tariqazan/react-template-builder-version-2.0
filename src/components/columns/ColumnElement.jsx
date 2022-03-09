import React, { useState } from 'react';

import { Row, Col, Button, Table, Tabs, Tab, FormControl, FormSelect } from 'react-bootstrap';

import Drop from '../Drop';

function ColumnElement() {
    const [show, setShow] = useState(true)
    const [columnStyle, setColumnStyle] = useState("column12")

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [background1, setBackground1] = useState("transparent")
    const [background2, setBackground2] = useState("transparent")
    const [background3, setBackground3] = useState("transparent")
    const [background4, setBackground4] = useState("transparent")

    const [padding1, setPadding1] = useState("0")
    const [paddingTop1, setPaddingTop1] = useState("0")
    const [paddingBottom1, setPaddingBottom1] = useState("0")
    const [paddingLeft1, setPaddingLeft1] = useState("0")
    const [paddingRight1, setPaddingRight1] = useState("0")

    const [padding2, setPadding2] = useState("0")
    const [paddingTop2, setPaddingTop2] = useState("0")
    const [paddingBottom2, setPaddingBottom2] = useState("0")
    const [paddingLeft2, setPaddingLeft2] = useState("0")
    const [paddingRight2, setPaddingRight2] = useState("0")

    const [padding3, setPadding3] = useState("0")
    const [paddingTop3, setPaddingTop3] = useState("0")
    const [paddingBottom3, setPaddingBottom3] = useState("0")
    const [paddingLeft3, setPaddingLeft3] = useState("0")
    const [paddingRight3, setPaddingRight3] = useState("0")

    const [padding4, setPadding4] = useState("0")
    const [paddingTop4, setPaddingTop4] = useState("0")
    const [paddingBottom4, setPaddingBottom4] = useState("0")
    const [paddingLeft4, setPaddingLeft4] = useState("0")
    const [paddingRight4, setPaddingRight4] = useState("0")

    const [borderstyle1, setBorderStyle1] = useState("solid")
    const [borderstyle2, setBorderStyle2] = useState("solid")
    const [borderstyle3, setBorderStyle3] = useState("solid")
    const [borderstyle4, setBorderStyle4] = useState("solid")

    const [borderstyletop1, setBorderStyleTop1] = useState("solid")
    const [borderstylebottom1, setBorderStyleBottom1] = useState("solid")
    const [borderstyleleft1, setBorderStyleLeft1] = useState("solid")
    const [borderstyleright1, setBorderStyleRight1] = useState("solid")

    const [borderstyletop2, setBorderStyleTop2] = useState("solid")
    const [borderstylebottom2, setBorderStyleBottom2] = useState("solid")
    const [borderstyleleft2, setBorderStyleLeft2] = useState("solid")
    const [borderstyleright2, setBorderStyleRight2] = useState("solid")

    const [borderstyletop3, setBorderStyleTop3] = useState("solid")
    const [borderstylebottom3, setBorderStyleBottom3] = useState("solid")
    const [borderstyleleft3, setBorderStyleLeft3] = useState("solid")
    const [borderstyleright3, setBorderStyleRight3] = useState("solid")

    const [borderstyletop4, setBorderStyleTop4] = useState("solid")
    const [borderstylebottom4, setBorderStyleBottom4] = useState("solid")
    const [borderstyleleft4, setBorderStyleLeft4] = useState("solid")
    const [borderstyleright4, setBorderStyleRight4] = useState("solid")

    const [borderwidth1, setBorderWidth1] = useState("0")
    const [borderwidth2, setBorderWidth2] = useState("0")
    const [borderwidth3, setBorderWidth3] = useState("0")
    const [borderwidth4, setBorderWidth4] = useState("0")

    const [bordertopwidth1, setBorderTopWidth1] = useState("0")
    const [borderbottomwidth1, setBorderBottomWidth1] = useState("0")
    const [borderleftwidth1, setBorderLeftWidth1] = useState("0")
    const [borderrightwidth1, setBorderRightWidth1] = useState("0")

    const [bordertopwidth2, setBorderTopWidth2] = useState("0")
    const [borderbottomwidth2, setBorderBottomWidth2] = useState("0")
    const [borderleftwidth2, setBorderLeftWidth2] = useState("0")
    const [borderrightwidth2, setBorderRightWidth2] = useState("0")

    const [bordertopwidth3, setBorderTopWidth3] = useState("0")
    const [borderbottomwidth3, setBorderBottomWidth3] = useState("0")
    const [borderleftwidth3, setBorderLeftWidth3] = useState("0")
    const [borderrightwidth3, setBorderRightWidth3] = useState("0")

    const [bordertopwidth4, setBorderTopWidth4] = useState("0")
    const [borderbottomwidth4, setBorderBottomWidth4] = useState("0")
    const [borderleftwidth4, setBorderLeftWidth4] = useState("0")
    const [borderrightwidth4, setBorderRightWidth4] = useState("0")

    const [bordercolor1, setBorderColor1] = useState("#FFFF00")
    const [bordercolor2, setBorderColor2] = useState("#FFFF00")
    const [bordercolor3, setBorderColor3] = useState("#FFFF00")
    const [bordercolor4, setBorderColor4] = useState("#FFFF00")

    const [bordertopcolor1, setBorderTopColor1] = useState("#FFFF00")
    const [borderbottomcolor1, setBorderBottomColor1] = useState("#FFFF00")
    const [borderleftcolor1, setBorderLeftColor1] = useState("#FFFF00")
    const [borderrightcolor1, setBorderRightColor1] = useState("#FFFF00")

    const [bordertopcolor2, setBorderTopColor2] = useState("#FFFF00")
    const [borderbottomcolor2, setBorderBottomColor2] = useState("#FFFF00")
    const [borderleftcolor2, setBorderLeftColor2] = useState("#FFFF00")
    const [borderrightcolor2, setBorderRightColor2] = useState("#FFFF00")

    const [bordertopcolor3, setBorderTopColor3] = useState("#FFFF00")
    const [borderbottomcolor3, setBorderBottomColor3] = useState("#FFFF00")
    const [borderleftcolor3, setBorderLeftColor3] = useState("#FFFF00")
    const [borderrightcolor3, setBorderRightColor3] = useState("#FFFF00")

    const [bordertopcolor4, setBorderTopColor4] = useState("#FFFF00")
    const [borderbottomcolor4, setBorderBottomColor4] = useState("#FFFF00")
    const [borderleftcolor4, setBorderLeftColor4] = useState("#FFFF00")
    const [borderrightcolor4, setBorderRightColor4] = useState("#FFFF00")

    const [column, setColumn] = useState("column-12")

    const SelectColumn12 = () => {
        setColumn("column-12")
        setColumnStyle("column12")
    }

    const SelectColumn6 = () => {
        setColumn("column-6")
        setColumnStyle("column6")
    }

    const SelectColumn6left = () => {
        setColumn("column-6left")
        setColumnStyle("column6")
    }

    const SelectColumn6right = () => {
        setColumn("column-6right")
        setColumnStyle("column6")
    }

    const SelectColumn4 = () => {
        setColumn("column-4")
        setColumnStyle("column4")
    }

    const SelectColumn3 = () => {
        setColumn("column-3")
        setColumnStyle("column3")
    }

    const SelectColumn3left = () => {
        setColumn("column-3left")
        setColumnStyle("column3")
    }

    const SelectColumn3right = () => {
        setColumn("column-3right")
        setColumnStyle("column3")
    }

    const [backgroundImage, setBackgroundImage] = useState(null)
    return (
        <>
            {show ?
                <div className='sidenav'>
                    <div>
                        <div><Button onClick={handleClose}>X</Button></div>
                    </div>
                    <div>
                        <Row>
                            <Col md={6}>
                                <Table striped bordered onClick={SelectColumn12}>
                                    <thead>
                                        <tr>
                                            <th></th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                            <Col md={6}>
                                <Table striped bordered onClick={SelectColumn6}>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                            <Col md={6}>
                                <Table striped bordered onClick={SelectColumn4}>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                            <Col md={6}>
                                <Table striped bordered onClick={SelectColumn3}>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                            <Col md={6}>
                                <Table striped bordered onClick={SelectColumn6left}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "30%" }}></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                            <Col md={6}>
                                <Table striped bordered onClick={SelectColumn6right}>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th style={{ width: "30%" }}></th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                            <Col md={6}>
                                <Table striped bordered onClick={SelectColumn3left}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "20%" }}></th>
                                            <th></th>
                                            <th style={{ width: "20%" }}></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                            <Col md={6}>
                                <Table striped bordered onClick={SelectColumn3right}>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th style={{ width: "20%" }}></th>
                                            <th></th>
                                            <th style={{ width: "20%" }}></th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            {columnStyle === "column12" ? <Tabs defaultActiveKey="column1" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="column1" title="Column1">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle1(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth1(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor1(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs> : <></>}
                            {columnStyle === "column6" ? <Tabs defaultActiveKey="column1" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="column1" title="Column1">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle1(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth1(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor1(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="column2" title="Column2">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle2(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth2(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor2(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs> : <></>}
                            {columnStyle === "column4" ? <Tabs defaultActiveKey="column1" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="column1" title="Column1">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle1(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth1(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor1(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="column2" title="Column2">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle2(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth2(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor2(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="column3" title="Column3">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle3(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth3(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor3(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop3(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth3(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom3(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth3(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft3(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth3(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight3(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth3(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs> : <></>}
                            {columnStyle === "column3" ? <Tabs defaultActiveKey="column1" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="column1" title="Column1">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight1(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle1(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth1(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor1(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight1(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth1(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor1(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="column2" title="Column2">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight2(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle2(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth2(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor2(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight2(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth2(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor2(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="column3" title="Column3">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight3(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle3(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth3(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor3(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop3(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth3(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom3(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth3(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft3(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth3(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight3(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth3(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor3(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="column4" title="Column4">
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Background</label>
                                            <FormControl type='color' onChange={(e) => {
                                                setBackground4(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <label htmlFor="">Padding</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPadding4(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Top</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingTop4(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Bottom</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingBottom4(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Left</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingLeft4(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Padding Right</label>
                                            <FormControl type='number' onChange={(e) => {
                                                setPaddingRight4(e.target.value + "px")
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <label htmlFor="">Border Style</label>
                                        <FormSelect onChange={(e) => {
                                            setBorderStyle4(e.target.value)
                                        }}>
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                        </FormSelect>
                                        <FormControl type='number' onChange={(e) => {
                                            setBorderWidth4(e.target.value + "px")
                                        }}></FormControl>
                                        <FormControl type="color" onChange={(e) => {
                                            setBorderColor4(e.target.value)
                                        }}></FormControl>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <label htmlFor="">Border Top Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleTop4(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderTopWidth4(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderTopColor4(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Bottom Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleBottom4(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderBottomWidth4(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderBottomColor4(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Left Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleLeft4(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderLeftWidth4(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderLeftColor4(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                        <Col md={6}>
                                            <label htmlFor="">Border Right Style</label>
                                            <FormSelect onChange={(e) => {
                                                setBorderStyleRight4(e.target.value)
                                            }}>
                                                <option value="solid">Solid</option>
                                                <option value="dashed">Dashed</option>
                                                <option value="dotted">Dotted</option>
                                            </FormSelect>
                                            <FormControl type='number' onChange={(e) => {
                                                setBorderRightWidth4(e.target.value + "px")
                                            }}></FormControl>
                                            <FormControl type="color" onChange={(e) => {
                                                setBorderRightColor4(e.target.value)
                                            }}></FormControl>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs> : <></>}
                        </Row>
                        <Row>
                            <Col md={12}>
                                <label htmlFor="">Background Image</label>
                                <FormControl type='file' accept='image/*' onChange={(e) => {
                                    const objectURL = URL.createObjectURL(e.target.files[0])
                                    setBackgroundImage(objectURL)
                                }}></FormControl>
                            </Col>
                        </Row>
                    </div>
                </div> : <></>}
            <div onClick={handleShow}>
                {column === "column-12" ?
                    <Row style={{ 'backgroundImage': `url(` + backgroundImage + `)` }} onClick={handleShow}>
                        <Col md={12} style={{
                            'backgroundColor': background1,
                            'padding': padding1,
                            'paddingTop': paddingTop1,
                            'paddingBottom': paddingBottom1,
                            'paddingLeft': paddingLeft1,
                            'paddingRight': paddingRight1,
                            'borderStyle': borderstyle1,
                            'borderTopStyle': borderstyletop1,
                            'borderBottomStyle': borderstylebottom1,
                            'borderLeftStyle': borderstyleleft1,
                            'borderRightStyle': borderstyleright1,
                            'borderWidth': borderwidth1,
                            'borderTopWidth': bordertopwidth1,
                            'borderBottomWidth': borderbottomwidth1,
                            'borderLeftWidth': borderleftwidth1,
                            'borderRightWidth': borderrightwidth1,
                            'borderColor': bordercolor1,
                            'borderTopColor': bordertopcolor1,
                            'borderBottomColor': borderbottomcolor1,
                            'borderLeftColor': borderleftcolor1,
                            'borderRightColor': borderrightcolor1
                        }}><Drop></Drop></Col>
                    </Row> : <></>}
                {column === "column-6" ?
                    <Row style={{ 'backgroundImage': `url(` + backgroundImage + `)` }} onClick={handleShow}>
                        <Col md={6} style={{
                            'backgroundColor': background1,
                            'padding': padding1,
                            'paddingTop': paddingTop1,
                            'paddingBottom': paddingBottom1,
                            'paddingLeft': paddingLeft1,
                            'paddingRight': paddingRight1,
                            'borderStyle': borderstyle1,
                            'borderTopStyle': borderstyletop1,
                            'borderBottomStyle': borderstylebottom1,
                            'borderLeftStyle': borderstyleleft1,
                            'borderRightStyle': borderstyleright1,
                            'borderWidth': borderwidth1,
                            'borderTopWidth': bordertopwidth1,
                            'borderBottomWidth': borderbottomwidth1,
                            'borderLeftWidth': borderleftwidth1,
                            'borderRightWidth': borderrightwidth1,
                            'borderColor': bordercolor1,
                            'borderTopColor': bordertopcolor1,
                            'borderBottomColor': borderbottomcolor1,
                            'borderLeftColor': borderleftcolor1,
                            'borderRightColor': borderrightcolor1
                        }}><Drop></Drop></Col>
                        <Col md={6} style={{
                            'backgroundColor': background2,
                            'padding': padding2,
                            'paddingTop': paddingTop2,
                            'paddingBottom': paddingBottom2,
                            'paddingLeft': paddingLeft2,
                            'paddingRight': paddingRight2,
                            'borderStyle': borderstyle2,
                            'borderTopStyle': borderstyletop2,
                            'borderBottomStyle': borderstylebottom2,
                            'borderLeftStyle': borderstyleleft2,
                            'borderRightStyle': borderstyleright2,
                            'borderWidth': borderwidth2,
                            'borderTopWidth': bordertopwidth2,
                            'borderBottomWidth': borderbottomwidth2,
                            'borderLeftWidth': borderleftwidth2,
                            'borderRightWidth': borderrightwidth2,
                            'borderColor': bordercolor2,
                            'borderTopColor': bordertopcolor2,
                            'borderBottomColor': borderbottomcolor2,
                            'borderLeftColor': borderleftcolor2,
                            'borderRightColor': borderrightcolor2
                        }}><Drop></Drop></Col>
                    </Row> : <></>}
                {column === "column-6left" ?
                    <Row style={{ 'backgroundImage': `url(` + backgroundImage + `)` }} onClick={handleShow}>
                        <Col md={4} style={{
                            'backgroundColor': background1,
                            'padding': padding1,
                            'paddingTop': paddingTop1,
                            'paddingBottom': paddingBottom1,
                            'paddingLeft': paddingLeft1,
                            'paddingRight': paddingRight1,
                            'borderStyle': borderstyle1,
                            'borderTopStyle': borderstyletop1,
                            'borderBottomStyle': borderstylebottom1,
                            'borderLeftStyle': borderstyleleft1,
                            'borderRightStyle': borderstyleright1,
                            'borderWidth': borderwidth1,
                            'borderTopWidth': bordertopwidth1,
                            'borderBottomWidth': borderbottomwidth1,
                            'borderLeftWidth': borderleftwidth1,
                            'borderRightWidth': borderrightwidth1,
                            'borderColor': bordercolor1,
                            'borderTopColor': bordertopcolor1,
                            'borderBottomColor': borderbottomcolor1,
                            'borderLeftColor': borderleftcolor1,
                            'borderRightColor': borderrightcolor1
                        }}><Drop></Drop></Col>
                        <Col md={8} style={{
                            'backgroundColor': background2,
                            'padding': padding2,
                            'paddingTop': paddingTop2,
                            'paddingBottom': paddingBottom2,
                            'paddingLeft': paddingLeft2,
                            'paddingRight': paddingRight2,
                            'borderStyle': borderstyle2,
                            'borderTopStyle': borderstyletop2,
                            'borderBottomStyle': borderstylebottom2,
                            'borderLeftStyle': borderstyleleft2,
                            'borderRightStyle': borderstyleright2,
                            'borderWidth': borderwidth2,
                            'borderTopWidth': bordertopwidth2,
                            'borderBottomWidth': borderbottomwidth2,
                            'borderLeftWidth': borderleftwidth2,
                            'borderRightWidth': borderrightwidth2,
                            'borderColor': bordercolor2,
                            'borderTopColor': bordertopcolor2,
                            'borderBottomColor': borderbottomcolor2,
                            'borderLeftColor': borderleftcolor2,
                            'borderRightColor': borderrightcolor2
                        }}><Drop></Drop></Col>
                    </Row> : <></>}
                {column === "column-6right" ?
                    <Row style={{ 'backgroundImage': `url(` + backgroundImage + `)` }} onClick={handleShow}>
                        <Col md={8} style={{
                            'backgroundColor': background1,
                            'padding': padding1,
                            'paddingTop': paddingTop1,
                            'paddingBottom': paddingBottom1,
                            'paddingLeft': paddingLeft1,
                            'paddingRight': paddingRight1,
                            'borderStyle': borderstyle1,
                            'borderTopStyle': borderstyletop1,
                            'borderBottomStyle': borderstylebottom1,
                            'borderLeftStyle': borderstyleleft1,
                            'borderRightStyle': borderstyleright1,
                            'borderWidth': borderwidth1,
                            'borderTopWidth': bordertopwidth1,
                            'borderBottomWidth': borderbottomwidth1,
                            'borderLeftWidth': borderleftwidth1,
                            'borderRightWidth': borderrightwidth1,
                            'borderColor': bordercolor1,
                            'borderTopColor': bordertopcolor1,
                            'borderBottomColor': borderbottomcolor1,
                            'borderLeftColor': borderleftcolor1,
                            'borderRightColor': borderrightcolor1
                        }}><Drop></Drop></Col>
                        <Col md={4} style={{
                            'backgroundColor': background2,
                            'padding': padding2,
                            'paddingTop': paddingTop2,
                            'paddingBottom': paddingBottom2,
                            'paddingLeft': paddingLeft2,
                            'paddingRight': paddingRight2,
                            'borderStyle': borderstyle2,
                            'borderTopStyle': borderstyletop2,
                            'borderBottomStyle': borderstylebottom2,
                            'borderLeftStyle': borderstyleleft2,
                            'borderRightStyle': borderstyleright2,
                            'borderWidth': borderwidth2,
                            'borderTopWidth': bordertopwidth2,
                            'borderBottomWidth': borderbottomwidth2,
                            'borderLeftWidth': borderleftwidth2,
                            'borderRightWidth': borderrightwidth2,
                            'borderColor': bordercolor2,
                            'borderTopColor': bordertopcolor2,
                            'borderBottomColor': borderbottomcolor2,
                            'borderLeftColor': borderleftcolor2,
                            'borderRightColor': borderrightcolor2
                        }}><Drop></Drop></Col>
                    </Row> : <></>}
                {column === "column-4" ?
                    <Row style={{ 'backgroundImage': `url(` + backgroundImage + `)` }} onClick={handleShow}>
                        <Col md={4} style={{
                            'backgroundColor': background1,
                            'padding': padding1,
                            'paddingTop': paddingTop1,
                            'paddingBottom': paddingBottom1,
                            'paddingLeft': paddingLeft1,
                            'paddingRight': paddingRight1,
                            'borderStyle': borderstyle1,
                            'borderTopStyle': borderstyletop1,
                            'borderBottomStyle': borderstylebottom1,
                            'borderLeftStyle': borderstyleleft1,
                            'borderRightStyle': borderstyleright1,
                            'borderWidth': borderwidth1,
                            'borderTopWidth': bordertopwidth1,
                            'borderBottomWidth': borderbottomwidth1,
                            'borderLeftWidth': borderleftwidth1,
                            'borderRightWidth': borderrightwidth1,
                            'borderColor': bordercolor1,
                            'borderTopColor': bordertopcolor1,
                            'borderBottomColor': borderbottomcolor1,
                            'borderLeftColor': borderleftcolor1,
                            'borderRightColor': borderrightcolor1
                        }}><Drop></Drop></Col>
                        <Col md={4} style={{
                            'backgroundColor': background2,
                            'padding': padding2,
                            'paddingTop': paddingTop2,
                            'paddingBottom': paddingBottom2,
                            'paddingLeft': paddingLeft2,
                            'paddingRight': paddingRight2,
                            'borderStyle': borderstyle2,
                            'borderTopStyle': borderstyletop2,
                            'borderBottomStyle': borderstylebottom2,
                            'borderLeftStyle': borderstyleleft2,
                            'borderRightStyle': borderstyleright2,
                            'borderWidth': borderwidth2,
                            'borderTopWidth': bordertopwidth2,
                            'borderBottomWidth': borderbottomwidth2,
                            'borderLeftWidth': borderleftwidth2,
                            'borderRightWidth': borderrightwidth2,
                            'borderColor': bordercolor2,
                            'borderTopColor': bordertopcolor2,
                            'borderBottomColor': borderbottomcolor2,
                            'borderLeftColor': borderleftcolor2,
                            'borderRightColor': borderrightcolor2
                        }}><Drop></Drop></Col>
                        <Col md={4} style={{
                            'backgroundColor': background3,
                            'padding': padding3,
                            'paddingTop': paddingTop3,
                            'paddingBottom': paddingBottom3,
                            'paddingLeft': paddingLeft3,
                            'paddingRight': paddingRight3,
                            'borderStyle': borderstyle3,
                            'borderTopStyle': borderstyletop3,
                            'borderBottomStyle': borderstylebottom3,
                            'borderLeftStyle': borderstyleleft3,
                            'borderRightStyle': borderstyleright3,
                            'borderWidth': borderwidth3,
                            'borderTopWidth': bordertopwidth3,
                            'borderBottomWidth': borderbottomwidth3,
                            'borderLeftWidth': borderleftwidth3,
                            'borderRightWidth': borderrightwidth3,
                            'borderColor': bordercolor3,
                            'borderTopColor': bordertopcolor3,
                            'borderBottomColor': borderbottomcolor3,
                            'borderLeftColor': borderleftcolor3,
                            'borderRightColor': borderrightcolor3
                        }}><Drop></Drop></Col>
                    </Row> : <></>}
                {column === "column-3" ?
                    <Row style={{ 'backgroundImage': `url(` + backgroundImage + `)` }} onClick={handleShow}>
                        <Col md={3} style={{
                            'backgroundColor': background1,
                            'padding': padding1,
                            'paddingTop': paddingTop1,
                            'paddingBottom': paddingBottom1,
                            'paddingLeft': paddingLeft1,
                            'paddingRight': paddingRight1,
                            'borderStyle': borderstyle1,
                            'borderTopStyle': borderstyletop1,
                            'borderBottomStyle': borderstylebottom1,
                            'borderLeftStyle': borderstyleleft1,
                            'borderRightStyle': borderstyleright1,
                            'borderWidth': borderwidth1,
                            'borderTopWidth': bordertopwidth1,
                            'borderBottomWidth': borderbottomwidth1,
                            'borderLeftWidth': borderleftwidth1,
                            'borderRightWidth': borderrightwidth1,
                            'borderColor': bordercolor1,
                            'borderTopColor': bordertopcolor1,
                            'borderBottomColor': borderbottomcolor1,
                            'borderLeftColor': borderleftcolor1,
                            'borderRightColor': borderrightcolor1
                        }}><Drop></Drop></Col>
                        <Col md={3} style={{
                            'backgroundColor': background2,
                            'padding': padding2,
                            'paddingTop': paddingTop2,
                            'paddingBottom': paddingBottom2,
                            'paddingLeft': paddingLeft2,
                            'paddingRight': paddingRight2,
                            'borderStyle': borderstyle2,
                            'borderTopStyle': borderstyletop2,
                            'borderBottomStyle': borderstylebottom2,
                            'borderLeftStyle': borderstyleleft2,
                            'borderRightStyle': borderstyleright2,
                            'borderWidth': borderwidth2,
                            'borderTopWidth': bordertopwidth2,
                            'borderBottomWidth': borderbottomwidth2,
                            'borderLeftWidth': borderleftwidth2,
                            'borderRightWidth': borderrightwidth2,
                            'borderColor': bordercolor2,
                            'borderTopColor': bordertopcolor2,
                            'borderBottomColor': borderbottomcolor2,
                            'borderLeftColor': borderleftcolor2,
                            'borderRightColor': borderrightcolor2
                        }}><Drop></Drop></Col>
                        <Col md={3} style={{
                            'backgroundColor': background3,
                            'padding': padding3,
                            'paddingTop': paddingTop3,
                            'paddingBottom': paddingBottom3,
                            'paddingLeft': paddingLeft3,
                            'paddingRight': paddingRight3,
                            'borderStyle': borderstyle3,
                            'borderTopStyle': borderstyletop3,
                            'borderBottomStyle': borderstylebottom3,
                            'borderLeftStyle': borderstyleleft3,
                            'borderRightStyle': borderstyleright3,
                            'borderWidth': borderwidth3,
                            'borderTopWidth': bordertopwidth3,
                            'borderBottomWidth': borderbottomwidth3,
                            'borderLeftWidth': borderleftwidth3,
                            'borderRightWidth': borderrightwidth3,
                            'borderColor': bordercolor3,
                            'borderTopColor': bordertopcolor3,
                            'borderBottomColor': borderbottomcolor3,
                            'borderLeftColor': borderleftcolor3,
                            'borderRightColor': borderrightcolor3
                        }}><Drop></Drop></Col>
                        <Col md={3} style={{
                            'backgroundColor': background4,
                            'padding': padding4,
                            'paddingTop': paddingTop4,
                            'paddingBottom': paddingBottom4,
                            'paddingLeft': paddingLeft4,
                            'paddingRight': paddingRight4,
                            'borderStyle': borderstyle4,
                            'borderTopStyle': borderstyletop4,
                            'borderBottomStyle': borderstylebottom4,
                            'borderLeftStyle': borderstyleleft4,
                            'borderRightStyle': borderstyleright4,
                            'borderWidth': borderwidth4,
                            'borderTopWidth': bordertopwidth4,
                            'borderBottomWidth': borderbottomwidth4,
                            'borderLeftWidth': borderleftwidth4,
                            'borderRightWidth': borderrightwidth4,
                            'borderColor': bordercolor4,
                            'borderTopColor': bordertopcolor4,
                            'borderBottomColor': borderbottomcolor4,
                            'borderLeftColor': borderleftcolor4,
                            'borderRightColor': borderrightcolor4
                        }}><Drop></Drop></Col>
                    </Row> : <></>}
                {column === "column-3left" ?
                    <Row style={{ 'backgroundImage': `url(` + backgroundImage + `)` }} onClick={handleShow}>
                        <Col md={3} style={{
                            'backgroundColor': background1,
                            'padding': padding1,
                            'paddingTop': paddingTop1,
                            'paddingBottom': paddingBottom1,
                            'paddingLeft': paddingLeft1,
                            'paddingRight': paddingRight1,
                            'borderStyle': borderstyle1,
                            'borderTopStyle': borderstyletop1,
                            'borderBottomStyle': borderstylebottom1,
                            'borderLeftStyle': borderstyleleft1,
                            'borderRightStyle': borderstyleright1,
                            'borderWidth': borderwidth1,
                            'borderTopWidth': bordertopwidth1,
                            'borderBottomWidth': borderbottomwidth1,
                            'borderLeftWidth': borderleftwidth1,
                            'borderRightWidth': borderrightwidth1,
                            'borderColor': bordercolor1,
                            'borderTopColor': bordertopcolor1,
                            'borderBottomColor': borderbottomcolor1,
                            'borderLeftColor': borderleftcolor1,
                            'borderRightColor': borderrightcolor1
                        }}><Drop></Drop></Col>
                        <Col md={3} style={{
                            'backgroundColor': background2,
                            'padding': padding2,
                            'paddingTop': paddingTop2,
                            'paddingBottom': paddingBottom2,
                            'paddingLeft': paddingLeft2,
                            'paddingRight': paddingRight2,
                            'borderStyle': borderstyle2,
                            'borderTopStyle': borderstyletop2,
                            'borderBottomStyle': borderstylebottom2,
                            'borderLeftStyle': borderstyleleft2,
                            'borderRightStyle': borderstyleright2,
                            'borderWidth': borderwidth2,
                            'borderTopWidth': bordertopwidth2,
                            'borderBottomWidth': borderbottomwidth2,
                            'borderLeftWidth': borderleftwidth2,
                            'borderRightWidth': borderrightwidth2,
                            'borderColor': bordercolor2,
                            'borderTopColor': bordertopcolor2,
                            'borderBottomColor': borderbottomcolor2,
                            'borderLeftColor': borderleftcolor2,
                            'borderRightColor': borderrightcolor2
                        }}><Drop></Drop></Col>
                        <Col md={3} style={{
                            'backgroundColor': background3,
                            'padding': padding3,
                            'paddingTop': paddingTop3,
                            'paddingBottom': paddingBottom3,
                            'paddingLeft': paddingLeft3,
                            'paddingRight': paddingRight3,
                            'borderStyle': borderstyle3,
                            'borderTopStyle': borderstyletop3,
                            'borderBottomStyle': borderstylebottom3,
                            'borderLeftStyle': borderstyleleft3,
                            'borderRightStyle': borderstyleright3,
                            'borderWidth': borderwidth3,
                            'borderTopWidth': bordertopwidth3,
                            'borderBottomWidth': borderbottomwidth3,
                            'borderLeftWidth': borderleftwidth3,
                            'borderRightWidth': borderrightwidth3,
                            'borderColor': bordercolor3,
                            'borderTopColor': bordertopcolor3,
                            'borderBottomColor': borderbottomcolor3,
                            'borderLeftColor': borderleftcolor3,
                            'borderRightColor': borderrightcolor3
                        }}><Drop></Drop></Col>
                        <Col md={3} style={{
                            'backgroundColor': background4,
                            'padding': padding4,
                            'paddingTop': paddingTop4,
                            'paddingBottom': paddingBottom4,
                            'paddingLeft': paddingLeft4,
                            'paddingRight': paddingRight4,
                            'borderStyle': borderstyle4,
                            'borderTopStyle': borderstyletop4,
                            'borderBottomStyle': borderstylebottom4,
                            'borderLeftStyle': borderstyleleft4,
                            'borderRightStyle': borderstyleright4,
                            'borderWidth': borderwidth4,
                            'borderTopWidth': bordertopwidth4,
                            'borderBottomWidth': borderbottomwidth4,
                            'borderLeftWidth': borderleftwidth4,
                            'borderRightWidth': borderrightwidth4,
                            'borderColor': bordercolor4,
                            'borderTopColor': bordertopcolor4,
                            'borderBottomColor': borderbottomcolor4,
                            'borderLeftColor': borderleftcolor4,
                            'borderRightColor': borderrightcolor4
                        }}><Drop></Drop></Col>
                    </Row> : <></>}
                {column === "column-3right" ?
                    <Row style={{ 'backgroundImage': `url(` + backgroundImage + `)` }} onClick={handleShow}>
                        <Col md={3} style={{
                            'backgroundColor': background1,
                            'padding': padding1,
                            'paddingTop': paddingTop1,
                            'paddingBottom': paddingBottom1,
                            'paddingLeft': paddingLeft1,
                            'paddingRight': paddingRight1,
                            'borderStyle': borderstyle1,
                            'borderTopStyle': borderstyletop1,
                            'borderBottomStyle': borderstylebottom1,
                            'borderLeftStyle': borderstyleleft1,
                            'borderRightStyle': borderstyleright1,
                            'borderWidth': borderwidth1,
                            'borderTopWidth': bordertopwidth1,
                            'borderBottomWidth': borderbottomwidth1,
                            'borderLeftWidth': borderleftwidth1,
                            'borderRightWidth': borderrightwidth1,
                            'borderColor': bordercolor1,
                            'borderTopColor': bordertopcolor1,
                            'borderBottomColor': borderbottomcolor1,
                            'borderLeftColor': borderleftcolor1,
                            'borderRightColor': borderrightcolor1
                        }}><Drop></Drop></Col>
                        <Col md={3} style={{
                            'backgroundColor': background2,
                            'padding': padding2,
                            'paddingTop': paddingTop2,
                            'paddingBottom': paddingBottom2,
                            'paddingLeft': paddingLeft2,
                            'paddingRight': paddingRight2,
                            'borderStyle': borderstyle2,
                            'borderTopStyle': borderstyletop2,
                            'borderBottomStyle': borderstylebottom2,
                            'borderLeftStyle': borderstyleleft2,
                            'borderRightStyle': borderstyleright2,
                            'borderWidth': borderwidth2,
                            'borderTopWidth': bordertopwidth2,
                            'borderBottomWidth': borderbottomwidth2,
                            'borderLeftWidth': borderleftwidth2,
                            'borderRightWidth': borderrightwidth2,
                            'borderColor': bordercolor2,
                            'borderTopColor': bordertopcolor2,
                            'borderBottomColor': borderbottomcolor2,
                            'borderLeftColor': borderleftcolor2,
                            'borderRightColor': borderrightcolor2
                        }}><Drop></Drop></Col>
                        <Col md={3} style={{
                            'backgroundColor': background3,
                            'padding': padding3,
                            'paddingTop': paddingTop3,
                            'paddingBottom': paddingBottom3,
                            'paddingLeft': paddingLeft3,
                            'paddingRight': paddingRight3,
                            'borderStyle': borderstyle3,
                            'borderTopStyle': borderstyletop3,
                            'borderBottomStyle': borderstylebottom3,
                            'borderLeftStyle': borderstyleleft3,
                            'borderRightStyle': borderstyleright3,
                            'borderWidth': borderwidth3,
                            'borderTopWidth': bordertopwidth3,
                            'borderBottomWidth': borderbottomwidth3,
                            'borderLeftWidth': borderleftwidth3,
                            'borderRightWidth': borderrightwidth3,
                            'borderColor': bordercolor3,
                            'borderTopColor': bordertopcolor3,
                            'borderBottomColor': borderbottomcolor3,
                            'borderLeftColor': borderleftcolor3,
                            'borderRightColor': borderrightcolor3
                        }}><Drop></Drop></Col>
                        <Col md={3} style={{
                            'backgroundColor': background4,
                            'padding': padding4,
                            'paddingTop': paddingTop4,
                            'paddingBottom': paddingBottom4,
                            'paddingLeft': paddingLeft4,
                            'paddingRight': paddingRight4,
                            'borderStyle': borderstyle4,
                            'borderTopStyle': borderstyletop4,
                            'borderBottomStyle': borderstylebottom4,
                            'borderLeftStyle': borderstyleleft4,
                            'borderRightStyle': borderstyleright4,
                            'borderWidth': borderwidth4,
                            'borderTopWidth': bordertopwidth4,
                            'borderBottomWidth': borderbottomwidth4,
                            'borderLeftWidth': borderleftwidth4,
                            'borderRightWidth': borderrightwidth4,
                            'borderColor': bordercolor4,
                            'borderTopColor': bordertopcolor4,
                            'borderBottomColor': borderbottomcolor4,
                            'borderLeftColor': borderleftcolor4,
                            'borderRightColor': borderrightcolor4
                        }}><Drop></Drop></Col>
                    </Row> : <></>}
            </div>
        </>
    )
}

export default ColumnElement;