import './App.css'
import { Provider } from 'react-redux'
import store from './features/store'
import CakeContainer from './components/CakeContainer'
import UserList from './components/UserList'
// import IcecreamContainer from './components/IcecreamContainer'


function App() {

  return (
    <Provider store={store}>
      <CakeContainer />
      {/* <IcecreamContainer /> */}
      <UserList />
    </Provider>
  )
}

export default App
