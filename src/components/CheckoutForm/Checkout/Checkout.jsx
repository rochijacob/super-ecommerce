import React, { useState, useEffect } from "react";
//UI Components
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
//Styles
import useStyles from "./checkoutStyles";
//Local Components
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
//Checkout API
import { commerce } from "../../../lib/commerce";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  //When someone enters the checkout process generate a checkout token
  useEffect(() => {
    //In use Effect you cant use async unless its a separate function
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        console.log("token", token);
        setCheckoutToken(token);
      } catch (err) {
        console.log(err);
      }
    };
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  const Confirmation = () => <div>Confirmation</div>;

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
