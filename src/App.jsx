import './App.css'
import Ourrecipies from './components/Our-recipes/Ourrecipies'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Ourrecipies></Ourrecipies>
      <div className='flex justify-between mt-10'>
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </div>
      
    </>
  )
}

export default App
