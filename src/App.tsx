import { BrowserRouter, Route, Routes } from "react-router-dom";
import SampleCard from "./ListCards/SampleCards/SampleCard.tsx";
import Fuma from "./ListCards/fuma/Fuma.tsx";
import Home from "./Pages/Home.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* サンプルを参考にルータをコピペしてください */}
        {/*path名をディレクトリ名に合わせてください */}
        {/* elementをファイル名に合わせてください */}
        <Route path="/" element={<Home />} />
        <Route path="/samplecards" element={<SampleCard />} />
        <Route path="/fuma" element={Fuma />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
