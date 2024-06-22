import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import secondStore from './redux/secondStore'
import CakeContainer from './components/CakeContainer'
import IcecreamContainer from './components/IcecreamContainer'

function App() {

  return (
    <Provider store={store}>
      <Provider store={secondStore}>
      <CakeContainer />
      <IcecreamContainer />
      </Provider>
    </Provider>
  )
}

export default App
