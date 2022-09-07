import React from 'react';
import './styles.scss';

const Home = () =>
    <div className='container'>
        <div className="blockLeft"
            style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/img/hp_referral_visuelshowcase.webp'}')` }}
        >
        </div>
        <div className="blockRight">
            
        </div>
    </div>

export default Home;