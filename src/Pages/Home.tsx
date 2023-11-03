import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='Page'>
            <h1>名刺一覧！！</h1>
            <p>プログラミング体験会へのご参加ありがとうございました！</p>
            <div className='List'>
                <Link to="/samplecards" className='ParentCard'>
                    <div className='ChildCard'>あまてく太郎</div>
                </Link>
                {/* まず、App.tsxで遷移先のrouteの設定とコンポーネントの設定を行なってください。その次にLinkのtoには、遷移先のパスを指定してください 。タイトルは名刺作成者の名前にしてください。*/}
                <Link to="/yudai" className='ParentCard'>
                    <div className='ChildCard'>あああ</div>
                </Link>
                <Link to="/samplecards" className='ParentCard'>
                    <div className='ChildCard'>あまてく太郎</div>
                </Link>
                <Link to="/samplecards" className='ParentCard'>
                    <div className='ChildCard'>あまてく太郎</div>
                </Link>
                <Link to="/samplecards" className='ParentCard'>
                    <div className='ChildCard'>あまてく太郎</div>
                </Link>
                <Link to="/samplecards" className='ParentCard'>
                    <div className='ChildCard'>あまてく太郎</div>
                </Link>
                <Link to="/samplecards" className='ParentCard'>
                    <div className='ChildCard'>あまてく太郎</div>
                </Link>
                <Link to="/samplecards" className='ParentCard'>
                    <div className='ChildCard'>あまてく太郎</div>
                </Link>
            </div>
        </div>
    )
}

export default Home
