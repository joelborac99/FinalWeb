import Navigation_Bar from './Pages/Navigation-Bar'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import SeeAndDo from './Pages/see&do';
import OurCommunities from './Pages/ourcommunities';
import Stay from './Pages/stay';
import EatAndDrink from './Pages/eat&drink';
import Home from './Pages/Home';


function App() {
  return (
    <>
      <Navigation_Bar />
      
      <Routes>
        <Route path='/' element={<Navigate to="/Home" replace />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/SEE&DO' element={<SeeAndDo />} />
        <Route path='/STAY' element={<Stay />} />
        <Route path='/EAT&DRINK' element={<EatAndDrink />} />
        <Route path='/OURCOMMUNITIES' element={<OurCommunities />} />
      </Routes>
    </>
  )
}

export default App