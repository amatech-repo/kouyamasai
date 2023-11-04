import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
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
        <Link to="/riku" className='ParentCard'>
          <div className='ChildCard'>りくと</div>
        </Link>
        <Link to="/fuma" className="ParentCard">
          <div className="ChildCard">ふうま</div>
        </Link>
        <Link to="/kouki" className='ParentCard'>
                    <div className='ChildCard'>こうき</div>
                </Link>
      </div>
    </div>
  );
};

export default Home;
