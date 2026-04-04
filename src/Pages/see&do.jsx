import '../Pages/see&do.css'

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
    desc: "A traditional halloween  decoration with a skeleton design; commonly made of cardboard with string attached to the arms and legs to make it dance; one of the main features of the tumba-tumba.",
    img: culture3,
  },
  {
    id: 2,
    title: "Tumba-tumba",
    desc: "A shrine put up by Ilokanos every All Souls Days where they pray for their departed; traditionally adorned with flowers made of paper and other indigenous materials; it features a cross or religous image.",
    img: culture4,
  },
  {
    id: 3,
    title: "Abal-abal",
    desc: "A kind of brown, burrowing bettle that usually comes out during may and june and is often cooked as an exotic dish in the northern Philippines.",
    img: culture1,
  },
  {
    id: 4,
    title: "Paper Tree Pecnic Area",
    desc: "Budget-friendly nature spot with no entrance fee, where you only pay for cottages. It’s popular for its cool stream, floating cottages, and optional ATV rides, making it a great family or barkada getaway.",
    img: wtg2,
  },
  {
    id: 5,
    title: "Pawicare Hatchery",
    desc: "Community-led conservation site dedicated to protecting sea turtles (“pawikan”), where visitors can witness hatchling releases, learn about marine biodiversity, and join events like the annual Pawikan Festival every January.",
    img: wtg3,
  },
  {
    id: 6,
    title: "San Sebastian Catholic Church",
    desc: "A historic Catholic parish under the Diocese of Iba, known for its twin towers, large religious murals, and active community life. It serves as both a spiritual center and a heritage landmark in the town.",
    img: wtg4,
  },
  {
    id: 7,
    title: "Mang Nanny's Cottages",
    desc: "A rustic riverside getaway in Barangay Namatacan, known for its bamboo cottages, clear stream, and budget-friendly rates. It’s a popular local spot for family picnics, swimming, and nature relaxation.",
    img: wtg5,
  },
  {
    id: 8,
    title: "RRL's Acres Resort",
    desc: "A riverside nature retreat offering bamboo cottages, picnic areas, and access to the Ballag River. It’s known for its rustic charm, family-friendly atmosphere, and budget-friendly rates, making it a popular local destination.",
    img: wtg6,
  },
];


export default function SeeAndDo() {
    return (
        <>
            <div className='SAD-Main-Cont'>
                <div className='Header1'>
                    <h1 className='h11'>Things To See & Do</h1>
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