import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {ReactComponent as Logo} from '../../assets/wapuu-dev.svg';

const StripeCheckoutButton = ({price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_r5yVLwxEe0cDIlqPOAHPqWo3';

  const onToken = token => {
    console.log(token);
    alert('Thanks boy');
  }
  return(
    <StripeCheckout
      label='Pay Now'
      name='Ecommerce React Shop'
      billingAddress
      shippingAddress
      image='https://wapu.us/wp-content/uploads/2016/07/wapuu-dev.png'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now Boy"
      token={onToken}
      stripeKey={publishableKey}
      />

  );
};

export default StripeCheckoutButton;
