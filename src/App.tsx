import './App.css'
import NavBar from './Components/NavBar'
import HomeNews from './Components/Pages/NewsHomeChart'
import {Routes,Route} from 'react-router-dom';
//Pages
import Economics from './Components/Pages/Economics';
import Sports from './Components/Pages/Sports';
import Politics from './Components/Pages/Politics';
import Footer from './Components/Footer';

export const BDD_URL = "https://newsapi.org/v2/everything?q=argentina&pageSize=15&apiKey=a3aeae7b68034752a63e1703ded74468";

function App() {
  

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomeNews/>}></Route>
        <Route path='/economics' element={<Economics/>}></Route>
        <Route path='/sports' element={<Sports/>}></Route>
        <Route path='/politics' element={<Politics/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
