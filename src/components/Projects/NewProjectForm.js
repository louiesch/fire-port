import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'

function NewProjectForm(props) {

  function addProjectToList(event) {
    event.preventDefault();
    props.onNewProjectCreation();
    console.log(event.target.name.value);
  }

  return (
    <>
      <div className="component">
        <ReusableForm
          formSubmissionHandler={addProjectToList}
          buttonText="Submit"
        />
      </div>
    </>
  );
}

NewProjectForm.propTypes = {
  onNewProjectCreation: PropTypes.func
}

export default NewProjectForm;