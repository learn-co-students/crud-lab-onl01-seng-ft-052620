import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  };

  handleOnSubmit(e){
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  };

  handleOnChange(e){
    this.setState({
      text: e.target.value
    });
  };


  render() {
    return (
      <div>
        {/* Restaurant Input */}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  };
};

export default RestaurantInput;
