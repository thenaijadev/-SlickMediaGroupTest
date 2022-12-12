import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Hero from '../Components/Hero/Hero';
import SearchInput from '../Components/Search/SearchInput';
import Carousel from '../Components/Carousel/Carousel';

function Home() {
  const Categories = [{id: Math.random(),categorie:"Action"},{id: Math.random(),categorie:"Comedy"}]
  return (
    <div>
      <NavBar/>
      <Hero/>
      <SearchInput/>
      {Categories.map(categorie=>{
        return <Carousel categorie={categorie.categorie} key={categorie.id}/>
      })}
    </div>
  )
}

export default Home
