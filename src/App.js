
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Forgotpassword from './Forgotpassword';
import Login from './Login';
import Signup from './Signup';
import Reset from './Reset';

function App() {
  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact ><Signup name="unique"/></Route>
          <Route path="/login" exact><Login /></Route>
          <Route path="/forgotpassword" exact><Forgotpassword /></Route>
          <Route path="/reset" exact ><Reset name="unique"/></Route>
        </Switch>
      </BrowserRouter>


    </>
  )
}

export default App;
