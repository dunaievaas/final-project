import React from 'react';
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";

function Footer() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 col-sm-12'>
                    <Link className="logo-home link" to={'/'}>
                        <GiKnifeFork />
                        Delisious
                    </Link>
                    <p>Copyrights © 2023 Delisious</p>
                </div>
                <div className='col-6 col-sm-12'>
                    <div className='footer__social-list'>
                        <a href='https://uk-ua.facebook.com/' target='blank'><ImFacebook2 size={'2rem'} /></a>
                        <a href='https://www.instagram.com/' target='blank'><ImInstagram size={'2rem'} /></a>
                        <a href='https://twitter.com/?lang=ru' target='blank'><ImTwitter size={'2rem'} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
