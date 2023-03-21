import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Content from './components/content'
import Footer from './components/footer'
import './App.scss'

function App() {

  const [drinkData, setDrinkData] = useState([])
  const [category, setCategory] = useState('')

  return (
    <div className="App">
      <Navbar />
      <Hero category={category} setCategory={setCategory} drinkData={drinkData} />
      <Content category={category} drinkData={drinkData} setDrinkData={setDrinkData} />
      <Footer />
    </div>
  )
}

export default App