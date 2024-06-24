import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import IcecreamContainer from './components/IcecreamContainer'
import UserList from './components/UserList'

function App() {

  return (
    <Provider store={store}>
      <CakeContainer />
      <IcecreamContainer />
      <UserList />
    </Provider>
  )
}

export default App
