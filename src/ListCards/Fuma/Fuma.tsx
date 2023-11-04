import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Footer } from "./User/Footer";
import { Interest } from "./User/Interest";
import { About } from "./User/About";
import { Info } from "./User/Info";
import "./Fuma.css";
import { AmatechInfo } from "../../components/Amatech/AmatechInfo";
import { Events } from "../../components/Amatech/Events";
import { Hobby } from "./User/Hobby";

// 名刺の名前を変更してみましょう！
// ファイル名と合わせてください！※先頭は大文字で
// 例 SampleCard
const Fuma = () => {
  const [isFlip, setIsFlip] = useState(false);

  const handleClick = () => {
    setIsFlip(!isFlip);
  };

  return (
    <>
      <main className="main">
        {/* 応用編: 回転の速度を変えてみよう */}
        {/* 番外: 回転方法を縦にしよう */}
        <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
          {/* 個人の名刺 */}
          <div className="front" onClick={() => handleClick()}>
            <section className="main__section">
              {/* 入門編: 名前と学年を変更してみましょう！ */}
              <Info
                name="ふうま"
                label="京都産業大学 情報理工学部　4年"
                mail=""
                YoutubeLink=""
              />
              {/* 入門編: 自分自身ついての自己紹介文を書いてみましょう！ */}
              <About aboutText="iOSエンジニアです" />

              {/* 入門編: あなたの趣味は何ですか？*/}
              <Hobby hobbyText="最近よくNetflixでアニメを見ています。この前はBLEACHを見ていました。今はエヴァンゲリオンを見始めました" />

              {/* 入門編: あなたが今興味を持っていることは何ですか？*/}
              <Interest interestText="デザインについて興味があります。UI/UXだけではなく、チラシやポスターのデザインにも興味が湧きました" />

              {/* 入門編: 自己紹介用のリンクがあれば変更してみましょう！ */}
              {/* リンクがない方はURLを削除してください */}
              <Footer
                twitterLink="https://twitter.com/25maplen"
                githubLink="https://github.com/maple-fm"
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

export default Fuma;
