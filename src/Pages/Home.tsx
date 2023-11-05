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
    { path: "Yumino", name: "ゆみの" },
    { path: "Oriduru", name: "おりづる" },
    { path: "Koncha", name: "こんちゃ" },
    { path: "Sunge", name: "スンジェ" },
    { path: "Ren", name: "Ren" },
    { path: "Hinako", name: "Hinako" },
    { path: "Ryuki", name: "りゅうき" },
    { path: "Mei", name: "めい" },
    { path: "Yuuka", name: "ゆうか" },
    { path: "Testukun", name: "てつくん" },
    { path: "Nanami", name: "ななみ" },
    { path: "Ken", name: "けん" },
    { path: "Taniyan", name: "たにやん" },
    { path: "Tish", name: "ティッシュ" },
  ];

  return (
    <div className="Page">
      <h1>名刺一覧！！</h1>
      <p>プログラミング体験会へのご参加ありがとうございました！</p>
      <p>
        Twitterで{" "}
        <a href="https://twitter.com/intent/tweet?text=%E3%81%82%E3%81%BE%E3%81%A6%E3%81%8F%E3%81%AE%E4%BD%93%E9%A8%93%E3%83%96%E3%83%BC%E3%82%B9%E3%81%A7%E5%90%8D%E5%88%BA%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%0Ahttps%3A%2F%2Fkoyamasai.netlify.app%2F%0A%0A%23%E3%81%82%E3%81%BE%E3%81%A6%E3%81%8F%20%23%E7%A5%9E%E5%B1%B1%E7%A5%AD">
          シェア</a>してくれると嬉しいです！
        
      </p>
      <div className="List">
        <Link to="/samplecards" className="ParentCard">
          <div className="ChildCard">見本:あまてく太郎</div>
        </Link>
        {names.map((name, index) => (
          <Link
            key={index}
            to={`/${encodeURIComponent(name.path)}`}
            className="ParentCard">
            <div className="ChildCard">{name.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
