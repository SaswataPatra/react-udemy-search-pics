function SearchBar({onSubmit}) {
    const handleClick = () =>{
        onSubmit('cars');
    }
  return (
    <div>
      <input></input>
      <button onClick={handleClick}>click me!</button>
    </div>
  );
}

export default SearchBar;
