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

    }
  }

  render() {
    return (
      <>
        <ProjectList />
        <SkillList />
        <Bio />
      </>
    )
  }

}

export default Control;