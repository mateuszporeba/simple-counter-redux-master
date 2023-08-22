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

  console.log(auth);

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
    if(isAuth){
      dispatch(login())
      props.login()
    }
    //console.log(emailRef.current.value)
  }

  // if (emailRef.current === document.activeElement) {
  //   setIsEmailError(false);
  // }
  ueh
  if(document.hasFocus() && ref.current.contains(document.activeElement)){

  }

  const emailOnChangeHandler = () =>{
    //setIsEmailError(false);
  }


  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}
              className={isEmailError ? classes.labelError : ''} 
              onChange={emailOnChangeHandler}/>
              
              
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef}
              className={isPasswordError ? classes.labelError : ''} />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
