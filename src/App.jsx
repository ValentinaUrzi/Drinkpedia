import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Content from './components/content'
import Footer from './components/footer'
import CourseModal from './components/courseModal'
import styles from "./App"
import Popup from './components/popup'
import SideMenu from './components/sideMenu/SideMenu'

function App() {

  const [drinkData, setDrinkData] = useState([])
  const [category, setCategory] = useState('')
  const [isCatVisible, setCatVisibility] = useState(true)
  const [isModalCourseVisible, setModalCourseVisibility] = useState(false)
  const [isPopupVisible, setPopupVisibility] = useState(false)
  const [inputValue, setInputValue] = useState({})
  const [sideMenuVisibile, setSideMenuVisibility] = useState(false)

  return (
    <div className={styles.App}>
      <Navbar sideMenuVisibile={sideMenuVisibile} setSideMenuVisibility={setSideMenuVisibility} setModalCourseVisibility={setModalCourseVisibility} />
      <Hero category={category} setCategory={setCategory} drinkData={drinkData} isCatVisible={isCatVisible} />
      <Content category={category} drinkData={drinkData} setDrinkData={setDrinkData} setCatVisibility={setCatVisibility} />
      <Footer />
      <CourseModal setInputValue={setInputValue} setPopupVisibility={setPopupVisibility} isModalCourseVisible={isModalCourseVisible} setModalCourseVisibility={setModalCourseVisibility} />
      {isPopupVisible ? <Popup inputValue={inputValue} isPopupVisible={isPopupVisible}>
        <h2>Complimenti {inputValue.name}</h2>
        <span>Hai prenotato la tua lezione</span>
        <span>Giorno: {inputValue.date.split("-").reverse().join("-")}</span>
        <span>Ore: {inputValue.time}</span>
      </Popup> : null}
      <SideMenu sideMenuVisibile={sideMenuVisibile}/>
    </div>
  )
}

export default App