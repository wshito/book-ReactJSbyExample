import * as React from 'react';
import * as ReactDOM from 'react-dom';

let InputExample = React.createClass({
    render () {
      return <p><input type='text' value='Hello World!  (readonly)' /></p>
    }
  });

ReactDOM.render (<InputExample />,
  document.getElementById('container'));
