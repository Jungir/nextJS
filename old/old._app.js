import App from 'next/app';
import React from 'react';
import { inspect } from 'util';
export default class MyApp extends App {
    static async getInitialProps(something) {
      const { Component, ctx } = something;
      let pageProps = {}
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
  
      return {
        pageProps,
        appLog: inspect(something, true, 0),
      }
    }
  
    componentDidMount() {
      console.log(this.props.appLog, this.props.pageProps);
    }
  
    render() {
      const { Component, pageProps } = this.props;
  
      return (
        <div>
          <Component {...pageProps} />
        </div>
      )
    }
  }