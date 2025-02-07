import logo from './logo.png'; // Importa la imagen

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo del conversor de monedas" className="logo" />
      <h1 className="titulo">Cambio de divisas en tiempo real</h1>
    </header>
  );
}

export default Header;
