import React from 'react';

import AddOption from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    // otra forma de implicitamente regresar un objeto, es cuando ponemos el objeto dentro de parentesis despues del =>
   this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => optionToRemove !== option ) 
    }));
  };

  handlePick = () => {
    const { options } = this.state;
    const randomNumber = Math.floor(Math.random() * options.length);
    const option = options[randomNumber];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  // Lifecycles Methods
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState({ options });
      }  
    } catch(e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length ){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('component WILL UNMOUNT');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    const { options, selectedOption } = this.state;

    return (
      <div> 
        <Header subtitle={subtitle} />
        <div className="container">
          <Action 
          hasOptions={options.length > 0 } 
          handlePick={this.handlePick}  
          />
          <div className="widget">
            <Options 
            options={options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleAddOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption} 
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
