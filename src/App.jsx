import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat'
import Login from './Login/Login'
import { useStateValue } from './Reducer/stateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        { user ? (
          <>
          <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div class="welcome__message">
                    <h3>
                      Hello everyone now you can have your own chat room so go and hit the add channel button and and create your custom chat room
                    </h3>
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )  : <Login />
        }
        
      </Router>
    </div>
  );
}

export default App;
