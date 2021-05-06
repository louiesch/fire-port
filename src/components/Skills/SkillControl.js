import React from 'react'
import PropTypes from 'prop-types'
import NewSkillForm from './NewSkillForm'
import SkillList from './SkillList'

class SkillControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSkillForm: false,
      masterSkillList: []
    }
  };

  handleAddingNewSkillToList = (newSkill) => {
    console.log("hello");
    const newMasterSkillList = this.state.masterSkillList.concat(newSkill);
    this.setState({
      masterSkillList: newMasterSkillList,
      showSkillForm: false
    })
  }

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
      <NewSkillForm
        onNewSkillCreation={this.handleAddingNewSkillToList}
      />;
      buttonText = "Home";
    }
    else {
      currentlyVisibleState = 
      <SkillList
        skillList={this.state.masterSkillList}
      />;
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