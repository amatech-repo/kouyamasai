import { BrowserRouter, Route, Routes } from "react-router-dom";
import SampleCard from "./ListCards/SampleCards/SampleCard.tsx";
// 以下の参考例をコピーし、**を修正してください
// 参考例: import ** from "./ListCards/**/**.tsx";
import Fuma from "./ListCards/Fuma/Fuma.tsx";
import Jojo from "./ListCards/Jojo/Jojo.tsx";
import Takutaku from "./ListCards/Takutaku/Takutaku.tsx";
import YoshikawaMasaya from "./ListCards/YoshikawaMasaya/YoshikawaMasaya.tsx";
import Home from "./Pages/Home.tsx";
import Kouki from "./ListCards/Kouki/Kouki.tsx";
import Saori from "./ListCards/Saori/Saori.tsx";
import Kouchan from "./ListCards/Kouchan/Kouchan.tsx";
import Yumino from "./ListCards/Yumino/Yumino.tsx";
import MizoguchiNatsuki from "./ListCards/MizoguchiNatsuki/MizoguchiNatsuki.tsx";
import Yukkun from "./ListCards/Yukkun/Yukkun.tsx";
import Haruka from "./ListCards/Haruka/Haruka.tsx";
import Haruki from "./ListCards/Haruki/Haruki.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 以下の参考例をコピーし、**を修正してください */}
        {/* 参考例: <Route path="/**" element={<** />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/samplecards" element={<SampleCard />} />
        <Route path="/fuma" element={<Fuma />} />
        <Route path="/kouki" element={<Kouki />} />
        <Route path="/Jojo" element={<Jojo />} />
        <Route path="/Saori" element={<Saori />} />
        <Route path="/Kouchan" element={<Kouchan />} />
        <Route path="/Yumino" element={<Yumino />} />
        <Route path="/MizoguchiNatsuki" element={<MizoguchiNatsuki />} />
        <Route path="/takutaku" element={<Takutaku />} />
        <Route path="/fuma" element={<YoshikawaMasaya />} />
        <Route path="/YoshikawaMasaya" element={<YoshikawaMasaya />} />
        <Route path="/Yukkun" element={<Yukkun />} />
        <Route path="/Haruka" element={<Haruka />} />
        <Route path="/Haruki" element={<Haruki />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
