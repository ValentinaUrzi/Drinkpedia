import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Content from './components/content'
import Footer from './components/footer'
import styles from "./App.module.scss"

function App() {

  const [drinkData, setDrinkData] = useState([])
  const [category, setCategory] = useState('')
  const [isCatVisible, setCatVisibility] = useState(true)

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero category={category} setCategory={setCategory} drinkData={drinkData} isCatVisible={isCatVisible} />
      <Content category={category} drinkData={drinkData} setDrinkData={setDrinkData} setCatVisibility={setCatVisibility} />
      <Footer />
    </div>
  )
}

export default App