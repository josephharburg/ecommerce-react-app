import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-items.styles.scss';

const CartSidebar = ({toggleCartHidden, cartItems}) => (
  <div className='cart-sidebar'>
    <span className='close-cart' title='Close' onClick={toggleCartHidden}>X</span>
    <div className='cart-items'>
      {console.log('heello' + cartItems)}
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({cartItems});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
