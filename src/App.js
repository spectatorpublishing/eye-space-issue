import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Home';
import Section from "./containers/Section";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lenape-land" element={<Section header="Lenape Land" />} />
        <Route path="/columbia" element={<Section header="Columbia University" />} />
        <Route path="/off-campus" element={<Section header="Off Campus" />} />
        <Route path="/present-day" element={<Section header="Present Day" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
