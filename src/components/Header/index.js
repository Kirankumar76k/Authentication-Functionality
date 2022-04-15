// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <div className="header">
      <ul className="text">
        <li>
          <Link to="/" className="link-cls">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link-cls">
            About
          </Link>
        </li>
      </ul>
    </div>
  </>
)
export default Header
