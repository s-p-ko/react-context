import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JnJG2HwTgE8g7huawhGmQstKDTGkgr9l2NDYtX2B02Z4XZbAXIczGg4WAZdj3zLh2KPrF0rStbtepfJnAAaIRjE00OsPbckuh';

  const onToken = token => {
    //console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
