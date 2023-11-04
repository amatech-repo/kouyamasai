import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const names = [
    "fuma",
    "Takutaku",
    "YoshikawaMasaya",
    "MizoguchiNatsuki",
    "Haruki",
    "Haruka",
    "kouki",
    "Jojo",
    "Saori",
    "Kouchan",
    "Yukkun",
    "Kaho",
  ];
  return (
    <div className="Page">
      <h1>名刺一覧！！</h1>
      <p>プログラミング体験会へのご参加ありがとうございました！</p>
      <div className="List">
        <Link to="/samplecards" className="ParentCard">
          <div className="ChildCard">あまてく太郎</div>
        </Link>
        {/* // 以下の参考例をコピーし、**を修正してください */}
        {/* **はディレクトリ名と同じ */}
        {/* 〇〇には来場者さんの好きな名前を設定してください */}
        {/* 参考例:
          <Link to="/**" className='ParentCard'>
              <div className='ChildCard'>〇〇</div>
          </Link>
        */}
        {names.map((name, index) => (
          <Link key={index} to={`/${encodeURIComponent(name)}`} className="ParentCard">
            <div className="ChildCard">{name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
