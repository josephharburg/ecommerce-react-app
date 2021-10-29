import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './cart-items.styles.scss';

const CartSidebar = ({toggleCartHidden}) => (
  <div className='cart-sidebar'>
    <span className='close-cart' title='Close' onClick={toggleCartHidden}>X</span>
    <div className='cart-items'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartSidebar);
