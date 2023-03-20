import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Content from './components/content'
import Footer from './components/footer'
import './App.scss'

function App() {

//   const filterCat = (cat) => {
//     const filteredCat = drinkData.filter(drink => drink.strCategory !== cat)
//     setDrinkData(filteredCat)
//   }

const [drinkData, setDrinkData] = useState([])

return (
  <div className="App">
    <Navbar />
    <Hero drinkData={drinkData} setDrinkData={setDrinkData} />
    <Content setDrinkData={setDrinkData} />
    <Footer />
  </div>
)
}

export default App