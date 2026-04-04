import '../Pages/ourcommunities.css';
import Surf from '../assets/Surf.jpeg';
import SanVista from '../assets/SanVista.jpg';
import Camp from '../assets/Camp.jpg';
import Pawicare from '../assets/Pawicare.jpg'

const Ideal = [
    {
        id: 1,
        bold: 'Surfing and Beaches',
        img: Surf,
    },
    {
        id: 2,
        bold: 'Dining',
        img: SanVista,
    },
    {
        id: 3,
        bold: 'Relaxation',
        img: Camp,
    },
    {
        id: 4,
        bold: 'Cultural Experience',
        img: Pawicare,
    },
]

export default function OurCommunities() {
    return (
        <>
            <div className="mainCommunitiesBody">
                <div className="HeadNumber1">
                    <p className="CText">Our Communities</p>
                    <p className="CTextDown">Our towns are famously warm and welcoming - learn more about them here before your visit.</p>
                </div>
                <div className="HeadNumber2">
                    {Ideal.map((just) => (
                        <div className='kk'>
                        <img src={just.img} className='kkk' />
                        <p>{just.bold}</p>
                        </div>
                    )
                    )}
                    
                </div>
            </div>
        </>
    )
}