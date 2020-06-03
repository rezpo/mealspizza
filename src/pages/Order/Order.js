import React, { Component } from 'react'
import Wrapper from '../../components/wrapper/Wrapper'
import ButtonMain from '../../components/buttons/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/buttons/ButtonSecondary/ButtonSecondary'
import Icon from '../../components/icons/Icon'
import { faPizzaSlice, faTrashAlt, faStar, faBicycle, faThumbsUp, faHandPointUp, faUtensils, faClipboardList, faTimes, faBeer, faCookieBite } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format'
import Modal from 'react-modal'
import { HashLink as Link } from 'react-router-hash-link';
import './Order.scss'

Modal.setAppElement('#root')
export default class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catalog: [
        {
          photo: 'https://www.dropbox.com/s/xd7iw1r0mlax34a/cmb0.jpg?raw=1',
          title: 'De la casa',
          description: '2 Pizzas familiares: Pepperoni y Solo queso + Bebida 1.5lts',
          size: { size: 'FAM', price: 13990, id: 'CMB0', selectedIndicator: '', isSelected: false, name: 'Oferta de la casa' },
          isCombo: true
        },
        {
          photo: 'https://www.dropbox.com/s/8ygdc40kho0mw3z/cmb1.jpg?raw=1',
          title: '1',
          description: '1 Pizza familiar de la casa + 1 Porción de palitos tropicales + Bebida 1.5lts',
          size: { size: 'FAM', price: 14990, id: 'CMB1', selectedIndicator: '', isSelected: false, name: 'Combo 1' },
          isCombo: true
        },
        {
          photo: 'https://www.dropbox.com/s/x95pvubgbnteirk/cmb2.jpg?raw=1',
          title: '2',
          description: '1 Pizzas familiar (pollo bbq) + 1 Pizza mediana (napolitana) + Palitos de ajo + Bebida 1.5lts',
          size: { size: 'FAM', price: 19490, id: 'CMB2', selectedIndicator: '', isSelected: false, name: 'Combo 2' },
          isCombo: true
        },
        {
          photo: 'https://www.dropbox.com/s/6g07pe66pip7are/cmb3.jpg?raw=1',
          title: '3',
          description: '1 Pizza pollo champiñón + 1 Pizza italiana + Bebida 1.5lts',
          size: { size: 'FAM', price: 19490, id: 'CMB3', selectedIndicator: '', isSelected: false, name: 'Combo 3' },
          isCombo: true
        },
        {
          photo: 'https://www.dropbox.com/s/afo5c63ejjj1enr/cmb4.jpg?raw=1',
          title: '4',
          description: '2 Pizzas familiares: Montañera y Hawaiana + Palitos de ajo + Bebida 1.5lts',
          size: { size: 'FAM', price: 23990, id: 'CMB4', selectedIndicator: '', isSelected: false, name: 'Combo 4' },
          isCombo: true
        },
        {
          photo: 'https://www.dropbox.com/s/t2xq1dd3bt96h2h/cmb5.jpg?raw=1',
          title: '5',
          description: '2 Pizzas familiares (con 3 ingredientes a elección por pizza) + Bebida 1.5lts',
          size: { size: 'FAM', price: 21990, id: 'CMB5', selectedIndicator: '', isSelected: false, name: 'Combo 5' },
          isCombo: true
        },
        {
          photo: 'https://www.dropbox.com/s/r9zrx60n7ns46jp/REM0.jpg?raw=1',
          title: 'De la casa',
          description: 'Mozzarella, carne, tocino, cebolla y base BBQ',
          size: { size: 'MED', price: 8990, id: 'REM0', selectedIndicator: '', isSelected: false, name: 'De la casa' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/r9zrx60n7ns46jp/REM0.jpg?raw=1',
          title: 'De la casa',
          description: 'Mozzarella, carne, tocino, cebolla y base BBQ',
          size: { size: 'FAM', price: 10990, id: 'REL0', selectedIndicator: '', isSelected: false, name: 'De la casa' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/r9zrx60n7ns46jp/REM0.jpg?raw=1',
          title: 'De la casa',
          description: 'Mozzarella, carne, tocino, cebolla y base BBQ',
          size: { size: 'XL', price: 13490, id: 'REX0', selectedIndicator: '', isSelected: false, name: 'De la casa' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/30rsvlsbj2dzl25/REM1.jpg?raw=1',
          title: 'Hawaiana',
          description: 'Mozzarella, piña y jamón',
          size: { size: 'MED', price: 8990, id: 'REM1', selectedIndicator: '', isSelected: false, name: 'Hawaiana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/30rsvlsbj2dzl25/REM1.jpg?raw=1',
          title: 'Hawaiana',
          description: 'Mozzarella, piña y jamón',
          size: { size: 'FAM', price: 10990, id: 'REL1', selectedIndicator: '', isSelected: false, name: 'Hawaiana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/30rsvlsbj2dzl25/REM1.jpg?raw=1',
          title: 'Hawaiana',
          description: 'Mozzarella, piña y jamón',
          size: { size: 'XL', price: 12490, id: 'REX1', selectedIndicator: '', isSelected: false, name: 'Hawaiana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/danpcm6ga6ini13/REM2.jpg?raw=1',
          title: 'Pollo champiñón',
          description: 'Mozzarella, pollo y champiñón',
          size: { size: 'MED', price: 7990, id: 'REM2', selectedIndicator: '', isSelected: false, name: 'Pollo champiñón' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/danpcm6ga6ini13/REM2.jpg?raw=1',
          title: 'Pollo champiñón',
          description: 'Mozzarella, pollo y champiñón',
          size: { size: 'FAM', price: 9990, id: 'REL2', selectedIndicator: '', isSelected: false, name: 'Pollo champiñón' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/danpcm6ga6ini13/REM2.jpg?raw=1',
          title: 'Pollo champiñón',
          description: 'Mozzarella, pollo y champiñón',
          size: { size: 'XL', price: 12990, id: 'REX2', selectedIndicator: '', isSelected: false, name: 'Pollo champiñón' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/wibny9dipwrz552/REM3.jpg?raw=1',
          title: 'Montañera',
          description: 'Mozzarella, carne, tocino, choclo y maduro',
          size: { size: 'MED', price: 9990, id: 'REM3', selectedIndicator: '', isSelected: false, name: 'Montañera' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/wibny9dipwrz552/REM3.jpg?raw=1',
          title: 'Montañera',
          description: 'Mozzarella, carne, tocino, choclo y maduro',
          size: { size: 'FAM', price: 11490, id: 'REL3', selectedIndicator: '', isSelected: false, name: 'Montañera' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/wibny9dipwrz552/REM3.jpg?raw=1',
          title: 'Montañera',
          description: 'Mozzarella, carne, tocino, choclo y maduro',
          size: { size: 'XL', price: 13490, id: 'REX3', selectedIndicator: '', isSelected: false, name: 'Montañera' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/omxz5dtqytr927j/REM4.jpg?raw=1',
          title: 'BBQ',
          description: 'Mozzarella, pollo, tocino, cebolla, base BBQ',
          size: { size: 'MED', price: 7990, id: 'REM4', selectedIndicator: '', isSelected: false, name: 'BBQ' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/omxz5dtqytr927j/REM4.jpg?raw=1',
          title: 'BBQ',
          description: 'Mozzarella, pollo, tocino, cebolla, base BBQ',
          size: { size: 'FAM', price: 9990, id: 'REL4', selectedIndicator: '', isSelected: false, name: 'BBQ' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/omxz5dtqytr927j/REM4.jpg?raw=1',
          title: 'BBQ',
          description: 'Mozzarella, pollo, tocino, cebolla, base BBQ',
          size: { size: 'XL', price: 12490, id: 'REX4', selectedIndicator: '', isSelected: false, name: 'BBQ' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/2kldkhz9jqbnij1/REM5.jpg?raw=1',
          title: 'Italiana',
          description: 'Mozzarella, churrasco, tomate y palta.',
          size: { size: 'MED', price: 8990, id: 'REM5', selectedIndicator: '', isSelected: false, name: 'Italiana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/2kldkhz9jqbnij1/REM5.jpg?raw=1',
          title: 'Italiana',
          description: 'Mozzarella, churrasco, tomate y palta.',
          size: { size: 'FAM', price: 10990, id: 'REL5', selectedIndicator: '', isSelected: false, name: 'Italiana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/2kldkhz9jqbnij1/REM5.jpg?raw=1',
          title: 'Italiana',
          description: 'Mozzarella, churrasco, tomate y palta.',
          size: { size: 'XL', price: 12990, id: 'REX5', selectedIndicator: '', isSelected: false, name: 'Italiana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/jtnnw9xuoluu5x2/REM6.jpg?raw=1',
          title: 'Napolitana',
          description: 'Mozzarella, tomate y orégano',
          size: { size: 'MED', price: 6990, id: 'REM6', selectedIndicator: '', isSelected: false, name: 'Napolitana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/jtnnw9xuoluu5x2/REM6.jpg?raw=1',
          title: 'Napolitana',
          description: 'Mozzarella, tomate y orégano',
          size: { size: 'FAM', price: 8990, id: 'REL6', selectedIndicator: '', isSelected: false, name: 'Napolitana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/jtnnw9xuoluu5x2/REM6.jpg?raw=1',
          title: 'Napolitana',
          description: 'Mozzarella, tomate y orégano',
          size: { size: 'XL', price: 10490, id: 'REX6', selectedIndicator: '', isSelected: false, name: 'Napolitana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/i8jrf6esvypzkoi/REM7.jpg?raw=1',
          title: 'Pepperoni',
          description: 'Extra mozzarella y pepperoni',
          size: { size: 'MED', price: 4990, id: 'REM7', selectedIndicator: '', isSelected: false, name: 'Pepperoni' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/i8jrf6esvypzkoi/REM7.jpg?raw=1',
          title: 'Pepperoni',
          description: 'Extra mozzarella y pepperoni',
          size: { size: 'FAM', price: 8990, id: 'REL7', selectedIndicator: '', isSelected: false, name: 'Pepperoni' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/i8jrf6esvypzkoi/REM7.jpg?raw=1',
          title: 'Pepperoni',
          description: 'Extra mozzarella y pepperoni',
          size: { size: 'XL', price: 10490, id: 'REX7', selectedIndicator: '', isSelected: false, name: 'Pepperoni' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/j98qvwvbulzbnvi/REM8.jpg?raw=1',
          title: 'Solo queso',
          description: 'Extra de mozzarella',
          size: { size: 'MED', price: 4990, id: 'REM8', selectedIndicator: '', isSelected: false, name: 'Solo queso' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/j98qvwvbulzbnvi/REM8.jpg?raw=1',
          title: 'Solo queso',
          description: 'Extra de mozzarella',
          size: { size: 'FAM', price: 6990, id: 'REL8', selectedIndicator: '', isSelected: false, name: 'Solo queso' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/j98qvwvbulzbnvi/REM8.jpg?raw=1',
          title: 'Solo queso',
          description: 'Extra de mozzarella',
          size: { size: 'XL', price: 8990, id: 'REX8', selectedIndicator: '', isSelected: false, name: 'Solo queso' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/dvcgwmqp7f35rfz/REM9.jpg?raw=1',
          title: 'Vegetariana',
          description: 'Mozzarella, tomate, pimentón verde y rojo, choclo y champiñón',
          size: { size: 'MED', price: 7990, id: 'REM9', selectedIndicator: '', isSelected: false, name: 'Vegetariana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/dvcgwmqp7f35rfz/REM9.jpg?raw=1',
          title: 'Vegetariana',
          description: 'Mozzarella, tomate, pimentón verde y rojo, choclo y champiñón',
          size: { size: 'FAM', price: 9990, id: 'REL9', selectedIndicator: '', isSelected: false, name: 'Vegetariana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/dvcgwmqp7f35rfz/REM9.jpg?raw=1',
          title: 'Vegetariana',
          description: 'Mozzarella, tomate, pimentón verde y rojo, choclo y champiñón',
          size: { size: 'XL', price: 12990, id: 'REX9', selectedIndicator: '', isSelected: false, name: 'Vegetariana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/7k78ujxrmf7j6wq/REM10.jpg?raw=1',
          title: 'Vegana',
          description: 'Queso vegano, pimentón verde y rojo, choclo, aceituna y tomate',
          size: { size: 'MED', price: 8990, id: 'REM10', selectedIndicator: '', isSelected: false, name: 'Vegana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/7k78ujxrmf7j6wq/REM10.jpg?raw=1',
          title: 'Vegana',
          description: 'Queso vegano, pimentón verde y rojo, choclo, aceituna y tomate',
          size: { size: 'FAM', price: 10990, id: 'REL10', selectedIndicator: '', isSelected: false, name: 'Vegana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/7k78ujxrmf7j6wq/REM10.jpg?raw=1',
          title: 'Vegana',
          description: 'Queso vegano, pimentón verde y rojo, choclo, aceituna y tomate',
          size: { size: 'XL', price: 13490, id: 'REX10', selectedIndicator: '', isSelected: false, name: 'Vegana' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/d1wu4kzwjmy3mwd/REM11.jpg?raw=1',
          title: 'Lomo pizza',
          description: 'Mozzarella, tomate, churrasco, lechuga, huevos omelette, orégano, aceituna, pimentón rojo.',
          size: { price: 18000, id: 'REM11', selectedIndicator: '', isSelected: false, name: 'Lomo pizza' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/gtcz0bag4quokvr/LAG0.jpg?raw=1',
          title: 'Lasaña de pollo',
          description: 'Pasta, salsa bechamel, piña, pollo, jamón, choclo y queso',
          size: { price: 5490, id: 'LAG0', selectedIndicator: '', isSelected: false, name: 'Lasaña de pollo' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/mflpqr12pgwn6ud/LAG1.jpg?raw=1',
          title: 'Lasaña de carne vacuno',
          description: 'Pasta, salsa bechamel, piña, pollo, jamón, choclo y queso',
          size: { price: 5490, id: 'LAG1', selectedIndicator: '', isSelected: false, name: 'Lasaña de carne vacuno' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/mflpqr12pgwn6ud/LAG1.jpg?raw=1',
          title: 'Lasaña mixta',
          description: 'Pasta, salsa bechamel, piña, pollo, jamón, choclo y queso',
          size: { price: 5490, id: 'LAG2', selectedIndicator: '', isSelected: false, name: 'Lasaña mixta' },
          isCombo: false
        },
        {
          photo: 'https://www.dropbox.com/s/mflpqr12pgwn6ud/LAG1.jpg?raw=1',
          title: 'Lasaña tropical',
          description: 'Pasta, salsa bechamel, piña, pollo, jamón, choclo y queso',
          size: { price: 5490, id: 'LAG3', selectedIndicator: '', isSelected: false, name: 'Lasaña tropical' },
          isCombo: false
        },
      ],
      extras: [
        {
          name: 'Palitos tropicales',
          price: 4490,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Alitas de pollo',
          price: 3490,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Palitos de ajo',
          price: 2990,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Papas fritas',
          price: 2990,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Boder de queso',
          price: 1990,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Salsa BBQ spicy',
          price: 300,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Salsa de ajo',
          price: 300,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Salsa BBQ',
          price: 300,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Salsa de pizza',
          price: 300,
          isSelected: false,
          selectedIndicator: ''
        }
      ],
      refreshments: [
        {
          name: 'Coca cola 1.5lts',
          price: 2490,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Fanta zero 1.5lts',
          price: 2490,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Sprite light 1.5lts',
          price: 2490,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Coca cola lata',
          price: 1000,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Fanta zero lata',
          price: 1000,
          isSelected: false,
          selectedIndicator: ''
        },
        {
          name: 'Sprite light lata',
          price: 1000,
          isSelected: false,
          selectedIndicator: ''
        }
      ],
      catalogSelected: [],
      extraSelected: [],
      refreshmentSelected: [],
      order: [],
      deliveryCost: 0,
      modalIsOpen: false,
      fullName: '',
      contactNumber: '',
      deliveryAddress: '',
      msg: []
    }
  }

  selectSizeHandler = (index) => () => {
    const catalogItems = [...this.state.catalog]
    let onlySelected = []

    catalogItems[index].size.isSelected = !catalogItems[index].size.isSelected
    if (catalogItems[index].size.isSelected) {
      catalogItems[index].size.selectedIndicator = 'check'
    } else {
      catalogItems[index].size.selectedIndicator = ''
    }

    catalogItems.forEach(item => {
      if (item.size.isSelected) {
        onlySelected.push(item.size)
      }
    })

    this.setState({ catalogSelected: onlySelected })
  };

  selectExtras = (index) => () => {
    const extrasItems = [...this.state.extras]
    let onlySelected = []

    extrasItems[index].isSelected = !extrasItems[index].isSelected
    if (extrasItems[index].isSelected) {
      extrasItems[index].selectedIndicator = 'check'
    } else {
      extrasItems[index].selectedIndicator = ''
    }

    extrasItems.forEach(item => {
      if (item.isSelected) {
        onlySelected.push(item)
      }
    })

    this.setState({ extraSelected: onlySelected })
  };

  selectRefreshment = (index) => () => {
    const refreshItems = [...this.state.refreshments]
    let onlySelected = []

    refreshItems[index].isSelected = !refreshItems[index].isSelected
    if (refreshItems[index].isSelected) {
      refreshItems[index].selectedIndicator = 'check'
    } else {
      refreshItems[index].selectedIndicator = ''
    }

    refreshItems.forEach(item => {
      if (item.isSelected) {
        onlySelected.push(item)
      }
    })

    this.setState({ refreshmentSelected: onlySelected })
  };

  orderSummary = () => {
    this.setState({
      order: [this.state.catalogSelected, this.state.extraSelected, this.state.refreshmentSelected]
    })
  }

  showModal = () => {
    this.setState({ modalIsOpen: true })
  }

  hideModal = () => {
    this.setState({ modalIsOpen: false })
  }

  clientData = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  componentDidUpdate(prevProps, prevState) {
    const { catalogSelected, extraSelected, refreshmentSelected } = this.state

    if (prevState.catalogSelected !== catalogSelected || prevState.extraSelected !== extraSelected || prevState.refreshmentSelected !== refreshmentSelected) {
      this.orderSummary()
    }
  }

  render() {
    const { catalog, extras, refreshments, order, modalIsOpen, deliveryCost, fullName, contactNumber, deliveryAddress } = this.state
    const isCombo = <div className="combo"><Icon faIcon={faStar} /><strong>Combo</strong></div>
    let productsSummary = []
    let msgOrder = []
    let totalSumary, msgCompleteOrder

    order.forEach(item => {
      item.forEach(product => {
        let msgComplete
        msgComplete = `${product.name}+${product.size ? product.size : ''}`
        productsSummary.push(product.price)
        msgOrder.push(msgComplete)
      })
    })

    totalSumary = productsSummary.reduce((orderTotal, eachProduct) => orderTotal + eachProduct, 0)
    msgCompleteOrder = msgOrder.join('+')

    return (
      <Wrapper>
        <div className="order">
          <div className="order__header">
            <div className="title">
              <Icon faIcon={faUtensils} />
              <strong>Arma tu pedido</strong>
            </div>
            <div className="tabs-link">
              <Link to="#extras">
                <ButtonSecondary isSubject="secondary" isText="Extras" isIcon={<Icon faIcon={faCookieBite} />} />
              </Link>
              <Link to="#refreshments">
                <ButtonSecondary isSubject="secondary" isText="Bebidas" isIcon={<Icon faIcon={faBeer} />} />
              </Link>
            </div>
          </div>
          <div className="order__catalog-selector">
            <div className="order__catalog">
              {catalog.map((item, index) => {
                return (
                  <div key={index} className={`order__catalog-item ${item.size.selectedIndicator}`} id={item.size.id} onClick={this.selectSizeHandler(index)}>
                    <div className="order__catalog-pic">
                      <img src={item.photo} alt={item.title} />
                    </div>
                    <div className="order__catalog-info">
                      <div className="order__catalog-info-title-size">
                        {item.isCombo ? isCombo : ''}
                        <strong className="order__catalog-info-title">{item.title}</strong>
                        {item.size.size ?
                          <div className="order__catalog-info-size">
                            <span className="size">{item.size.size}</span>
                          </div> : ''}
                      </div>
                      <p className="order__catalog-info-description">{item.description}</p>
                      <div className="order__catalog-item-sizes">
                        <div className="order__catalog-item-size">
                          <div className="size-price">
                            <div className={"size-item "}>
                              {item.size.isSelected ? <Icon faIcon={faTrashAlt} /> : ''}
                              <NumberFormat value={item.size.price} displayType={'text'} thousandSeparator={'.'} prefix={'$'} decimalSeparator={','} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              <span className="bottom-fade"></span>
            </div>
            <div className="order__extra" id="extras">
              <div className="order__extra-title"><strong>Extras</strong></div>
              <div className="order__extra-items">
                {extras.map((extra, index) => {
                  return (
                    <div key={index} className={"order__extra-item " + extra.selectedIndicator} onClick={this.selectExtras(index)}>
                      <div className="item-name">
                        {extra.isSelected ? <Icon faIcon={faTrashAlt} /> : ''}
                        {extra.name}
                      </div>
                      <div className="item-price">
                        <NumberFormat value={extra.price} displayType={'text'} thousandSeparator={'.'} prefix={'$'} decimalSeparator={','} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="order__refreshments" id="refreshments">
              <div className="order__refreshments-title"><strong>Bebidas</strong></div>
              <div className="order__extra-items">
                {refreshments.map((refreshment, index) => {
                  return (
                    <div key={index} className={"order__extra-item " + refreshment.selectedIndicator} onClick={this.selectRefreshment(index)}>
                      <div className="item-name">
                        {refreshment.isSelected ? <Icon faIcon={faTrashAlt} /> : ''}
                        {refreshment.name}
                      </div>
                      <div className="item-price">
                        <NumberFormat value={refreshment.price} displayType={'text'} thousandSeparator={'.'} prefix={'$'} decimalSeparator={','} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="order__action">
            <div className="order__total">
              <strong>Total</strong>
              <strong><NumberFormat value={totalSumary} displayType={'text'} thousandSeparator={'.'} prefix={'$'} decimalSeparator={','} /></strong>
              <small>El precio de delivery será agragado una vez continues con tu pedido</small>
            </div>
            {totalSumary === 0 ? <div className="order__submit--disable">
              <ButtonMain isSubject='unactive' isText='Selecciona algún producto' isIcon={<Icon faIcon={faHandPointUp} />} />
            </div> : <div className="order__submit" onClick={this.showModal}>
                <ButtonMain isSubject='primary' isText='Continuar' isIcon={<Icon faIcon={faPizzaSlice} />} />
              </div>}
          </div>
          <Modal isOpen={modalIsOpen} onRequestClose={this.hideModal} className='modal__wrapper' overlayClassName='modal__layout'>
            <div className="modal__header">
              <div className="modal-title"><Icon faIcon={faClipboardList} /><strong>Información de tu pedido</strong></div>
              <div className="modal-close" onClick={this.hideModal}><Icon faIcon={faTimes} /></div>
            </div>
            <div className="modal__body">
              {order.map(category => {
                return (
                  category.map((product, index) => {
                    return (
                      <div key={index} className="modal-product">
                        <span className="product-quantity">1</span>
                        <span className="product-name">{`${product.name} ${product.size ? product.size : ''}`}</span>
                        <span className="product-price"><NumberFormat value={product.price} displayType={'text'} thousandSeparator={'.'} prefix={'$'} decimalSeparator={','} /></span>
                      </div>
                    )
                  })
                )
              })}
              <div className="order-cost">
                <div className="modal-product">
                  <span className="product-name">Delivery</span>
                  <span className="product-price"><NumberFormat value={deliveryCost} displayType={'text'} thousandSeparator={'.'} prefix={'$'} decimalSeparator={','} /></span>
                </div>
                <strong className="product-total">Total: <NumberFormat value={totalSumary + deliveryCost} displayType={'text'} thousandSeparator={'.'} prefix={'$'} decimalSeparator={','} /></strong>
              </div>
              <div className="modal-delivery">
                <div className="delivery-title"><Icon faIcon={faBicycle} /><strong>Información de despacho</strong></div>
                <div className="delivery-input">
                  <label>Nombre</label>
                  <input type="text" name="fullName" placeholder="Joaquín" onChange={this.clientData} />
                </div>
                <div className="delivery-input">
                  <label>Numero de telefono</label>
                  <input type="number" name="contactNumber" pattern="[0-9]{9}" placeholder="955555555" onChange={this.clientData} />
                </div>
                <div className="delivery-input">
                  <label>Dirección de despacho</label>
                  <input type="text" name="deliveryAddress" placeholder="Calle Nº (depto)" onChange={this.clientData} />
                </div>
              </div>
            </div>
            {(!fullName || !contactNumber || !deliveryAddress) ?
              <div className="order__submit">
                <ButtonMain isSubject='unactive' isText='Llena el formulario' isIcon={<Icon faIcon={faHandPointUp} />} />
              </div>
              :
              <div className="order__submit">
                <a href={`https://wa.me/56920469612?text=${fullName} para completar tu pedido solo debes hacer transferencia a%0A%0AMaria Antonella Perez%0ARut 25124016-7%0ACuenta cte 0215303743%0ABanco ITAU%0Amealspizza@gmail.cl%0A%0ADetalle de tu pedido%0A%0A${msgCompleteOrder}%0ATotal: $${totalSumary + deliveryCost}%0ADespacho a ${deliveryAddress}%0ANº de contacto 56${contactNumber}`}>
                  <ButtonMain isSubject='primary' isText='Confirmar pedido' isIcon={<Icon faIcon={faThumbsUp} />} />
                </a>
              </div>
            }
          </Modal>
        </div>
      </Wrapper>
    )
  }
}
