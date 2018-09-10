import React from 'react';
import './App.css';
import ShowQuoteComponent from './ShowQuote';
import ShowAuthorComponent from './ShowAuthor';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author: 'Hamed O.Khaled', quote: 'LOL!' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1&mashape-key=Y2WnFKhquumshQq4C03BYJu2Ap2bp1WYqMRjsnTP20eycCnzdX').then(res => res.json()).then(
      (result) => {
        this.setState({
          author: result[0].author,
          quote: result[0].quote,
        });
      },
      (error) => {
        console.log(error);
      },
    );
  }

  render() {
    const { quote } = this.state;
    const { author } = this.state;
    return (
      <div>
        <div>
          <ShowQuoteComponent message={quote} />
          <ShowAuthorComponent Author={author} />
        </div>
        { <button type="button" onClick={this.handleClick}> Generate Quote</button> }
      </div>
    );
  }
}

export default App;
