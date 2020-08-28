import React from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'

import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'

function App() {

  const titulo = 'Buscador de recetas de bebidas'

  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>

          <Header titulo={titulo} />
          <Main />
          
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
