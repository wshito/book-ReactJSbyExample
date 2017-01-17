import * as React from 'react';
import * as ReactDOM from 'react-dom';

let InputExample = React.createClass({
    render () {
      return <input type='text' value='Good job!' />
    }
  });

ReactDOM.render (<InputExample />,
  document.getElementById('container'));
