import ImageShow from "./ImageShow";

function ImageList({ image }) {
  const renderImages = image.map((img) => {
    return <ImageShow key={img.id} img={img} />;
  });
  return <div>{renderImages}</div>;
}

export default ImageList;
