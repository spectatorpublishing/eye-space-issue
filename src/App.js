import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Section from "./containers/Section";
import { lenape_articles, morningside_heights_articles, present_day_articles } from "./data/articles";
import { lenape_pins, morningside_heights_pins, present_day_pins, present_day_pins_mobile } from "./data/pins";

const App = () => {
  let isMobile = window.innerWidth <= 768;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lenape-land"
          element={
            <Section
              header="Lenape Land"
              articles={lenape_articles}
              map_url={"https://eye-space.s3.amazonaws.com/Lenape+Land+Map.png"}
              pins={lenape_pins} />} />
        <Route path="/off-campus"
          element={
            <Section
              header="Morningside Heights"
              articles={morningside_heights_articles}
              map_url={"https://eye-space.s3.amazonaws.com/OffCampusMap_Sepia.jpg"}
              pins={morningside_heights_pins} />} />
        <Route path="/present-day"
          element={
            <Section
              header="Present Day"
              articles={present_day_articles}
              map_url={isMobile ?
                "https://eye-space.s3.amazonaws.com/Columbia_Map_Cropped.png" :
                "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/WXWTQLERNVD7XCDIGHFXGFXZZI.png"}
              pins={isMobile ? present_day_pins_mobile : present_day_pins} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
