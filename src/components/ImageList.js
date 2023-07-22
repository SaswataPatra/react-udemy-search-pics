import ImageShow from "./ImageShow";
import './ImageList.css';
function ImageList({ image }) {
  const renderImages = image.map((img) => {
    return <ImageShow key={img.id} img={img} />;
  });
  return <div className="image-list">{renderImages}</div>;
}

export default ImageList;
