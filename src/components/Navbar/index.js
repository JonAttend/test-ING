import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

import useMediaQuery from '../../hooks/UseMediaQuery';

import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {

    const isMobile = useMediaQuery('(max-width: 768px)');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log('isMobile : ', isMobile);

        console.log('isOpen : ', isOpen);
        return () => null;
      }, [isMobile, isOpen]);

    return (
        <nav>
            <label htmlFor="menu-mobile" className="menu-mobile" >
                <BiMenuAltLeft 
                    className={ isOpen ? 'is-open' : 'is-close' }
                    onClick={() => setIsOpen(!isOpen)}
                />
                <Link to="/home" className="logo__icon">
                    <div className="logo__mobile"
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/logo.svg'})` }}
                    >
                    </div>
                </Link>
                <div className='menu__right'>
                    <Link to="/search" className="search__icon">
                        <FiSearch />
                    </Link>
                    <Link to="/profil" className="user__icon">
                        <FaUser />
                    </Link>
                </div>
            </label>
            <input type="checkbox" id="menu-mobile" role="button" />
            <div className='list'>
                {
                    !isOpen &&
                        <Link to="/home" className="logo__icon">
                            <div className="logo"
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/logo.svg'})` }}
                                ></div>
                        </Link> 
                }
                <ul>
                    {   
                        !isOpen && 
                        !isMobile && 
                            <li>
                                <Link to="/search">
                                    <FiSearch/>
                                </Link>
                            </li>
                    }
                    <li>
                        <Link to="/client">Être client</Link>
                    </li>
                    <li>
                        <Link to="/vos-projets">Vos projets</Link>
                    </li>
                    <li>
                        <Link to="/help">Besoin d'aide ?</Link>
                    </li>
                </ul>
                <div className='espace__client'>
                    <li>
                        <Link to="/sign-in">
                            <button>Devenir client</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <button>Espace client</button>
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    // summary: PropTypes.array.isRequired,
}

export default Navbar;