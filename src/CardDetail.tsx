import { useParams } from "react-router-dom";
// 最後尾に新しいimport文を追加してください
// 参考例: import SampleCard from "./ListCards/SampleCard/SampleCard";
import Fuma from "./ListCards/Fuma/Fuma";
import Takutaku from "./ListCards/Takutaku/Takutaku";
import YoshikawaMasaya from "./ListCards/YoshikawaMasaya/YoshikawaMasaya";
import MizoguchiNatsuki from "./ListCards/MizoguchiNatsuki/MizoguchiNatsuki";
import Haruki from "./ListCards/Haruki/Haruki";
import Haruka from "./ListCards/Haruka/Haruka";
import Kouki from "./ListCards/Kouki/Kouki";
import Jojo from "./ListCards/Jojo/Jojo";
import Saori from "./ListCards/Saori/Saori";
import Kouchan from "./ListCards/Kouchan/Kouchan";
import Yukkun from "./ListCards/Yukkun/Yukkun";
import Kaho from "./ListCards/Kaho/Kaho";
import Deguchi from "./ListCards/Deguchi/Deguchi";
import Yumino from "./ListCards/Yumino/Yumino";

const CardDetail = () => {
  const { cardName } = useParams<{ cardName: string }>();

  const cardComponents: { [key: string]: JSX.Element } = {
    // 最後尾に参考例を元に追加してください
    // キー: URLのパス名
    // 値: コンポーネント
    // 参考例: SampleCard: <SampleCard />,
    Fuma: <Fuma />,
    Takutaku: <Takutaku />,
    Yoshikawamasaya: <YoshikawaMasaya />,
    Mizoguchinatsuki: <MizoguchiNatsuki />,
    Haruki: <Haruki />,
    Haruka: <Haruka />,
    Kouki: <Kouki />,
    Jojo: <Jojo />,
    Saori: <Saori />,
    Kouchan: <Kouchan />,
    Yukkun: <Yukkun />,
    Kaho: <Kaho />,
    Deguchi: <Deguchi />,
    Yumino: <Yumino />,
  };

  const CardComponent = cardComponents[cardName!];

  return <>{CardComponent}</>;
};

export default CardDetail;
