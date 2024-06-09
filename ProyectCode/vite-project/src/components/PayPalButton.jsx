import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './cart'

const PayPalButton = () => {
  const paypalOptions = {
    "client-id": "AVv63YfoGYurfjnF6d1lk6B1B6J4qmU9MYAfZZybM1dw_y6uZw3sYYAgxVcNgL-BqTzi1Q_TtLtslq66",
    currency: "USD", 
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        style={{
          layout: "horizontal",
          color: "gold",
          shape: "rect",
          label: "pay",
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1.00", 
                  //no se ha llamado 
                },
              },
            ],
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;