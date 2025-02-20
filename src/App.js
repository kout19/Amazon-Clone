import './App.css';
import Routing from './Router';
import react, {useContext, useEffect} from 'react';
import {DataContext} from './components/DataProvider/DataProvider';
import {auth} from './Utils/firbase';
import {Type} from './Utils/action.type.js';

function App() {

const [{user}, dispatch]=useContext(DataContext);
console.log(user);
useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
        dispatch({
            type:Type.SET_USER,
            user:authUser
        });
        console.log(authUser);
        }
    else{
        dispatch({
            type:Type.SET_USER,
            user:null
        });
        console.log("user not loged in");
}

  });
},[]);
return <Routing/>;
}
export default App;
