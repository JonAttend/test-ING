import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () =>
    
    <div className='container'>
        
        <div className='section-1'>
            <div className="section-1__blocLeft" style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/img/hp_referral_visuelshowcase.webp'}')` }}>
                <div className='section-1__blocLeft__content'>
                    <p>Lorem ipsum dolor sit amet</p><br/>
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div className="section-1__blocRight">
                <div className='section-1__blocRight__content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/exercice2">
                        <button>Souscrire maintenant</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className='section-2'>
            <div className='section-2__blocLeft'>
                <div className='section-2__blocLeft__content'>
                    <p>ING, c’est un peu moins de banque et beaucoup plus de liberté.</p>
                </div>
            </div>
            <div className='section-2__blocRight'>
                <div className="section-2__blocRight__content" 
                    style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/img/hp_referral_visuelshowcase.webp'}')` }}>
                </div>
            </div>
        </div>
            
    </div>

export default Home;