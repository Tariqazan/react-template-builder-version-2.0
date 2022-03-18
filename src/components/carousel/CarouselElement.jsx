import React, { useState, useRef } from 'react';
import { Offcanvas, Carousel, FormControl, Button, Form, Row, Col } from 'react-bootstrap';
import Drop from '../Drop';

import { useDetectClickOutside } from 'react-detect-click-outside';
function CarouselElement() {
  const [show, setShow] = useState(false)

  // responsive
  const [responsive, setResponsive] = useState(false)
  const [responsiveclassName, setResponsiveClassName] = useState("")

  const [padding, setPadding] = useState(0)

  const [paddingTop, setPaddingTop] = useState(0)
  const [paddingBottom, setPaddingBottom] = useState(0)
  const [paddingLeft, setPaddingLeft] = useState(0)
  const [paddingRight, setPaddingRight] = useState(0)

  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)

  const [img_url1, setImgURL1] = useState("/#")
  const [img_url2, setImgURL2] = useState("/#")
  const [img_url3, setImgURL3] = useState("/#")

  const [remove, setRemove] = useState(true)
  const handleOpen = () => setShow(true)
  const handleClose = () => setShow(false)

  const ref = useDetectClickOutside({ onTriggered: handleClose });
  return (
    <div ref={ref} className={responsiveclassName} style={{ 'padding': padding, 'paddingTop': paddingTop, 'paddingBottom': paddingBottom, 'paddingLeft': paddingLeft, 'paddingRight': paddingRight }}>
      {remove ? <Carousel variant="dark" onClick={handleOpen}>
        <Carousel.Item>
          <a href={img_url1}>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={img_url2}>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={img_url3}>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel> : <Drop></Drop>}
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
            <label htmlFor="image">Image 1</label>
            <input type="file" className='form-control' accept='image/*' onChange={(e) => {
              const objectURL = URL.createObjectURL(e.target.files[0])
              setImage1(objectURL)
            }} />
            <input type="text" className='form-control' placeholder='URL' onChange={(e) => {
              setImgURL1(e.target.value)
            }} />
            <label htmlFor="image">Image 2</label>
            <input type="file" className='form-control' accept='image/*' onChange={(e) => {
              const objectURL = URL.createObjectURL(e.target.files[0])
              setImage2(objectURL)
            }} />
            <input type="text" className='form-control' placeholder='URL' onChange={(e) => {
              setImgURL2(e.target.value)
            }} />
            <label htmlFor="image">Image 3</label>
            <input type="file" className='form-control' accept='image/*' onChange={(e) => {
              const objectURL = URL.createObjectURL(e.target.files[0])
              setImage3(objectURL)
            }} />
            <input type="text" className='form-control' placeholder='URL' onChange={(e) => {
              setImgURL3(e.target.value)
            }} />
            <Form.Label>Container Padding</Form.Label>
            <FormControl type='number' onChange={(e) => {
              setPadding(e.target.value + "px")
            }}></FormControl>
            <Row>
              <Col md={6}>
                <Form.Label>Padding Top</Form.Label>
                <FormControl type='number' onChange={(e) => {
                  setPaddingTop(e.target.value + "px")
                }}></FormControl>
              </Col>
              <Col md={6}>
                <Form.Label>Padding Bottom</Form.Label>
                <FormControl type='number' onChange={(e) => {
                  setPaddingBottom(e.target.value + "px")
                }}></FormControl>
              </Col>
              <Col md={6}>
                <Form.Label>Padding Left</Form.Label>
                <FormControl type='number' onChange={(e) => {
                  setPaddingLeft(e.target.value + "px")
                }}></FormControl>
              </Col>
              <Col md={6}>
                <Form.Label>Padding Right</Form.Label>
                <FormControl type='number' onChange={(e) => {
                  setPaddingRight(e.target.value + "px")
                }}></FormControl>
              </Col>
            </Row>
          </div>
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

export default CarouselElement