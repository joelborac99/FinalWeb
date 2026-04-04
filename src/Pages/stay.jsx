import culture3 from '../assets/culture3.jpg'
import culture4 from '../assets/culture4.jpg';
import culture1 from '../assets/culture1.jpg';
import wts1 from '../assets/wts1.jpg';
import wts2 from '../assets/wts2.jpg';
import wts3 from '../assets/wts3.jpg';
import wts4 from '../assets/wts4.jpg';
import wts5 from '../assets/wts5.jpg';
import wts6 from '../assets/wts6.jpg';
import wts7 from '../assets/wts7.jpg';


const cards = [

  {
    id: 1,
    title: "Crystal Beach Resort",
    desc: "Luxury boutique beach resort designed for travelers seeking exclusivity, tranquility, and purpose-driven experiences.",
    img: wts1,
  },
  {
    id: 2,
    title: "Zambawood Resort",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wts2,
  },
  {
    id: 3,
    title: "Prince JB Beach Resort",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wts3,
  },
  {
    id: 4,
    title: "Mope Beach Resort",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wts4,
  },
  {
    id: 5,
    title: "Johneva Beach Resort and Campsite",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wts5,
  },
  {
    id: 6,
    title: "The Palms Resort & Bar",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wts6,
  },
  {
    id: 7,
    title: "Dyay Abong Resort",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wts7,
  },
  
];


export default function Stay() {

    
    return (
        <>
            <div className='SAD-Main-Cont'>
                <div className='Header1'>
                    <h1 className='h11'>Place To Stay</h1>
                    <h2 className='h22'>Browse all of the attractions to visit around the Buloke region.</h2>
                </div>
                <div className='Card'>
                    {cards.map((card) => (
                        <div className="card" key={card.id}>
                        <div className="card-img-wrapper">
                            <img src={card.img} alt={card.title} className="card-img" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">{card.title}</div>
                            <div className="card-desc">{card.desc}</div>
                            <p>Learn More...</p>
              </div>
            </div>
          ))}
                </div>           
            </div>
        </>
    )
}