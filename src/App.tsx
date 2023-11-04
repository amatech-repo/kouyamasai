import { BrowserRouter, Route, Routes } from "react-router-dom";
import SampleCard from "./ListCards/SampleCards/SampleCard.tsx";
import Home from "./Pages/Home.tsx";
import CardDetail from "./CardDetail.tsx";
// 以下の参考例をコピーし、**を修正してください
// 参考例: import ** from "./ListCards/**/**.tsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 以下の参考例をコピーし、**を修正してください */}
        {/* 参考例: <Route path="/**" element={<** />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/samplecards" element={<SampleCard />} />

        <Route path="/:cardName" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
