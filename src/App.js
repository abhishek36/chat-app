import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {auth} from './Firebase/config'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatRoom from './Components/ChatRoom';
import SignIn from './Components/SignIn';
import SignOut from './Components/SignOut';

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>
        <span className="head">  
        <img src="https://img.icons8.com/color/200/000000/chat--v3.png"/><span className="head-span">React-Chat-App</span></span>
        <SignOut/>
      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

export default App;
