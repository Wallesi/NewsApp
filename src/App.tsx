
import './App.css'
import Economics from './Components/Economics';
import NavBar from './Components/NavBar'
import HomeNews from './Components/NewsHomeChart'

export const BDD_URL = "https://newsapi.org/v2/everything?q=argentina&apiKey=a3aeae7b68034752a63e1703ded74468";

function App() {
  

  return (
    <div>
      <NavBar/>
      <HomeNews/>
      <Economics/>
    </div>
  )
}

export default App
