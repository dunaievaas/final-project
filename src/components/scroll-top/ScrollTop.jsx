import React from 'react';
import { useEffect, useState } from 'react';
import scrollTop from '../../utilits/scrollTop';
import { IoMdArrowDropupCircle } from "react-icons/io";

function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 120) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button className='btn btn-scroll-top' onClick={scrollTop} style={{ display: isVisible ? 'block' : 'none' }}>
            <IoMdArrowDropupCircle size={'2rem'} />
        </button>
    );
}

export default ScrollTop
