import React, {useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/login';
import {useSelector, useDispatch} from  'react-redux';
import { auth } from './firebase';

//actions
import {onLogin} from './store/actions/User';




function App() {
  const dispatch = useDispatch();
  const Login = dispatch(onLogin());//login action

  const user = useSelector((stateCurrent: any) => stateCurrent.user.user);
  
  
  useEffect(() =>{//Listener of Fibase
    //verifiy is authenticated
    auth.onAuthStateChanged((authUser: any) =>{
      if(authUser){
        //the user is login
        Login();//dispatch action

      }else{
        //the use is logout
      }
    })
  }, []);

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
