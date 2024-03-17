import { useState } from 'react'
import './App.css'
import Ourrecipies from './components/Our-recipes/Ourrecipies'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

function App() {
  const [cook, setCook] = useState([])

  const handleRecipeCards = (cookCard) => {
    const newCookCards =[...cook, cookCard];
    setCook(newCookCards);
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Ourrecipies></Ourrecipies>
      <div className='flex justify-between mt-10'>
        <Recipes handleRecipeCards={handleRecipeCards}></Recipes>
        <Sidebar cook = {cook}></Sidebar>
      </div>
      
    </>
  )
}

export default App
