import React from 'react'
import Navigation from "./parts/Navigation";
import Header from './parts/Header';

const Parking = () => {
  return (
    <div className="container">
      <div id="contents">

        <Navigation />

          <div className="parking">
              <h2>アトリエchervil coju<span>駐車場</span></h2>
              <p>駐車場は３台分用意がございます。路上駐車はなさいませんようよろしくお願いします。</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.281420007424!2d131.53321119999998!3d33.2067177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a39b72614dfb%3A0x3cee82804ec2a91!2satelier%20chervilcoju!5e0!3m2!1sja!2sjp!4v1685171264095!5m2!1sja!2sjp" style={{ width: "600px", height: "400px" ,title: "map1"}}></iframe>

              <h2>有料駐車場<span>イベントの際など</span></h2>
              <p>イベントや繁忙期は駐車場の混雑が予想されますので大分大学医学部の有料駐車場をご利用ください。</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.1382669213867!2d131.5343919!3d33.2104712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a39a72f687df%3A0xfc443745ce6e1593!2z5aSn5YiG5aSn5a2m5Yy75a2m6YOo6ZmE5bGe55eF6Zmi!5e0!3m2!1sja!2sjp!4v1681781018480!5m2!1sja!2sjp"style={{ width: "600px", height: "400px" ,title: "map2"}} ></iframe>
          </div>
      </div>
    </div>
  )
}

export default Parking
