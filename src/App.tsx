import React, {useEffect, useCallback} from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/login';
import {useSelector, useDispatch} from  'react-redux';
import { auth } from './firebase';

//actions
import {onLogin, onLogout} from './store/actions/User';




function App() {
  const dispatch = useDispatch();
  const setLogin = useCallback((uid, photoUrl, email, displayName) => dispatch(onLogin(uid, photoUrl, email, displayName)), [dispatch]);//login action
  const setLogout = useCallback(() => dispatch(onLogout()),[dispatch]);//login action
  
  const user = useSelector((stateCurrent: any) => stateCurrent.user.user);
  
  
  useEffect(() =>{//Listener of Fibase
    //verifiy is authenticated or has authenticated
    auth.onAuthStateChanged((authUser: any) =>{
      if(authUser){
        console.log(authUser);
        //the user is login
        //dispatch action
        setLogin(authUser.uid, 
          authUser.photoURL, 
          authUser.email, 
          authUser.displayName
          )

      }else{
        //the user is logout or has logout
        setLogout();
      }
    })
  }, [setLogin, setLogout]);


  return (
    <div className="App">
      {user ?
        <> 
          <Sidebar /> <Chat/> 
        </> 
        : <Login/>}

    </div>
  );
}

export default App;
