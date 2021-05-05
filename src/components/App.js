import React from 'react'
import Header from './Header'
import SignIn from "./SignIn"
import Control from "./Control"

function App() {
  return (
    <>
      <div className="app">
        <div className="row">
          <div className="column">
            <Header />
          </div>
          <div className="column2">
            <SignIn />
          </div>
        </div>
        <div>
          <div className="row">
            <div className="column">
              <Control />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
