import * as React from 'react';
import * as ReactDOM from 'react-dom';

let InputExample = React.createClass({
  getInitialState () {
    return {name: 'Type something here!'};
  },

  handleChange (event: any) {
    this.setState ({name: event.target.value});
  },

  render () {
    return <div><input type='text' value={this.state.name}
                  onChange={this.handleChange} />
                  <p>{this.state.name}</p>
                  </div>;
  }
});

ReactDOM.render (<InputExample />,
  document.getElementById('container'));
