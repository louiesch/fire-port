import React from 'react'
import Skill from './Skill'
import PropTypes from 'prop-types'

function SkillList(props) {
  return (
    <>
      <div className="component">
        {props.skillList.map((skill, index) =>
          <Skill
            name={skill.name}
          />
        )}
      </div>
    </>
  );
}

SkillList.propTypes = {
  skillList: PropTypes.array
}

export default SkillList;