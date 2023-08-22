import { store } from '../pages/store/store'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {login, logout} from '@/pages/store/authSlice'

import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import '../styles/globals.css'

export default function App() {

  const [isAuthenticated, setIsAthenticated] = useState(false);
  

  //console.log(state.authentication.value)

  return (
    <div>
      <Provider store={store}>
        <Header/>
        {!isAuthenticated && <Auth login={() => setIsAthenticated(true)}/>}
        {isAuthenticated && <UserProfile logout={() => setIsAthenticated(false)}/>}
        <Counter />
      </Provider>
    </div>
  )
}
