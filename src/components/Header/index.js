import React from 'react';

import './styles.css';

function Header() {
  return (
    <header>
      <div className="header">
        <h1>facebook</h1>
        <div className="perfil">
          <strong>Meu perfil</strong>
          <img src="https://avatars0.githubusercontent.com/u/45343619?s=460&u=047c92af69762e721b7b217086dcfd3979a23313&v=4" alt="foto perfil" />
        </div>
      </div>
    </header>
  );
}

export default Header;