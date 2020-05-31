import React, { Component } from 'react'
import './ButtonSecondary.scss'

export default class ButtonMain extends Component {

  buttonSubject = isSubject => {
    switch (isSubject) {
      case 'primary':
        return 'button-secondary--primary'
      case 'secondary':
        return 'button-secondary--secondary'
      case 'tertiary':
        return 'button-secondary--tertiary'
      case 'unactive':
        return 'button-secondary--unactive'
      default:
        return 'button-secondary--primary'
    }
  }
  render() {

    const buttonSubjectStyle = this.buttonSubject(
      this.props.isSubject ? this.props.isSubject : 'button--primary'
    )

    return (
      <button className={'button-secondary ' + buttonSubjectStyle} onClick={this.props.forAction} type={this.props.isType}>
        {this.props.isIcon}
        {this.props.isText}
      </button>
    )
  }
}
