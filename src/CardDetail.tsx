import { useParams } from "react-router-dom";
// 最後尾に新しいimport文を追加してください
// 参考例: import Ryuki from "./ListCards/Ryuki/Ryuki";
import Fuma from "./ListCards/Day1/Fuma/Fuma";
import Takutaku from "./ListCards/Day1/Takutaku/Takutaku";
import YoshikawaMasaya from "./ListCards/Day1/YoshikawaMasaya/YoshikawaMasaya";
import MizoguchiNatsuki from "./ListCards/Day1/MizoguchiNatsuki/MizoguchiNatsuki";
import Haruki from "./ListCards/Day1/Haruki/Haruki";
import Haruka from "./ListCards/Day1/Haruka/Haruka";
import Kouki from "./ListCards/Day1/Kouki/Kouki";
import Jojo from "./ListCards/Day1/Jojo/Jojo";
import Saori from "./ListCards/Day1/Saori/Saori";
import Kouchan from "./ListCards/Day1/Kouchan/Kouchan";
import Yukkun from "./ListCards/Day1/Yukkun/Yukkun";
import Kaho from "./ListCards/Day1/Kaho/Kaho";
import Deguchi from "./ListCards/Day1/Deguchi/Deguchi";
import Yumino from "./ListCards/Day1/Yumino/Yumino";
import Oriduru from "./ListCards/oriduru/Oriduru";
import Koncha from "./ListCards/Koncha/Koncha";
import Ren from "./ListCards/Ren/Ren";
import Ryuki from "./ListCards/Ryuki/Ryuki";

const CardDetail = () => {
  const { cardName } = useParams<{ cardName: string }>();

  const cardComponents: { [key: string]: JSX.Element } = {
    // 最後尾に参考例を元に追加してください
    // キー: URLのパス名
    // 値: コンポーネント
    // 参考例: Ryuki: <Ryuki />,
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
    Oriduru: <Oriduru />,
    Koncha: <Koncha />,
    Ren: <Ren />,
    Ryuki: <Ryuki />,
  };

  const CardComponent = cardComponents[cardName!];

  return <>{CardComponent}</>;
};

export default CardDetail;
