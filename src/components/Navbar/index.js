import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';
import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = ({ summary }) => {

    const [isOpen, setIsOpen] = useState(false)


    const menu = () => {
        return (
            <>
                <li key={`hellozerf`} className={`menu m`}>
                    <Link to={`${'menu 1'}`}>Être client</Link>
                </li>
                <li key={`hellofzef`} className={`menu m`}>
                    <Link to={`${'menu 1'}`}>Vos projets</Link>
                </li>
                <li key={`hellofezf`} className={`menu m`}>
                    <Link to={`${'menu 1'}`}>Besoin d'aide?</Link>
                </li>

                <li key={`hellotgte`} className={`menu m`}>
                    <button>
                        <Link to={`${'menu 1'}`}>Devenir client</Link>
                    </button>
                </li>
                <li key={`hellogrzeget`} className={`menu m`}>
                    <button>
                        <Link to={`${'menu 1'}`}>Espace client</Link>
                    </button>
                </li>
            </>
        )
    }

    return (
        <nav>
            <label htmlFor="menu-mobile" className="menu-mobile" onClick={() => setIsOpen(!isOpen)}>
                <h1>hello world</h1>
                <FaHamburger className={ isOpen ? 'is-open' : 'is-close' }/>
            </label>
            <input type="checkbox" id="menu-mobile" role="button" />
            <div className='list'>
                {
                    !isOpen &&
                        <Link to="/home" className="logo__icon">
                            <div className="logo"
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/logo.svg'})` }}
                                ></div>
                        </Link>
                }
                <ul>
                    { menu() }
                </ul>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    // summary: PropTypes.array.isRequired,
}

export default Navbar;