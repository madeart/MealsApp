import { useState } from "react"
import { useGlobalContext } from "../context"

const Search = () => {

  const [text,setText] = useState('')

  const {setSearchTerm,fetchRandomMeal}=useGlobalContext()
  
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(text){
      setSearchTerm(text)
      //setText('')
    }  
  }
   const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }
  
   return <header className='search-container'>
    <form onSubmit={handleSubmit} >
      <input type='text'onChange={handleChange}  placeholder='type favorite meal' value={text} className='form-input' />
      <button type="submit" className="btn">search</button>
      <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>suprise me !</button>
    </form>
  </header>
}
export default Search