import React from 'react'
import {Link} from "react-router-dom"

//フォーム消してる<li><Link to="/Form">CONTACT<span>お問い合わせ</span></Link></li>
const Navigation = () => {
  return (
    <nav id="menubar">
      <ul>
        <li><Link to="/">HOME<span>ホーム</span></Link></li>
        <li><Link to="/Signin">SIGN UP<span>サインアップ</span></Link></li>
        <li><Link to="/Sat">SAT<span>セット販売の組み合わせ</span></Link></li>
        <li>
          <Link to="http://chervil.php.xdomain.jp/form.php">
            CONTACT<span>お問い合わせ</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
