import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '@/pages/store/authSlice'
import classes from './Header.module.css';

const Header = (props) => {
  const dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = useSelector((state) => state.authentication.isAuthenticated)

  useEffect(() => {
    setIsLoggedIn(auth)
  }, [auth])

const logoutButtonHandler = () => {
  dispatch(logout())
  props.logout();
}

  const profile = (<ul>
    <li>
      <a href='/'>My Products</a>
    </li>
    <li>
      <a href='/'>My Sales</a>
    </li>
    <li>
      <button onClick={logoutButtonHandler}>Logout</button>
    </li>
  </ul>)

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {auth && profile}
      </nav>
    </header>
  );
};

export default Header;
