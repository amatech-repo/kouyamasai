import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Footer } from "../../components/Footer";
import { Interest } from "../../components/Interest";
import { About } from "../../components/About";
import { Info } from "../../components/Info";
import "./SampleCard.css";
import { AmatechInfo } from "../../components/Amatech/AmatechInfo";
import { Events } from "../../components/Amatech/Events";
import { Hobby } from "../../components/Hobby";

const SampleCard = () => {
  const [isFlip, setIsFlip] = useState(false);

  const handleClick = () => {
    setIsFlip(!isFlip);
  };

  return (
    <>
      <main className="main">
        <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
          {/* 個人の名刺 */}
          <div className="front" onClick={() => handleClick()}>
            <section className="main__section">

              {/* 名前と学年を変更してみましょう！ */}
              <Info
                name="あまてく太郎"
                label="情報科学部・3年"
                mail=""
                YoutubeLink="https://www.youtube.com/watch?v=gdZLi9oWNZg"
              />

              {/* 自分自身ついての自己紹介文を書いてみましょう！ */}
              <About
                aboutText="大学では情報科学を学んでおり、特にデータ解析と機械学習に興味を持って研究しています。"
              />

              {/* あなたの好きなことは何ですか？毎日よくしていることを書いてみましょう！ */}
              <Hobby hobbyText="旅行と写真撮影と読書が趣味です！特に台湾の文化や風景が好きです。休日には都市の風景や友人たちを撮影しています。最近はミステリーや東野圭吾の本を読んでいます。" />

              {/* あなたの好きなことは何ですか？毎日よくしていることを書いてみましょう！ */}
              <Interest interestText="人工知能と社会についての勉強、モバイルアプリケーション、デザイン思考についての勉強に興味があります。" />

              {/* 自己紹介用のリンクがあれば変更してみましょう！ */}
              <Footer
                twitterLink="https://twitter.com/amatech1006"
                githubLink="https://github.com/amatech-repo"
                instagramLink=""
                linkedinLink=""
              />
            </section>
          </div>

          {/* ここから先は変更しないでください！ */}
          {/* あまてくの名刺 */}
          <div className="back" onClick={() => handleClick()}>
            <section className="main__section">
              <AmatechInfo
                name="あまてく"
                label="エンジニアコミュニティ"
                knowMoreLink="https://amatech1006.notion.site/amatech1006/9728f0790eb44f4794b8fe531fbde9c7"
                mail="amatech1006@gmail.com"
                twitterLink="https://twitter.com/amatech1006"
              />
              <About
                aboutText={`2022年10月に設立. 現在100名弱が在籍.
                京都産業大学の学生を中心としたエンジニアコミュニティです. 勉強会やイベント企画, ゲスト登壇, ハッカソンなどエンジニアを目指す学生のための活動を行っています.`}
              />
              <Events />
              <Footer
                twitterLink="https://twitter.com/amatech1006"
                githubLink="https://github.com/amatech-repo"
              />
            </section>
          </div>
        </ReactCardFlip>
      </main>
    </>
  );
};

export default SampleCard;
