import React from 'react'
import PropTypes from 'prop-types'

function Skill(props) {
  return (
    <>
      <div className="component">
        <p>{props.name}</p>
      </div>
    </>
  )
}

Skill.propTypes = {
  name: PropTypes.string
}

export default Skill;