import {useState} from 'react';
import './SearchBar.css';
function SearchBar({onSubmit}) {
    const [term,setTerm] = useState('');
const handleFormSubmit =(event) =>{
    event.preventDefault();
    // console.log("hey do something");
    onSubmit(term);
}
const handleChange = (event) =>{
    // console.log(event.target.value);
    setTerm(event.target.value);
}
  return (
    <div className='search-bar'>
    <label>Enter your search item</label>
      <form onSubmit={handleFormSubmit}>
        <input value ={term} onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default SearchBar;
