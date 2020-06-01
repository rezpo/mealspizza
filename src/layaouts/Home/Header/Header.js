import React, { Component } from 'react'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary/ButtonSecondary'
import Icon from '../../../components/icons/Icon'
import { Link } from 'react-router-dom'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/"><Logo /></Link>
        <div className="header__menu">
          <div className="menu__item">
            <Link to="/delivery">
              <ButtonSecondary isSubject='primary' isText='Delivery' isIcon={<Icon faIcon={faBicycle} />} />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
