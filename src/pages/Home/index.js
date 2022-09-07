import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () =>
    <div className='container'>
        <div className="blockLeft"
            style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/img/hp_referral_visuelshowcase.webp'}')` }}
        >
            <div className='blockLeft__content'>
                <p><span>Lorem ipsum dolor sit amet</span></p>
                <p><span>Lorem ipsum</span></p>
            </div>
        </div>
        <div className="blockRight">
            <div className='blockRight__content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/exercice2">eventuel lien</Link>
            </div>
        </div>
    </div>

export default Home;