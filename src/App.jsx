import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat'
import Login from './Login/Login'

function App() {
  const [user, setUser] = useState(null)
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
                  <div>Welcome</div>
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
