// The NavBarUI code:

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalculator} from '@fortawesome/free-solid-svg-icons';

const NavBarUI = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <ul className='flex justify-center space-x-4'>
        <li><a href="/" className="text-white hover:text-gray-300"><FontAwesomeIcon icon={faHome} /> Home</a></li>
        <li><a href="/calculator" className="text-white hover:text-gray-300"><FontAwesomeIcon icon={faCalculator} /> Calculator</a></li>
      </ul>
    </nav>
  )
}

export default NavBarUI;
