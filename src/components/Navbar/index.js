import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

import useMediaQuery from '../../hooks/UseMediaQuery';

import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = ({ summary }) => {

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
                    {/* !isOpen && 
                            <li key={`helcqqee`} className="test">
                                <Link to={`${'menu 1'}`}><FiSearch/></Link>
                            </li>
                    */}
                    <li key={`hellozerf`} className={`menu m`}>
                        <Link to={`${'menu 1'}`}>Être client</Link>
                    </li>
                    <li key={`hellofzef`} className={`menu m`}>
                        <Link to={`${'menu 1'}`}>Vos projets</Link>
                    </li>
                    <li key={`hellofezf`} className={`menu m`}>
                        <Link to={`${'menu 1'}`}>Besoin d'aide ?</Link>
                    </li>
                </ul>
                <div className='menu__client'>
                    <li key={`hellotgte`} className={`menu m`}>
                        <Link to={`${'menu 1'}`}>
                            <button>Devenir client</button>
                        </Link>
                    </li>
                    <li key={`hellogrzeget`} className={`menu m`}>
                        <Link to={`${'menu 1'}`}>
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