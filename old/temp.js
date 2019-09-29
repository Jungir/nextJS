import React, { Component } from 'react'
import { inspect } from 'util'

export default class extends Component {
  static getInitialProps(ctx) {
    return {
      pageLog: inspect(ctx, true, 0),
    }
  }

  componentDidMount() {
    console.log(this.props.pageLog);
  }

  render() {
    return <pre>Check the console ^^</pre>
  }
}