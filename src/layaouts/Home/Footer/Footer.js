import React, { Component } from 'react'
import './Footer.scss'
import Icon from '../../../components/icons/Icon'
import { Link } from 'react-router-dom'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__info">
          <Link to="/contact">
            <Icon faIcon={faPhoneAlt} /><span>Contáctanos</span>
          </Link>
        </div>
      </div>
    )
  }
}
