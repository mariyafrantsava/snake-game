import React, { Component } from "react";
import './Statistic.css';

export default class StatisticItem extends Component {

  render() {
    const { eatenFood, maxSpeed } = this.props;

    return (
      <span className='statistic-list-item'>
        <span className="statistic-list-item-label">
          <span>food: </span>
          <span className="statistic-color1">{eatenFood}</span>
          <span>,</span>
          <span> speed: </span>
          <span className="statistic-color2">{maxSpeed}</span>
        </span>
      </span>
    );
  }
}