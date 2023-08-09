import { store } from '../pages/store/store'
import { Provider } from 'react-redux';

import Counter from './components/Counter'
import '../styles/globals.css'

export default function App() {

  //console.log(store.state)

  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  )
}
