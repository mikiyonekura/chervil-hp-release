import React from 'react'
import gazo1 from "../images/gazo1.jpeg";
import gazo2 from "../images/gazo2.jpeg";
import gazo3 from "../images/gazo3.jpeg";
import menu from "../images/menu.jpg";
import parking from "../images/parking1.jpg";
import view from "../images/view.jpg";
import insta from "../images/icon_instagram.png"
import {Link} from "react-router-dom";
import Navigation from "./parts/Navigation";
import Chatbot from "react-chatbot-kit";
import config, { MessageParser, ActionProvider } from "./ChatConfig";
import 'react-chatbot-kit/build/main.css';


const HomePage = () => {
  return (
 
    <div className="container">
        <div className="slide">
            <aside id="mainimg">
                <img src={gazo1} alt="aa" className='slide1'/>
                <img src={gazo2} alt="aaa" className='slide2'/>
                <img src={gazo3} alt="aaaa" className='slide0'/>

            </aside>
            {/*<!--スライドショー-->*/}
        </div>
        <Navigation />

            <div id="contents">
        
            <section>

            <h2>TOPICS<span>トピックス</span></h2>

                <div className="list-column-container">

                    <div className="list-column">
                        <img src={menu} alt="menu"/>
                        <div className="text">
                        <h4>Today's menu<span>本日のメニュー</span></h4>
                        <p>人気な商品は売り切れる可能性がございます。ご承知の程お願いします。</p>
                        </div>
                        <p className="btn1"><Link to ="/TodayMenuFirebase" >もっと見る</Link></p>
                    </div>

                    <div className="list-column">
                    <img src={view} alt="view" />
                    
                    <div className="text">
                    <h4>Next open<span>次回のオープン</span></h4>
                    <p>店主のモチベーションや材料の在庫に応じて不定期にお店を開けます。詳細は下記のInstagramよりご確認ください</p>
                    </div>
                    <p className="btn1">
                    <a id="icon" href="https://www.instagram.com/atelier_chervilcoju/"><img src={insta} alt="insta"/></a>
                    </p>
                    </div>

                    <div className="list-column">
                    <img src={parking} alt="park" />
                        <div className="text">
                        <h4>About parking lot<span>駐車場について</span></h4>
                        <p>駐車場は2つ用意がございます。3台まで駐車可能です。イベントの際や、混雑が予想される場合は有料駐車場をご利用ください。</p>
                        </div>
                        <p className="btn1"><Link to="/Parking">もっと見る</Link> </p>
                    </div>



                </div>

            </section>

            <section id="new">

                <h2>News<span>お知らせ</span></h2>
                <dl style={{textAlign: "left"}}>
                <dt>2023/07/29</dt>
                <dd>ログイン機能を実装しました。パスワードが暗号化された後、JWTトークンによる一定期間の自動ログインが許可されます。<span className="newicon">NEW</span></dd>
                <dt>2023/07/15</dt>
                <dd>Today's menuページより本日の商品を確認できるようになりました。<span className="newicon">NEW</span></dd>
                <dt>2023/04/07</dt>
                <dd>アトリエchervil cojuのホームページを作成しました。イベントの情報などを発信していきます。</dd>
                <dt>2023/03/22</dt>
                <dd>アマムダコタンさんとのコラボを実施。</dd>
                <dt>2023/3/22</dt>
                <dd>キャッシュレス決済の導入を予定しています。</dd>
                </dl>


            </section>

            </ div>

    </div>



  )
}

export default HomePage
