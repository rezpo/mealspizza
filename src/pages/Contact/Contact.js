import React, { Component } from 'react'
import Wrapper from '../../components/wrapper/Wrapper'
import ButtonMain from '../../components/buttons/ButtonMain/ButtonMain'
import Icon from '../../components/icons/Icon'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss'

export default class Delivery extends Component {
  render() {
    return (
      <Wrapper>
        <div className="contact">
          <div className="contact-info">
            <h2 className="title">Si nos visitas desde tu celular solo presiona en "llamar a Meal's Pizza" y nos contactarás de forma inmediata</h2>
            <div className="contact-btn">
              <a href="tel:+56961420311">
                <ButtonMain subject="primary" isText="Llamar a Meal's Pizza" isIcon={<Icon faIcon={faPhoneAlt} />} />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}
