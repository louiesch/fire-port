import React from 'react'
import Header from './Header'
import SignIn from "./SignIn"
import ProjectList from './Projects/ProjectList'
import SkillList from './Skills/SkillList'
import Bio from './Bio/Bio'

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
              <ProjectList/>
            </div>
            <div className="column">
              <SkillList/>
            </div>
            <div className="column">
              <Bio/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
