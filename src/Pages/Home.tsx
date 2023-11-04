import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const names = [
    // 最後尾に追加してください
    // path: URLのパス名
    // name: 名前
    // 参考例: { path: 'samplecard', name: 'サンプル' },
    { path: "fuma", name: "ふうま" },
    { path: "takutaku", name: "たくたく" },
    { path: "yoshikawamasaya", name: "よしかわまさや" },
    { path: "mizoguchinatsuki", name: "みぞぐちなつき" },
    { path: "haruki", name: "はるき" },
    { path: "haruka", name: "はるか" },
    { path: "kouki", name: "こうき" },
    { path: "jojo", name: "Jojo" },
    { path: "saori", name: "さおり" },
    { path: "kouchan", name: "こうちゃん" },
    { path: "yukkun", name: "ゆっくん" },
    { path: "kaho", name: "かほ" },
  ];

  return (
    <div className="Page">
      <h1>名刺一覧！！</h1>
      <p>プログラミング体験会へのご参加ありがとうございました！</p>
      <div className="List">
        <Link to="/samplecards" className="ParentCard">
          <div className="ChildCard">あまてく太郎</div>
        </Link>
        {names.map((name, index) => (
          <Link
            key={index}
            to={`/${encodeURIComponent(name.path)}`}
            className="ParentCard"
          >
            <div className="ChildCard">{name.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
