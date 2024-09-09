import { ThemeProvider } from 'styled-components'

import React, { useState } from 'react'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaDark from './themes/dark'
import temaLight from './themes/light'
function App() {
  const [estaUsandoDark, setEstaUsandoDark] = useState(false)

  function trocaTema() {
    setEstaUsandoDark(!estaUsandoDark)
  }

  return (
    <ThemeProvider theme={estaUsandoDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
