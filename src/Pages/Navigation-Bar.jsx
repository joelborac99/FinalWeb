import './Navigation-Bar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';

export default function Navigation_Bar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="Nav-Container">
                
                <div className='Text' onClick={() => navigate('/Home')}>
                    
                    <p className='p1'>San Narciso</p>
                    <p className='p2'>Zambales</p>
                    
                </div>
                <div className='NavBar'>
                    <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <ul className={`NavParentCont ${menuOpen ? "active" : ''}`}>
                        <li>
                            <Link className='Linkin' to="/SEE&DO" onClick={() => setMenuOpen(false)}>
                                SEE & DO
                            </Link>
                        </li>
                        <li>
                            <Link className='Linkin' to="/STAY" onClick={() => setMenuOpen(false)}>
                                STAY
                            </Link>
                        </li>
                        <li>
                            <Link className='Linkin' to="/EAT&DRINK" onClick={() => setMenuOpen(false)}>
                                EAT & DRINK
                            </Link>
                        </li>
                        <li>
                            <Link className='Linkin' to="/OURCOMMUNITIES" onClick={() => setMenuOpen(false)}>
                                OUR COMMUNITIES
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}