import culture3 from '../assets/culture3.jpg'
import culture4 from '../assets/culture4.jpg';
import culture1 from '../assets/culture1.jpg';
import wtg2 from '../assets/wtg2.jpg';
import wtg3 from '../assets/wtg3.jpg';
import wtg4 from '../assets/wtg4.jpg';
import wtg5 from '../assets/wtg5.jpg';
import wtg6 from '../assets/wtg6.jpg';


const cards = [

  {
    id: 1,
    title: "Kuyang-Kuyang",
    desc: "Luxury boutique beach resort designed for travelers seeking exclusivity, tranquility, and purpose-driven experiences.",
    img: culture3,
  },
  {
    id: 2,
    title: "Tumba-tumba",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: culture4,
  },
  {
    id: 3,
    title: "Abal-abal",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: culture1,
  },
  {
    id: 4,
    title: "Paper Tree Pecnic Area",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wtg2,
  },
  {
    id: 5,
    title: "Pawicare Hatchery",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wtg3,
  },
  {
    id: 6,
    title: "San Sebastian Catholic Church",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wtg4,
  },
  {
    id: 7,
    title: "Mang Nanny's Cottages",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wtg5,
  },
  {
    id: 8,
    title: "RRL's Acres Resort",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wtg6,
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