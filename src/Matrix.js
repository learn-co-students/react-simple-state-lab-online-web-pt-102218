import React, { Component } from 'react';
import { pattern1, pattern2 } from './data';
import Cell from './Cell.js'
export default class Matrix extends Component {
  static defaultProps = {
    values : pattern2
  }

  genRow = (vals) => (
    vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}