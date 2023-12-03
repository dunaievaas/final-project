import React from 'react';
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function Footer() {
    return (
        <div className='container'>
            <Link className="logo-home link" to={'/'}>
                <GiKnifeFork />
                Delisious
            </Link>
        </div>
    )
}

export default Footer;
