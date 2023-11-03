import { BrowserRouter, Route, Routes } from "react-router-dom";
import SampleCard from "./ListCards/SampleCards/SampleCard.tsx";
import yudai from "./ListCards/yudai/yudai.tsx";
import Home from "./Pages/Home.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* サンプルを参考にルータをコピペしてください */}
        <Route path="/" element={<Home />} />
        <Route path="/samplecards" element={<SampleCard />} />
        <Route path="/yudai" element= {<yudai />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
