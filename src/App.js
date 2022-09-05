import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Section from "./containers/Section";
import { lenape_articles, off_campus_articles, present_day_articles } from "./data/articles";
import { lenape_pins, off_campus_pins, present_day_pins} from "./data/pins";

const App = () => {
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
              pins={lenape_pins}/>} />
        <Route path="/off-campus" 
          element={
            <Section 
              header="Off Campus" 
              articles={off_campus_articles} 
              map_url={"https://eye-space.s3.amazonaws.com/OffCampusMap_Sepia.jpg"}
              pins={off_campus_pins}/>} />
        <Route path="/present-day" 
          element={
            <Section 
              header="Present Day" 
              articles={present_day_articles} 
              map_url={"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/WXWTQLERNVD7XCDIGHFXGFXZZI.png"}
              pins={present_day_pins}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
