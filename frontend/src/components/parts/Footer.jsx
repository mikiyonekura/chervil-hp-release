import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div id="footermenu" className="inner">
          <ul>
            <li><Link to = "/" >HOME</Link></li>
            <li><Link to ="/Signin" >SIGN UP</Link></li>
            <li><Link to ="/Sat" >SAT</Link></li>
            <li>
              <Link to ="http://chervil.php.xdomain.jp/form.php" >
                CONTACT
              </Link>
            </li>
          </ul>

      </div>
    </footer>
  )
}

export default Footer
