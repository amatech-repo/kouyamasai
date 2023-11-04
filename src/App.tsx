import { BrowserRouter, Route, Routes } from "react-router-dom";
import SampleCard from "./ListCards/SampleCards/SampleCard.tsx";
import Home from "./Pages/Home.tsx";
import CardDetail from "./CardDetail.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/samplecards" element={<SampleCard />} />
        <Route path="/:cardName" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
