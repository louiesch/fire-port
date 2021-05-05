import React from 'react'
import Header from './Header'
import SignIn from "./SignIn"

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
      </div>
    </>
  );
}

export default App;
