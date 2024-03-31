import React, { useState } from 'react';
import headIcon from '../assets/icon/film icon.svg'
import vueIcon from '../assets/icon/vue.svg'
import { IoIosMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>

            <header className="header">
                <div className="header__top">
                    <img className='header__img' src={headIcon} alt="" />
                    <p className='header__top-txt'>See no special offer restrictions</p>
                </div>
                <nav className="nav">
                    <div className="container">
                        <div className="nav__box">
                            <a href="#!" className='nav__logo'>
                                <img  src={vueIcon} alt="" />
                                CINEMAS
                            </a>
                            <a href="#!" className='menu' onClick={()=>setOpen(!open)} >
                                <IoIosMenu  />
                            </a>
                            <a href="#!" className={`close ${open ? 'visible' : ''}`} onClick={() => setOpen(false)}>
                                <IoCloseCircleOutline />
                             </a>

                            <ul className={`nav__list ${open ? 'open' : ''}`}>
                                <li><a href="#!" className="nav__link"><span>Films</span></a></li>
                                <li><a href="#!" className="nav__link"><span>Serials</span></a></li>
                                <li><a href="#!" className="nav__link"><span>Cartoons</span></a></li>
                                <li><a href="#!" className="nav__link"><span>Collections</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="intro">
                    <div className="container">
                        <h1 className="intro__title">Kong: Skull Island</h1>
                        <p className="intro__text">
                            The film takes the viewer to the 70s of the last century. The protagonist organizes an expedition to the Skull island, always covered in fog, on which King Kong was once caught to find the missing brother and some mysterious substance. During...
                        </p>
                        <div className="intro__info">
                            <a href="#!" className='intro__link'>Watch now</a>
                            <a href="#!" className='intro__link'>Download</a>
                        </div>
                    </div>
                </div>
            </header>

        </React.Fragment>
    )
}

export default Header