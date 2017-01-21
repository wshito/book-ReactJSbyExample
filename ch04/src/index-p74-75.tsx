import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
    selectedBooks: Array<string>;
};
interface State {};

/** Page component transition controler */
let BookStore = React.createClass ({
  getInitialState () {
    return {currentStep: 1};
  },

  // renders BookStore component
  render () {
    switch (this.state.currentStep) {
      case 1:
        return <BookList />;
      case 2:
        return <ShippingDetails />;
      case 3:
        return <DeliveryDetails />;
    }
  }
});

/** BookList component */
let BookList = React.createClass ({
  getInitialState () {
    return {
      books: [           // creates this.state.books
        {id: 1, name: 'Zero to One', author: 'Peter Thiel'},
        {id: 2, name: 'Monk who sold his Ferrari', author: 'Robin Sharma'},
        {id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam'}
      ],
      selectedBooks: []  // creates this.state.selectedBooks
    };
  },

  _renderBook (book: any) {
    return <div className="checkbox">
      <label><input type="checkbox" value={book.name}
                    onChange={this.handleSelectedBooks} />
                    {book.name} -- {book.author}</label>
    </div>
  },

  // event handler for checkbox event
  handleSelectedBooks (event: any) {
    let selectedBooks = this.state.selectedBooks;  // before update
    let index = selectedBooks.indexOf (event.target.value);
    if (event.target.checked) {
      // the book has not been added to the selectedBooks yet
      if (index === -1) selectedBooks.push (event.target.value);
    } else {
      // the checkbox was untoggled.  remove it.
      selectedBooks.splice (index, 1);
    }
    this.setState ({selectedBooks: selectedBooks}); // updated
  },

  // renders BookList component
  render () {
    return <div>
      <h3>Choose from wide variety of books available in our store</h3>
      <form onSubmit={this.handleSubmit}>
        {this.state.books.map (this._renderBook)}
        <input type="submit" className="btn btn-success" />
      </form>
      {/* Add log area to display selected books. (not in the book) */}
      <LogArea selectedBooks={this.state.selectedBooks} />
    </div>;
  },

  // event handler for form submission
  handleSubmit (event: any) {
    console.log (event);
    // Cancels the event if it is cancelable, without
    // stopping further propagation of the event.
    // this cancels form's default behavior i.e. submitting.
    event.preventDefault ();
    console.log ("Form submitted:\n" + this.state.selectedBooks);
  }
});

/** ShippingDetails component */
let ShippingDetails = React.createClass ({
  render () {
    return <h1>Enter your shipping information.</h1>;
  }
});

/** DeliveryDetails component */
let DeliveryDetails = React.createClass ({
  render () {
    return <h1>Choose your delivery options here.</h1>;
  }
});

/** LogArea component (not in the book) */
class LogArea extends React.Component<Props, State> {
  render () {
    return <div><p>Log Area</p><p>
      {this.props.selectedBooks.join(" -- ")}
    </p>
    </div>;
  }
}
/*
// This cannot be compiled with TypeScript since props does not have type info.
let LogArea = React.createClass ({
  render () {
    return <p>
      {this.props.selectedBooks}
    </p>;
  }
});
*/
ReactDOM.render (<BookStore />, document.getElementById('container'));
