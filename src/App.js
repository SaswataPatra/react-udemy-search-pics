import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import {useState} from 'react';
import ImageList from "./components/ImageList";
function App() {
    const [images,setImages] = useState([]);

    const handleSubmit = async(term) =>{
        // console.log(`do a search with ${term}`);
       const result =  await searchImages(term);
    //    console.log(result);
        setImages(result);
    }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList image={images}/>
    </div>
  );
}

export default App;
