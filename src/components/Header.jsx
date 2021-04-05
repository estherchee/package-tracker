import '../styles/components/header.css';

export default function Header() {
  const logoObject = require('../assets/images/logo.svg');
  const logoURL = logoObject.default;

  return (
    <header className="header">
      <a href="/">
        <img className="logo" src={logoURL} alt="Logo" />
      </a>
    </header>
  );
}
