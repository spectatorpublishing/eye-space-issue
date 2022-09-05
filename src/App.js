import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Section from "./containers/Section";
import { lenape_articles } from "./data/articles";
import { columbia_articles } from "./data/articles";
import { off_campus_articles } from "./data/articles";
import { present_day_articles } from "./data/articles";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lenape-land" element={<Section header="Lenape Land" articles={lenape_articles}/>} />
        <Route path="/columbia" element={<Section header="Columbia University" articles={columbia_articles}/>} />
        <Route path="/off-campus" element={<Section header="Off Campus" articles={off_campus_articles}/>} />
        <Route path="/present-day" element={<Section header="Present Day" articles={present_day_articles}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
