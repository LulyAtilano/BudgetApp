class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true
    }

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    const { visibility } = this.state;
    return (
      <div>
        <h1> Visibility Togle </h1>
        <button onClick={this.toggleVisibility}> {visibility ? 'Hide details' : 'Show details' } </button>
        { 
          visibility && <p> Hey. These are some details you can now see! </p>
        }
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
