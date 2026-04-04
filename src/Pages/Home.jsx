import { useEffect, useState } from 'react';
import '../Pages/Home.css';
import Slide1 from '../assets/SunSet.jpg'
import Slide2 from '../assets/tumba2.jpg'
import wtg1 from '../assets/WTG1.jpg'

import { useNavigate } from 'react-router-dom';

const slides = [
    {
        image: Slide1,
        title: 'Plenty of open space for',
        bold: 'adventurous folk',
    },
    {
        image: Slide2,
        title: 'Discover the beauty of',
        bold: 'the wild outdoors',
    },
    {
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80',
        title: 'Journey beyond the',
        bold: 'horizon awaits you',
    },
    {
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80',
        title: 'Wide open roads for',
        bold: 'the free spirit',
    },
];

const MapCard = [
    {
        id: 1,
        title: 'See & Do',
        desc: 'Best known for its laid-back surf culture, scenic beaches like Crystal Beach, and natural attractions such as waterfalls and coastal roads. You’ll find a mix of adventure (surfing, hiking) and relaxation (beach resorts, coffee shops) all within this charming town.',
        img: wtg1,
        route: '/SEE&DO',
    },
    {
        id: 2,
        title: 'Places to stay',
        desc: 'Best known for its laid-back surf culture, scenic beaches like Crystal Beach, and natural attractions such as waterfalls and coastal roads. You’ll find a mix of adventure (surfing, hiking) and relaxation (beach resorts, coffee shops) all within this charming town.',
        img: wtg1,
        route: '/STAY',
    },
    {
        id: 3,
        title: 'Eat & Drinks',
        desc: 'Best known for its laid-back surf culture, scenic beaches like Crystal Beach, and natural attractions such as waterfalls and coastal roads. You’ll find a mix of adventure (surfing, hiking) and relaxation (beach resorts, coffee shops) all within this charming town.',
        img: wtg1,
        route: '/EAT&DRINK',
    },
]

export default function Home() {
    const [current, setCurrent] = useState(0);
    const [fading, setFading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % slides.length);
                setFading(false);
            }, 600);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goTo = (index) => {
        if (index === current) return;
        setFading(true);
        setTimeout(() => {
            setCurrent(index);
            setFading(false);
        }, 600);
    };

    return (
        <>
            <div className="Main-Container1">
                <div className={`Slide ${fading ? 'fade-out' : 'fade-in'}`}>
                    <img
                        src={slides[current].image}
                        alt={slides[current].bold}
                        className="Slide-Image"
                    />
                    <div className="Slide-Overlay" />
                    <div className="Slide-Text">
                        <p>{slides[current].title}</p>
                        <strong>{slides[current].bold}</strong>
                    </div>
                </div>

                <div className="Slide-Dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`Dot ${i === current ? 'active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
                
            </div>
            <div className='P-Cont'>
                <div className="InCont">
                    <h1 className='H1'>Welcome to San Narciso</h1>
                    <p className='P'>Sitting at the heart of centralwest Central Luzon, the Zambales 
                        region enjoys four beautiful seasons across a diverse 
                        landscape that unfolds beneath wide open skies. There 
                        are rolling golden plains punctuated by rivers and 
                        spectacular Beaches. Our bushland is home to unique flora and fauna.</p>
                        <p className='P'>Our towns are famously warm and welcoming and you will enjoy 
                            the best of country hospitality during your time here. There
                             are many museums and historical societies spread amongst our 
                             towns whose volunteers would be only too happy to help arrange
                              tours for you. Special events held throughout the year include 
                              horse race meetings, music festivals and country shows to name 
                              a few.</p>
                        <p className='P'>We look forward to welcoming you to the Zambales region, where there's plenty of room to grow.</p>
                        <h2 className='H2'>Discover Our Communities</h2>
                        <div className='Buttonss'>
                            <button className='ButtonEdit'>Rivers</button>
                            <button className='ButtonEdit'>Beaches</button>
                            <button className='ButtonEdit'>Water Activities</button>
                            <button className='ButtonEdit'>Arts</button>
                            
                        </div>
                        
                </div>  
                <div className="Third-Container">
                            <h1 className='H1'>Explore San Narciso</h1>
                            <div className='DDD'>
                            {MapCard.map((mapcard) =>(
                                <div className='MapCard' key={mapcard.id} 
                                            onClick={() => navigate(mapcard.route)}
                                            style={{ cursor: 'pointer' }}
                                >
                                    <div className='Card-Img'>
                                        <img src={mapcard.img} alt={mapcard.title} className='Cardss' />
                                    </div>
                                    <div className='SSS'>
                                        <div className='Card-Title'>{mapcard.title}</div>
                                        <div className='Card-dess'>{mapcard.desc}</div>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            ))}
                            </div>
                    </div>      
                    <div className='Loaded'>
                            <div className='BackDrop'>
                                <div className='inside'>
                                    <span className='Text1'>Loaded with beaches</span>
                                    <span className='Text2'>Enjoy spending time with your family and friends at one of our beautiful lakes for a spot of fishing, swimming and water skiing.</span>
                                    <button className='Btn1'>Discover our beaches</button>
                                </div>
                            </div>
                    </div>

                    <div className='Forth-Container'>
                        <div className='Topp'>
                            <h1>Getting to San Narciso</h1>
                            <p>The San Narciso is situated roughly halfway between San Felipe and San Marcelino.</p>
                        </div>
                        <div className='Map'></div>
                    </div>
                    <div className='Footer'>
                        <div className='Footer1'>
                            <div className='footer num1'>
                                <p className='footerheader'>Navigate</p>
                                <p className='footerlink'>Home</p>
                                <p className='footerlink'>Contact</p>
                                <p className='footerlink'>Things to do</p>
                                <p className='footerlink'>Place to stay</p>
                                <p className='footerlink'>Where to eat and drink</p>
                                <p className='footerlink'>Our Communities</p>
                                <p className='footerlink'>Dashboard</p>

                            </div>
                            <div className='footer num2'>
                                <p className='footerheader'>Explore</p>
                                <p className='footerlink'>Camping</p>
                                <p className='footerlink'>History</p>
                                <p className='footerlink'>Nature Walks</p>
                                <p className='footerlink'>Parks & Playground</p>
                            </div>
                            <div className='footer num3'>
                                <p className='footerheader'>About us</p>
                                <p className='footerlink'>About San Narciso</p>
                                <p className='footerlink'>Privacy Policy</p>
                                <p className='footerlink'>Term of use</p>

                            </div>
                            <div className='footer num4'>
                                <p className='footerheader'>Social</p>
                                <p className='footerlink'>Instagram</p>
                                <p className='footerlink'>Facebook</p>
                            </div>
                        </div>
                        <div className='Footer2'>
                                <p className='footerlink'>Copyright © San Narciso Tourism Board 2026. All rights reserved.</p>
                        </div>
                    </div>
            </div>
        </>
    );
}