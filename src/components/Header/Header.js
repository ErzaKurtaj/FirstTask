import keyconceptsImage from '../../assets/images/keyconceptsImage.png';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={keyconceptsImage} alt="Metal badge with a star" />
      <h1>Key React Concepts </h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
}

export default Header;
