import { useParams } from 'react-router-dom';
import Fuma from "./ListCards/Fuma/Fuma";
import Takutaku from "./ListCards/Takutaku/Takutaku";
import YoshikawaMasaya from './ListCards/YoshikawaMasaya/YoshikawaMasaya';
import MizoguchiNatsuki from './ListCards/MizoguchiNatsuki/MizoguchiNatsuki';
import Haruki from './ListCards/Haruki/Haruki';
import Haruka from './ListCards/Haruka/Haruka';
import Kouki from './ListCards/Kouki/Kouki';
import Jojo from './ListCards/Jojo/Jojo';
import Saori from './ListCards/Saori/Saori';
import Kouchan from './ListCards/Kouchan/Kouchan';
import Yukkun from './ListCards/Yukkun/Yukkun';
import Kaho from './ListCards/Kaho/Kaho';

// 名刺の名前を変更してみましょう！
// ファイル名と合わせてください！※先頭は大文字で
// 例 SampleCard
const CardDetail = () => {
  let { cardName } = useParams<{ cardName: string }>();

  // cardNameに基づいて表示するコンポーネントを決定
  const cardComponents: { [key: string]: JSX.Element } = {
    'fuma': <Fuma />,
    'Takutaku': <Takutaku />,
    "YoshikawaMasaya": <YoshikawaMasaya />,
    "MizoguchiNatsuki": <MizoguchiNatsuki />,
    "Haruki": <Haruki />,
    "Haruka": <Haruka />,
    "kouki": <Kouki />,
    "Jojo": <Jojo />,
    "Saori": <Saori />,
    "Kouchan": <Kouchan />,
    "Yukkun": <Yukkun />,
    "Kaho": <Kaho />,
    // 他の名刺コンポーネントも同様にマッピング
  };

  const CardComponent = cardComponents[cardName!]; // NotFoundは存在しないcardNameが与えられた時のフォールバック

  return <>{CardComponent}</>;
};

export default CardDetail;
