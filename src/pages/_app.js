import { store } from '../pages/store/store'
import { Provider } from 'react-redux'
import { useState } from 'react'

import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  const [isAuthenticated, setIsAthenticated] = useState(false);

  return (
    <div>
      <Provider store={store}>
        <Header logout={() => setIsAthenticated(false)} />
        {!isAuthenticated && <Auth login={() => setIsAthenticated(true)} />}
        {isAuthenticated && <UserProfile logout={() => setIsAthenticated(false)} />}
        <Counter />
      </Provider>
    </div>

  )
}
