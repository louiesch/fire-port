import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'

function NewSkillForm(props) {

  function addSkillToList(event) {
    event.preventDefault();
    props.onNewSkillCreation();
    console.log(event.target.name.value);
  }

  return (
    <>
      <div className="component">
        <ReusableForm
          formSubmissionHandler={addSkillToList}
          buttonText="Submit"
        />
      </div>
    </>
  );
}

NewSkillForm.propTypes = {
  onNewSkillCreation: PropTypes.func
}

export default NewSkillForm;