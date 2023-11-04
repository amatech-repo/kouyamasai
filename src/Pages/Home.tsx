import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const names = [
    // 最後尾に追加してください
    // path: URLのパス名
    // name: 名前
    // 参考例: { path: 'samplecard', name: 'サンプル' },
    { path: "Fuma", name: "ふうま" },
    { path: "Takutaku", name: "たくたく" },
    { path: "Yoshikawamasaya", name: "よしかわまさや" },
    { path: "Mizoguchinatsuki", name: "みぞぐちなつき" },
    { path: "Haruki", name: "はるき" },
    { path: "Haruka", name: "はるか" },
    { path: "Kouki", name: "こうき" },
    { path: "Jojo", name: "Jojo" },
    { path: "Saori", name: "さおり" },
    { path: "Kouchan", name: "こうちゃん" },
    { path: "Yukkun", name: "ゆっくん" },
    { path: "Kaho", name: "かほ" },
    { path: "Deguchi", name: "でぐち" },
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
