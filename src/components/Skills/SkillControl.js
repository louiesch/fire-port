import React from 'react'
import NewSkillForm from './NewSkillForm'
import SkillList from './SkillList'

class SkillControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSkillForm: false
    }
  };

  handleClick = () => {
    if (this.state.selectedSkill != null) {
      this.setState({
        showSkillForm: false,
        selectedSkill: null,
        editing: false
      });
    }
    else {
      this.setState(prevState => ({
        showSkillForm: !prevState.showSkillForm
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.showSkillForm) {
      currentlyVisibleState = 
      <NewSkillForm />;
      buttonText = "Home";
    }
    else {
      currentlyVisibleState = 
      <SkillList />;
      buttonText = "Add Skill";
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

export default SkillControl;