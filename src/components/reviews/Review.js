import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.deleteReview(this.props.id)
  }

  render(){
    return (
      <div>
        <li>
          {this.props.text}
          <button onClick={this.handleOnClick}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
