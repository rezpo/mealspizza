import React, { Component } from 'react'
import './ButtonsMain.scss'

export default class ButtonMain extends Component {

  buttonSubject = isSubject => {
    switch (isSubject) {
      case 'primary':
        return 'button--primary'
      case 'secondary':
        return 'button--secondary'
      case 'tertiary':
        return 'button--tertiary'
      case 'unactive':
        return 'button--unactive'
      default:
        return 'button--primary'
    }
  }
  render() {

    const buttonSubjectStyle = this.buttonSubject(
      this.props.isSubject ? this.props.isSubject : 'button--primary'
    )

    return (
      <button className={'button ' + buttonSubjectStyle} type={this.props.isType}>
        {this.props.isIcon}
        {this.props.isText}
      </button>
    )
  }
}
