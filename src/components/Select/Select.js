import React, { Component } from "react";

class Select extends Component {
  render() {
    return (
      <select name="country" id="country">
        <option value="" defaultValue>
          2019
        </option>
        <option value="">2018</option>
        <option value="">2017</option>
        <option value="">2016</option>
        <option value="">2015</option>
        <option value="">2014</option>
        <option value="">2013</option>
      </select>
    );
  }
}

export default Select;
