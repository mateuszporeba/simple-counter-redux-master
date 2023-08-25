import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import { login, logout } from '@/pages/store/authSlice'


const Auth = (props) => {

  const emailRef = useRef('')
  const passwordRef = useRef('')

  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [isAuth, setIsAuth] = useState(false);

  const auth = useSelector((state) => state.authentication.isAuthenticated)
  const dispatch = useDispatch()

  const loginHandler = (e) => {
    e.preventDefault()
    setIsAuth(true);
    if (emailRef.current.value === '') {
      setIsEmailError(true)
      setIsAuth(false)
    }
    if (passwordRef.current.value === '') {
      setIsPasswordError(true)
      setIsAuth(false)
    }
    if (isAuth) {
      dispatch(login())
      props.login()
    }
  }

  const emailDisableErrorState = () => {
    setIsEmailError(false)
  }
  const passwordDisableErrorState = () =>{
    setIsPasswordError(false)
  }


  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}
              className={isEmailError ? classes.labelError : ''}
              onFocus={emailDisableErrorState}
            />


          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef}
              className={isPasswordError ? classes.labelError : ''} 
              onFocus={passwordDisableErrorState}
              />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
