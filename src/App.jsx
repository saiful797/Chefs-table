import './App.css'
import Ourrecipies from './components/Our-recipes/Ourrecipies'
import Recipes from './components/Recipes/Recipes'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Ourrecipies></Ourrecipies>
      <div>
        <Recipes></Recipes>
      </div>
      
    </>
  )
}

export default App
