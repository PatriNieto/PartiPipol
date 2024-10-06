

import Footer from '../components/Footer';
import MyNavBar from '../components/MyNavBar'
import Eventos from '../pages/Eventos';
import Home from '../pages/Home'
import { Routes, Route } from "react-router-dom"; 


function App() {


  return (
    <>

    <MyNavBar />

    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/eventos" element={ <Eventos /> } />
    </Routes>
    
    <Footer />

    </>
  )
}

export default App
