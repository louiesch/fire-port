import React from 'react'
import PropTypes from 'prop-types'
import ProjectList from './Projects/ProjectList'
import NewProjectForm from './Projects/NewProjectForm'
import SkillList from './Skills/SkillList'
import Bio from './Bio/Bio'

class Control extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showProjectForm: false,
      showSkillForm: false
    }
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="column">
            <ProjectList />         
          </div>
          <div className="column">            
            <SkillList />
          </div>
          <div className="column">
            <Bio />
          </div>
        </div>
      </>
    )
  }

}

export default Control;