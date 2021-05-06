import React from 'react'
import PropTypes from 'prop-types'
import NewProjectForm from './NewProjectForm'
import ProjectList from './ProjectList'

class ProjectControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjectForm: false
    }
  };

  handleAddingNewProjectToList = () => {
    console.log("hello");
    // const { dispatch } = this.props;
    // const action = a.toggleForm();
    // dispatch(action);
  }

  handleClick = () => {
    if (this.state.selectedProject != null) {
      this.setState({
        showProjectForm: false,
        selectedProject: null,
        editing: false
      });
    }
    else {
      this.setState(prevState => ({
        showProjectForm: !prevState.showProjectForm
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.showProjectForm) {
      currentlyVisibleState = 
      <NewProjectForm onNewProjectCreation={this.handleAddingNewProjectToList} />;
      buttonText = "Home";
    }
    else {
      currentlyVisibleState = 
      <ProjectList />;
      buttonText = "Add Project";
    }

    return (
      <>
      <div className="row">
        <div className="column">
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </div>
      </>
    )
  }
}



export default ProjectControl;