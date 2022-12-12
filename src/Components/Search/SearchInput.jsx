import React from 'react'
import Classes from "./SearchInput.module.css"
function SearchInput() {
  return (
    <div className={Classes.input_div}>
 <form className={Classes.form}>
   <p className={Classes.label}>Search</p>
    <input className={Classes.input}/>
 </form>
      
    </div>
  )
}

export default SearchInput
