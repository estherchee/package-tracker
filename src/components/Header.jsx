// NPM packages
import { Link } from 'react-router-dom';

// Project Files
import '../styles/components/header.css';

// Property
const logoObject = require('../assets/images/logo.svg');
const logoURL = logoObject.default;

// Methods
export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <Link to="/">
        <img className="logo" src={logoURL} alt="Logo" />
      </Link>
    </header>
  );
}
