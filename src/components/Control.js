import React from 'react'
import PropTypes from 'prop-types'
import ProjectList from './ProjectList'
import SkillList from './SkillList'
import Bio from './Bio'

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
        <BioList />
      </>
    )
  }

}