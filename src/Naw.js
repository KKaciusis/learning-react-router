import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div>
      <h1>Nav</h1>
      <ul>
          <Link to="/about"><li>About</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/"><li>Home</li></Link>
      </ul>
    </div>
  );
}


export default Nav;