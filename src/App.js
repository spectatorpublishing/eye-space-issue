import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Section from "./containers/Section";
import NavBar from "./components/NavBar";
import { lenape_articles, lenape_pins } from "./data/articles";
import { columbia_articles, columbia_pins } from "./data/articles";
import { off_campus_articles, off_campus_pins} from "./data/articles";
import { present_day_articles, present_day_pins } from "./data/articles";
import { map_urls } from "./data/articles";

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
        <Route path="/columbia" 
          element={
            <Section 
              header="Columbia University" 
              articles={columbia_articles} 
              map_url={"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/WXWTQLERNVD7XCDIGHFXGFXZZI.png"}
              pins={columbia_pins}/>} />
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
