import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import images from "./assets/data"

function App() {

  return (
    <div>
      <ImageGallery items={images}/>
    </div>
  )
}

export default App
