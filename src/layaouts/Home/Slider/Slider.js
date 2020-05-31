import React, { Component } from 'react'
import './Slider.scss'
import { Carousel } from "react-responsive-carousel"
import ButtonSecondary from '../../../components/buttons/ButtonSecondary/ButtonSecondary'
import Icon from '../../../components/icons/Icon'
import { Link } from 'react-router-dom'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format'
export default class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      promos: [
        {
          photo: 'https://www.fillmurray.com/164/168',
          title: 'Oferta de la casa',
          description: '2 Pizzas familiares: Pepperoni y Solo queso + Bebida 1.5lts',
          price: 13990,
          isPromo: false
        },
        {
          photo: 'https://www.fillmurray.com/300/300',
          title: '1',
          description: '1 Pizza familiar de la casa + 1 Porción de palitos tropicales + Bebida 1.5lts',
          price: 14990,
          isPromo: false
        },
        {
          photo: 'https://www.fillmurray.com/164/168',
          title: '2',
          description: '1 Pizzas familiar (pollo bbq) + 1 Pizza mediana (napolitana) + Palitos de ajo + Bebida 1.5lts',
          price: 19490,
          isPromo: false
        },
        {
          photo: 'https://www.fillmurray.com/164/168',
          title: '3',
          description: '1 Pizza pollo champiñón + 1 Pizza italiana + Bebida 1.5lts',
          price: 19490,
          isPromo: false
        },
        {
          photo: 'https://www.fillmurray.com/164/168',
          title: '4',
          description: '2 Pizzas familiares: Montañera y Hawaiana + Palitos de ajo + Bebida 1.5lts',
          price: 23990,
          isPromo: false
        },
        {
          photo: 'https://www.fillmurray.com/164/168',
          title: '5',
          description: '2 Pizzas familiares (con 3 ingredientes a elección por pizza) + Bebida 1.5lts',
          price: 21990,
          isPromo: false
        },
      ]
    }
  }
  render() {
    const { promos } = this.state
    const promoLabel = <div className="promo__carousel-is-promo">Promo</div>

    return (
      <Carousel autoPlay showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} swipeable={true}>
        {promos.map(promo => {
          return (
            <div className="promo__carousel-wrapper">
              <div className="promo__carousel-pic">
                <img src={promo.photo} alt={promo.title} />
              </div>
              <div className="promo__carousel-info">
                {promo.isPromo ? promoLabel : ''}
                <h2 className="promo__carousel-title">Combo {promo.title}</h2>
                <p className="promo__carousel-description">{promo.description}</p>
                <div className="promo__carousel-action">
                  <div className="promo__carousel-price">
                    <NumberFormat value={promo.price} displayType={'text'} thousandSeparator={'.'} prefix={'$'} decimalSeparator={','} />
                  </div>
                  <div className="promo__carousel-viewer">
                    <Link to="/order">
                      <ButtonSecondary subject='primary' isText='Ver Combo' isIcon={<Icon faIcon={faEye} />} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    )
  }
}
