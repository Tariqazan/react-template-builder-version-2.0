import React, { useState, useRef } from "react";

import {
    FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterest, FaVimeo, FaYoutube, FaSnapchat, FaReddit, FaFacebookMessenger,
    FaTripadvisor, FaMeetup, FaProductHunt, FaRss, FaTumblr, FaSpotify, FaSoundcloud, FaApple, FaYelp, FaMedium,
    FaSkype, FaFlickr, FaGithub, FaGooglePlus, FaDiscord, FaTelegram, FaMailBulk
} from "react-icons/fa";

import {
    FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaPinterestSquare, FaVimeoSquare, FaYoutubeSquare,
    FaSnapchatSquare, FaRedditSquare, FaRssSquare, FaTumblrSquare, FaGithubSquare,
    FaGooglePlusSquare
} from "react-icons/fa";

import { Stack, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Drop from "../Drop";
import { useDetectClickOutside } from 'react-detect-click-outside';

function SocialElement() {
    const id = Date.now()
    const [remove, setRemove] = useState(true)
    const [icon, setIcon] = useState([])
    const [input_icon, setInputIcon] = useState(false)
    const [icontype, setIconType] = useState('circle')
    const [icon_setting, setIconSetting] = useState([])
    const [upload_icon, setUploadIcon] = useState([])
    const [upload_icon_id, setUploadIconID] = useState(1)


    const uploadIcon = (e) => {
        setInputIcon(true)
        const objectURL = URL.createObjectURL(e.target.files[0])
        setUploadIconID(upload_icon_id + 1)
        setIcon(icon.concat(<img src={objectURL} id={"uploaded-icon" + upload_icon_id + 1} style={{ "height": "35px", "width": "35px" }}></img>))
        setUploadIcon(upload_icon.concat(
            <Stack direction="horizontal" gap={2}>
                <img src={objectURL} id={"menu-uploaded-icon" + upload_icon_id + 1} style={{ "height": "35px", "width": "35px" }}></img>
                <Button id={"btn" + upload_icon_id + 1} variant="close" onClick={(e) => {
                    document.getElementById("uploaded-icon" + upload_icon_id + 1).remove()
                    document.getElementById("menu-uploaded-icon" + upload_icon_id + 1).remove()
                    document.getElementById("btn" + upload_icon_id + 1).remove()
                }}></Button></Stack>))
    }

    const [show, setShow] = useState(true);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    const ref = useDetectClickOutside({ onTriggered: handleClose });
    return (
        <div ref={ref}>
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
                        <Form.Label>Container Padding</Form.Label>
                        <Form.Control type="number" onChange={(e => document.getElementById('icon').style.padding = e.target.value + 'px')}></Form.Control>
                        <select id="icon-type" className="form-control" onChange={(e => {
                            if (icontype === 'circle') {
                                setIconType('square')
                            }
                            else {
                                setIconType('circle')
                            }
                        })}>
                            <option value="1" selected>Circle</option>
                            <option value="2">Square</option>
                        </select>

                        {icon_setting}
                        {upload_icon}

                        {icontype === 'circle' ? <>
                            <Stack direction='horizontal' gap={2}>
                                <FaFacebook onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="facebook-link"><FaFacebook id="facebook" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="facebook-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaFacebook />
                                                <span className="fw-bold">Facebook</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("facebook-link").remove()
                                                    document.getElementById("facebook-div").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("facebook").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("facebook-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaTwitter onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="twitter-link"><FaTwitter id="twitter" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="twitter-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaTwitter />
                                                <span className="fw-bold">Twitter</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("twitter-link").remove()
                                                    document.getElementById("twitter-div").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("twitter").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("twitter-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaLinkedinIn onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="linkedin-link"><FaLinkedin id="linkedin" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="linkedin-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaLinkedinIn />
                                                <span className="fw-bold">LinkedIn</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("linkedin-link").remove()
                                                    document.getElementById("linkedin-div").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("linkedin").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("linkedin-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaInstagram onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="instagram-link"><FaInstagram id="instagram" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="instagram-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaInstagram />
                                                <span className="fw-bold">Instagram</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("instagram-link").remove()
                                                    document.getElementById("instagram-div").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("instagram").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("instagram-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaPinterest onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="pinterest-link"><FaPinterest id="pinterest" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="pinterest-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaPinterest />
                                                <span className="fw-bold">Pinterest</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("pinterest-link").remove()
                                                    document.getElementById("pinterest-div").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("pinterest").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("pinterest-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaVimeo onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="vimeo-link"><FaVimeo id="vimeo" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="vimeo-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaVimeo />
                                                <span className="fw-bold">Vimeo</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("vimeo-link").remove()
                                                    document.getElementById("vimeo-div").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("vimeo").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("vimeo-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaYoutube onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="youtube-link"><FaYoutube id="youtube" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="youtube-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaYoutube />
                                                <span className="fw-bold">Youtube</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("youtube-div").remove()
                                                    document.getElementById("youtube-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("youtube").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("youtube-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaSnapchat onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="snapchat-link"><FaSnapchat id="snapchat" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="snapchat-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaSnapchat />
                                                <span className="fw-bold">Snapchat</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("snapchat-div").remove()
                                                    document.getElementById("snapchat-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("sanpchat").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("sanpchat-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaReddit onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="reddit-link"><FaReddit id="reddit" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="reddit-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaReddit />
                                                <span className="fw-bold">Redit</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("reddit-div").remove()
                                                    document.getElementById("reddit-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("reddit").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("reddit-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaFacebookMessenger onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="messenger-link"><FaFacebookMessenger id="messenger" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="messenger-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaFacebookMessenger />
                                                <span className="fw-bold">Facebook Messenger</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("messenger-link").remove()
                                                    document.getElementById("messenger-div").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("messenger").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("messenger-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                            </Stack>
                            <Stack direction='horizontal' gap={2} className="my-3">
                                <FaTripadvisor onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="tripadvisor-link"><FaTripadvisor id="tripadvisor" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="tripadvisor-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaTripadvisor />
                                                <span className="fw-bold">TripAdvisor</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("tripadvisor-div").remove()
                                                    document.getElementById("tripadvisor-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("tripadvisor").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("tripadvisor-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaRss onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="rss-link"><FaRss id="rss" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="rss-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaRss />
                                                <span className="fw-bold">TripAdvisor</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("rss-div").remove()
                                                    document.getElementById("rss-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("rss").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("rss-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaTumblr onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="tumblr-link"><FaTumblr id="tumblr" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="tumblr-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaRss />
                                                <span className="fw-bold">Tumblr</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("tumblr-div").remove()
                                                    document.getElementById("tumblr-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("tumblr").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("tumblr-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaSpotify onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="spotify-link"><FaSpotify id="spotify" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="spotify-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaSpotify />
                                                <span className="fw-bold">Spotify</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("spotify-div").remove()
                                                    document.getElementById("spotify-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("spotify").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("spotify-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaSoundcloud onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="soundcloud-link"><FaSoundcloud id="soundcloud" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="soundcloud-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaSoundcloud />
                                                <span className="fw-bold">Soundcloud</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("soundcloud-div").remove()
                                                    document.getElementById("soundcloud-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("soundcloud").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("soundcloud-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaApple onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="apple-link"><FaApple id="apple" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="apple-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaApple />
                                                <span className="fw-bold">Apple</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("apple-div").remove()
                                                    document.getElementById("apple-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("apple").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("apple-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaMeetup onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="meetup-link"><FaMeetup id="meetup" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="meetup-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaMeetup />
                                                <span className="fw-bold">Meetup</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("meetup-div").remove()
                                                    document.getElementById("meetup-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("meetup").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("meetup-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaProductHunt onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="producthunt-link"><FaProductHunt id="producthunt" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="producthunt-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaProductHunt />
                                                <span className="fw-bold">Producthunt</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("producthunt-div").remove()
                                                    document.getElementById("producthunt-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("producthunt").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("producthunt-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaYelp onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="yelp-link"><FaYelp id="yelp" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="yelp-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaYelp />
                                                <span className="fw-bold">Yelp</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("yelp-div").remove()
                                                    document.getElementById("yelp-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("yelp").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("yelp-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaMedium onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="medium-link"><FaMedium id="medium" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="medium-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaMedium />
                                                <span className="fw-bold">Medium</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("medium-div").remove()
                                                    document.getElementById("medium-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("medium").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("medium-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                            </Stack>
                            <Stack direction='horizontal' gap={4} className="my-3">
                                <FaGithub onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="github-link"><FaGithub id="github" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="github-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaGithub />
                                                <span className="fw-bold">Github</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("github-div").remove()
                                                    document.getElementById("github-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("github").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("github-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaFlickr onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="flickr-link"><FaFlickr id="flickr" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="flickr-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaFlickr />
                                                <span className="fw-bold">Flickr</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("flickr-div").remove()
                                                    document.getElementById("flickr-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("flickr").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("flickr-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaSkype onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="skype-link"><FaSkype id="skype" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="skype-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaSkype />
                                                <span className="fw-bold">Skype</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("skype-div").remove()
                                                    document.getElementById("skype-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("skype").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("skype-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaMailBulk onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="mailbulk-link"><FaMailBulk id="mailbulk" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="mailbulk-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaMailBulk />
                                                <span className="fw-bold">Mailbulk</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("mailbulk-div").remove()
                                                    document.getElementById("mailbulk-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("mailbulk").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("mailbulk-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaDiscord onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="discord-link"><FaDiscord id="discord" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="discord-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaDiscord />
                                                <span className="fw-bold">Discord</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("discord-div").remove()
                                                    document.getElementById("discord-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("discord").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("discord-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaGooglePlus onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="googleplus-link"><FaGooglePlus id="googleplus" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="googleplus-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaGooglePlus />
                                                <span className="fw-bold">Google Plus</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("googleplus-div").remove()
                                                    document.getElementById("googleplus-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("googleplus").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("googleplus-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaTelegram onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="telegram-link"><FaTelegram id="telegram" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="telegram-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaTelegram />
                                                <span className="fw-bold">Telegram</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("telegram-div").remove()
                                                    document.getElementById("telegram-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("telegram").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("telegram-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                            </Stack>
                        </> : <>
                            <Stack direction='horizontal' gap={2}>
                                <FaFacebookSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="facebooksquare-link"><FaFacebookSquare id="facebooksquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="facebooksquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaFacebookSquare />
                                                <span className="fw-bold">Facebook Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("facebooksquare-div").remove()
                                                    document.getElementById("facebooksquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("facebooksquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("facebooksquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaTwitterSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="twittersquare-link"><FaTwitterSquare id="twittersquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="twittersquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaTwitterSquare />
                                                <span className="fw-bold">Twitter Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("twittersquare-div").remove()
                                                    document.getElementById("twittersquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("twittersquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("twittersquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaLinkedin onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="linkedinsquare-link"><FaLinkedin id="linkedinsquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="linkedinsquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaLinkedin />
                                                <span className="fw-bold">linkedin Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("linkedinsquare-div").remove()
                                                    document.getElementById("linkedinsquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("linkedinsquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("linkedinsquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaInstagramSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="instagramsquare-link"><FaInstagramSquare id="instagramsquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="instagramsquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaInstagramSquare />
                                                <span className="fw-bold">Instagram Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("instagramsquare-div").remove()
                                                    document.getElementById("instagramsquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("instagramsquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("instagramsquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaPinterestSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="pinterestsquare-link"><FaPinterestSquare id="pinterestsquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="pinterestsquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaPinterestSquare />
                                                <span className="fw-bold">Pinterest Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("pinterestsquare-div").remove()
                                                    document.getElementById("pinterestsquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("pinterestsquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("pinterestsquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaVimeoSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="vimeosquare-link"><FaVimeoSquare id="vimeosquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="vimeosquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaVimeoSquare />
                                                <span className="fw-bold">Vimeo Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("vimeosquare-div").remove()
                                                    document.getElementById("vimeosquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("vimeosquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("vimeosquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaYoutubeSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="youtubesquare-link"><FaYoutubeSquare id="youtubesquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="youtubesquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaYoutubeSquare />
                                                <span className="fw-bold">Youtube Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("youtubesquare-div").remove()
                                                    document.getElementById("youtubesquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("youtubesquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("youtubesquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaSnapchatSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="snapchatsquare-link"><FaSnapchatSquare id="snapchatsquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="snapchatsquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaSnapchatSquare />
                                                <span className="fw-bold">Snapchat Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("snapchatsquare-div").remove()
                                                    document.getElementById("snapchatsquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("snapchatsquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("snapchatsquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaRedditSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="redditsquare-link"><FaRedditSquare id="redditsquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="redditsquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaRedditSquare />
                                                <span className="fw-bold">Reddit Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("redditsquare-div").remove()
                                                    document.getElementById("redditsquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("redditsquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("redditsquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                            </Stack>
                            <Stack direction='horizontal' gap={2}>
                                <FaRssSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="rsssquare-link"><FaRssSquare id="rsssquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="rsssquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaRssSquare />
                                                <span className="fw-bold">RSS Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("rsssquare-div").remove()
                                                    document.getElementById("rsssquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("rsssquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("rsssquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaTumblrSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="tumblrsquare-link"><FaTumblrSquare id="tumblrsquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="tumblrsquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaTumblrSquare />
                                                <span className="fw-bold">Twitter Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("tumblrsquare-div").remove()
                                                    document.getElementById("tumblrsquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("tumblrsquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("tumblrsquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaMedium onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="mediumsquare-link"><FaMedium id="mediumsquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="mediumsquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaMedium />
                                                <span className="fw-bold">Medium Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("mediumsquare-div").remove()
                                                    document.getElementById("mediumsquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("mediumsquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("mediumsquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaFlickr onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="flickrsquare-link"><FaFlickr id="flickrsquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="flickrsquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaFlickr />
                                                <span className="fw-bold">Flickr Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("flickrsquare-div").remove()
                                                    document.getElementById("flickrsquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("flickrsquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("flickrsquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaGooglePlusSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="googleplussquare-link"><FaGooglePlusSquare id="googleplussquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="googleplussquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaGooglePlusSquare />
                                                <span className="fw-bold">GooglePlus Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("googleplussquare-div").remove()
                                                    document.getElementById("googleplussquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("googleplussquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("googleplussquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                                <FaGithubSquare onClick={(e) => {
                                    setInputIcon(true)
                                    setIcon(icon.concat(<a href="#" id="githubsquare-link"><FaGithubSquare id="githubsquare" /></a>))
                                    setIconSetting(icon_setting.concat(
                                        <div id="githubsquare-div">
                                            <Stack direction='horizontal' gap={2}>
                                                <FaGithubSquare />
                                                <span className="fw-bold">Github Square</span>
                                                <Button variant="close" onClick={(e) => {
                                                    document.getElementById("githubsquare-div").remove()
                                                    document.getElementById("githubsquare-link").remove()
                                                }}></Button>
                                            </Stack>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>Color</InputGroup.Text>
                                                <FormControl
                                                    type='color'
                                                    onChange={(e) => {
                                                        document.getElementById("githubsquare").style.color = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>URL</InputGroup.Text>
                                                <FormControl
                                                    type='text'
                                                    onChange={(e) => {
                                                        document.getElementById("githubsquare-link").href = e.target.value
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>
                                    ))
                                }} />
                            </Stack>
                        </>}
                        <InputGroup>
                            <InputGroup.Text>Upload Icon</InputGroup.Text>
                            <FormControl type='file' onChange={uploadIcon}></FormControl>
                        </InputGroup>
                    </div>
                </div> : <></>}
            {remove ?
                (
                    <Stack direction="horizontal" gap={3} className='icon-div item-border' id={"icon" + id} onClick={handleOpen}>
                        {input_icon ? <> {icon}</> : <><FaFacebook /><FaTwitter /><FaInstagram /></>}
                    </Stack>
                ) :
                (
                    <Drop></Drop>
                )
            }
        </div>
    )
}

export default SocialElement;