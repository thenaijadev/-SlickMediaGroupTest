import React from 'react'
import Classes from "./Carousel.module.css";
import MovieItem from './MovieItem';
function Carousel({categorie}) {
const years = [{id:Math.random(),year:2000},{id:Math.random(),year:2001},{id:Math.random(),year:2002},{id:Math.random(),year:2003},{id:Math.random(),year:2004},{id:Math.random(),year:2005},{id:Math.random(),year:2006},{id:Math.random(),year:2007},{id:Math.random(),year:2008},{id:Math.random(),year:2009},{id:Math.random(),year:2010},{id:Math.random(),year:2011},]
  return (
    <div className={Classes.parent}>
      <h3 className={Classes.categorie_text}>{categorie}</h3>
      <div className={Classes.carousel}>
        {years.map(year=>{
            return <MovieItem key={year.id} year={year.year} categorie={categorie}/>
        })}
     
      </div>
    </div>
  )
}

export default Carousel
