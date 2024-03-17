import './App.css'
import Ourrecipies from './components/Our-recipes/Ourrecipies'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Recipies from './components/recipies/Recipies'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Ourrecipies></Ourrecipies>
      <div className='flex'>
          <Recipies></Recipies>

      </div>
    </>
  )
}

export default App
