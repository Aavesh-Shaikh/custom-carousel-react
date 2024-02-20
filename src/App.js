import logo from "./logo.svg";
import "./App.css";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import img1 from "./components/ImageSlider/2499504-cover.jpg";
import img2 from "./components/ImageSlider/G03.jpg";
import img3 from "./components/ImageSlider/pngimg.com - iphone_14_PNG20.png";
import img4 from "./components/ImageSlider/9fc9779a9bb24cb9a5ba.png";
function App() {
  const images = [img1, img2, img3];
  return (
    <>
      <ImageSlider images={images} />
    </>
  );
}

export default App;
