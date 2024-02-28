import React from 'react'
import BarraLateral from './containers/BarraLateral'
import EstiloGlobal, { Container } from './styles'
import ListaDeTarefas from './containers/ListaDeTarefas'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App