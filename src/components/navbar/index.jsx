
import React, { useState } from 'react'
import { FaBars, FaHome } from 'react-icons/fa'  //FaReact remove
import { HiX } from 'react-icons/hi'
import { GrResume } from "react-icons/gr";
import { Link } from 'react-router-dom'
import {Button} from '../button'
import './style.css'

import logo from '../../assets/large.png'

const data = [
    {
        navIcon : <FaHome />,
        label: 'Home',
        to: '/'
    },
    {
        navIcon : "",
        label: 'Quote',
        to: '/Quote'
    },
    {
        navIcon : "",
        label: 'Resturants',
        to: '/Resturants'
    },
    {
        navIcon : <GrResume />,
        label: 'Foods',
        to: '/Foods'
    },
  
    {
        navIcon : "",
        label: 'Contact',
        to: '/Contact'
    },
]


const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)

    }

    const closeMenu = () => {
        setToggleIcon(false);
    };
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__logo'>
                        {/* <FaReact size={30} /> */}
                        <img src={logo} alt='blank' />
                        <h1 className='navbar__container__logo-name'>GeekFoods</h1>

                    </Link>
                </div>

                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : " "}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className='navbar__container__menu__item'>
                                <Link className='navbar__container__menu__item__links' to={item.to} onClick={closeMenu}>
                                 {item.label}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
                <div className='vertical-center'>
                    <Button borderKaRadius="8px" backgroundKaColor="#1C4ED8" fontColor="#FFFFFF">
                        Get Started
                    </Button>
                </div>

                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>

            </nav>

        </div>
    )
}

export default Navbar;