import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Footer } from "./User/Footer";
import { Interest } from "./User/Interest";
import { About } from "./User/About";
import { Info } from "./User/Info";
import "./Jojo.css";
import { AmatechInfo } from "../../../components/Amatech/AmatechInfo";
import { Events } from "../../../components/Amatech/Events";
import { Hobby } from "./User/Hobby";

// 名刺の名前を変更してみましょう！
// ファイル名と合わせてください！※先頭は大文字で
// 例 Jojo
const Jojo = () => {
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
                name="JoJo"
                label="外国語学部　ヨーロッパ言語ドイツ語先行４年"
                mail=""
                YoutubeLink="https://www.youtube.com/watch?v=gdZLi9oWNZg"
              />
              {/* 入門編: 自分自身ついての自己紹介文を書いてみましょう！ */}
              <About aboutText="大学でドイツ語を勉強しておりドイツに一年間留学しました。" />

              {/* 入門編: あなたの好きなことは何ですか？毎日よくしていることを書いてみましょう！ */}
              <Hobby hobbyText="お菓子を作ることが好きです。特にクッキーを作るのが好きです。" />

              {/* 入門編: あなたの好きなことは何ですか？毎日よくしていることを書いてみましょう！ */}
              <Interest interestText="散歩するのが好きでコロナ禍では健康を気にしてよく嵐山にウォーキングしていました。" />

              {/* 入門編: 自己紹介用のリンクがあれば変更してみましょう！ */}
              {/* リンクがない方はURLを削除してください */}
              <Footer
                twitterLink="https://twitter.com/"
                githubLink=""
                instagramLink="https://instagram.com/noriko_in_japan"
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

export default Jojo;
