import { useState } from 'react'
import './App.css'
import Ourrecipies from './components/Our-recipes/Ourrecipies'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

function App() {
  const [cook, setCook] = useState([])
  const [currentlyCoking, setCurrentlyCooking] = useState([])

  const handleRecipeCards = (cookCard) => {
    const newCookCards =[...cook, cookCard];
    setCook(newCookCards);
  }

  const handleCurrentlyCookingItems = () => {
    console.log('Process was Done!');
  }
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Ourrecipies></Ourrecipies>
      <div className='flex-col-1  lg:flex justify-between mt-10 space-y-5'>
        <Recipes handleRecipeCards={handleRecipeCards}></Recipes>
        <Sidebar cook = {cook} handleCurrentlyCookingItems={handleCurrentlyCookingItems}></Sidebar>
      </div>
      
    </>
  )
}

export default App
