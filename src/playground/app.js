class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions() {
    /*this.setState(() => {
      return {
        options: []
      };
    });
    */

    // otra forma de implicitamente regresar un objeto, es cuando ponemos el objeto dentro de parentesis despues del =>
   this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => optionToRemove !== option ) 
    }));
  }

  handlePick() {
    const { options } = this.state;
    const randomNumber = Math.floor(Math.random() * options.length);
    const option = options[randomNumber];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  // Lifecycles Methods
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
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
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const { options } = this.state;

    return (
      <div> 
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={options.length > 0 } 
          handlePick={this.handlePick}  
        />
        <Options 
          options={options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleAddOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  const {title, subtitle } = props;
  return (
    <div>
      <h1> {title} </h1>
      {subtitle && <h2> {subtitle} </h2>}
    </div>
  );
}

const Action = (props) => {
  const { handlePick, hasOptions } = props;
  return (
    <div>
      <button 
        onClick={handlePick}
        disabled={!hasOptions}
      > 
        What should I do? 
      </button>
    </div>
  );
}

const Options = (props) => {
  const { handleDeleteOptions, options, handleAddOption } = props;
  return (
    <div>
      <button onClick={handleDeleteOptions}> Remove All </button>
      <ul type="square">
        { options.length === 0 && <p> Please add an option to get started! </p>}
        { 
          options.map((option) => (
            <Option 
              key={option} 
              optionText={option} 
              handleAddOption={handleAddOption}
            /> 
          ))
        }
      </ul>
    </div>
  );
}

const Option = (props) => {
  const { optionText, handleAddOption } = props;
  return (
    <div> 
      {optionText}  
      <button 
        onClick={(e) => {
        handleAddOption(optionText)}}
      > 
        remove 
      </button>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    }
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        { error && <p> { error } </p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button> Add Option </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app') );
