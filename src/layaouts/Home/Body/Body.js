import React, { Component } from 'react'
import ButtonMain from '../../../components/buttons/ButtonMain/ButtonMain'
import Icon from '../../../components/icons/Icon'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Body.scss'
// import picCatch from '../../../assets/eyecatch-pic.png'
// import Slider from '../Slider/Slider'

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="body__caption">
          <h1 className="body__caption-title">La pizza con auténtico sabor original</h1>
          <p className="body__paragraph">
            Descubre el verdadero sabor de la pizza como nunca antes lo has probado, y lo <strong>mejor de todo</strong> a la puerta de tu <strong>casa</strong>.
        </p>
          <div className="body__action">
            <div className="body__action-button">
              <Link to='/order'>
                <ButtonMain isSubject="primary" isText="Realizar pedido" isIcon={<Icon faIcon={faPizzaSlice} />} />
              </Link>
            </div>
          </div>
        </div>
        <div className="body__promo">
          {/* <div className="body__promo-wrapper">
            <div className="body__promo-item">
              <Slider />
            </div>
            <img src={picCatch} alt="Combos espectaculares al mejor precio" className="body-promo-eyecatch" />
          </div> */}
        </div>
      </div>
    )
  }
}
