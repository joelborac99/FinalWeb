// src/Pages/see&do.jsx  — replace the cards array and component with:
import { useEffect, useState } from 'react';
import '../Pages/see&do.css';
// keep your image imports for fallback

export default function SeeAndDo() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/see-and-do')
            .then(res => res.json())
            .then(data => {
                setCards(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div className='SAD-Main-Cont'>
                <div className='Header1'>
                    <h1 className='h11'>Things To See & Do</h1>
                    <h2 className='h22'>Browse all of the attractions to visit around San Narciso.</h2>
                </div>
                <div className='Card'>
                    {cards.map((card) => (
                        <div className="card" key={card.id}>
                            <div className="card-img-wrapper">
                                <img src={card.image_url} alt={card.title} className="card-img" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">{card.title}</div>
                                <div className="card-desc">{card.description}</div>
                                <p>Learn More...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}