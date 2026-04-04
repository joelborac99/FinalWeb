import culture3 from '../assets/culture3.jpg'
import culture4 from '../assets/culture4.jpg';
import culture1 from '../assets/culture1.jpg';
import wte1 from '../assets/wte1.jpg';
import wte2 from '../assets/wte2.jpg';
import wte3 from '../assets/wte3.jpg';
import wte4 from '../assets/wte4.jpg';
import wte5 from '../assets/wte5.jpg';
import wte6 from '../assets/wte6.jpg';
import wte7 from '../assets/wte7.jpg';


const cards = [

  {
    id: 1,
    title: "Kuyang-Kuyang",
    desc: "Luxury boutique beach resort designed for travelers seeking exclusivity, tranquility, and purpose-driven experiences.",
    img: wte1,
  },
  {
    id: 2,
    title: "Tumba-tumba",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wte2,
  },
  {
    id: 3,
    title: "Abal-abal",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wte3,
  },
  {
    id: 4,
    title: "Paper Tree Pecnic Area",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wte4,
  },
  {
    id: 5,
    title: "Pawicare Hatchery",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wte5,
  },
  {
    id: 6,
    title: "San Sebastian Catholic Church",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wte6,
  },
  {
    id: 7,
    title: "Mang Nanny's Cottages",
    desc: "Budget-friendly beachfront stay with a family-oriented atmosphere, clean rooms, and direct access to the sea.",
    img: wte7,
  },
  
];


export default function EatAndDrink() {
    return (
        <>
            <div className='SAD-Main-Cont'>
                <div className='Header1'>
                    <h1 className='h11'>Places To Eat And Drink</h1>
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