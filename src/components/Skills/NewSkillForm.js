import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'
import { v4 } from 'uuid';

function NewSkillForm(props) {

  function addSkillToList(event) {
    event.preventDefault();
    props.onNewSkillCreation({
      name: event.target.name.value,
      id: v4()
    });
    // console.log(event.target.name.value);
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