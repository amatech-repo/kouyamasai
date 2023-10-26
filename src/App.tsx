import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Footer } from "./components/Footer";
import { Interest } from "./components/Interest";
import { About } from "./components/About";
import { Info } from "./components/Info";
import "./App.css";
import { AmatechInfo } from "./components/Amatech/AmatechInfo";
import { Events } from "./components/Amatech/Events";
import { Hobby } from "./components/Hobby";

const App = () => {
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
              <Info
                name="名前を変更しよう！"
                label="学科・学年・クラス"
                mail="g2254630@cc.kyoto-su.ac.jp"
                YoutubeLink="https://www.youtube.com/watch?v=gdZLi9oWNZg"
              />
              <About
                aboutText="自分自身について自己紹介文を書いてみよう！どんなことに興味があるか、普段どんなことをしているか書いてみよう！"
              />
              <Hobby hobbyText="君の好きなことは何ですか？毎日よくしていることを書いてみよう！" />
              <Interest interestText="どんなことに興味がありますか？将来何になりたいですか？" />
              <Footer
                twitterLink="https://twitter.com/amatech1006"
                githubLink="https://github.com/amatech-repo"
                instagramLink=""
                linkedinLink=""
              />
            </section>
          </div>

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

export default App;
