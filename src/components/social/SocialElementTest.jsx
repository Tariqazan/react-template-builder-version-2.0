import React, { useState } from 'react'

import {
    FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterest, FaVimeo, FaYoutube, FaSnapchat, FaReddit, FaFacebookMessenger,
    FaTripadvisor, FaMeetup, FaProductHunt, FaRss, FaTumblr, FaSpotify, FaSoundcloud, FaApple, FaYelp, FaMedium,
    FaSkype, FaFlickr, FaGithub, FaGooglePlus, FaDiscord, FaTelegram, FaMailBulk
} from "react-icons/fa";

function SocialElementTest() {
    const [icon, setIcon] = useState([])
    return (
        <>
            {icon.map((i) => (
                <>{i.icon}</>
            ))}
            <div className="sidenav">
                <FaFacebook 
                onClick={setIcon((icon) => [...icon, { 'id': icon.length, 'icon': <FaFacebook /> }])} />
                <FaInstagram 
                onClick={setIcon((icon) => [...icon, { 'id': icon.length, 'icon': <FaInstagram /> }])} />
            </div>
        </>
    )
}

export default SocialElementTest