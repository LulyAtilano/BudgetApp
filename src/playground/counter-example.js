class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);
    
    if (!isNaN(count)) {
      this.setState( () => ({ count }))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { count } = this.state;
    if (prevState.count !== count) {
      localStorage.setItem('count', count);
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1> Count: {count} </h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleReset}> Reset </button>
      </div>
    );
  }
}

// Aqui tenemos el valor default de count
/*
Counter.defaultProps = {
  count: 0
}
*/

// Aquí le seteamos el valor como props a Counter component
//ReactDOM.render(<Counter count={0} />, document.getElementById('app'));

ReactDOM.render(<Counter />, document.getElementById('app'));
