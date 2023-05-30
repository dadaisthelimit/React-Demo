import './Navbar.css'
import { showMessage, promptMessage } from '../../helpers/alerts';

const Navbar = () => {
	  return (
	<nav className="navbar">
	  <h1 onClick={showMessage('Home')}>Home</h1>
	  <h1 onClick={showMessage('About')}>About 1</h1>
	  <h1 onClick={showMessage('Contact')} >Contact</h1>
	</nav>
  )
}

export default Navbar;