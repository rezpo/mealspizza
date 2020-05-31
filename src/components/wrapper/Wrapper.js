import React, { Component } from 'react'
import Footer from '../../layaouts/Home/Footer/Footer'
import Header from '../../layaouts/Home/Header/Header'
import './Wrapper.scss'

export default class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper-page">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
